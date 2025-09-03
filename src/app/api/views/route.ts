import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { NextRequest, NextResponse } from "next/server";

const analyticsDataClient = new BetaAnalyticsDataClient({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path") || "/";
    const propertyId = process.env.GA4_PROPERTY_ID!;

    const [response] = await analyticsDataClient.runReport({
        property: propertyId,
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }],
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensionFilter: {
            filter: {
                fieldName: "pagePath",
                stringFilter: { value: path },
            },
        },
    });

    const views = response.rows?.[0]?.metricValues?.[0]?.value || 0;
    return NextResponse.json({ path, views });
}
