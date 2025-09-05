import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const analyticsDataClient = new BetaAnalyticsDataClient({
    // keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    credentials: {
        client_email: process.env.GA_CLIENT_EMAIL,
        // 避免換行被吃掉
        private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
});

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const path = url.searchParams.get("path") || "/";
        const range = url.searchParams.get("range") || "30daysAgo,today";
        const metricsParam = url.searchParams.get("metrics") || "screenPageViews,sessions,totalUsers";
        const [startDate, endDate] = range.split(",");
        const metrics = metricsParam.split(",").map((name) => ({name}));
        const propertyId = process.env.GA4_PROPERTY_ID!;

        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dimensions: [{name: "pagePath"}],
            metrics,
            dateRanges: [{startDate, endDate}],
            dimensionFilter: {
                filter: {
                    fieldName: "pagePath",
                    stringFilter: {value: path},
                },
            },
        });

        const row = response.rows?.[0];
        const out: Record<string, number> = {};
        row?.metricValues?.forEach((m, i) => (out[metrics[i].name] = Number(m.value || 0)));

        return NextResponse.json({
            path,
            range: {startDate, endDate},
            metrics: {
                views: out.screenPageViews || 0,
                sessions: out.sessions || 0,
                users: out.totalUsers || 0,
            },
        }, {headers: {"Cache-Control": "s-maxage=120, stale-while-revalidate=300"}});
    }catch(error) {
        console.error("GA4 Error:", error);
        return NextResponse.json({ error: "analytics_error" }, { status: 500 });
    }
}
