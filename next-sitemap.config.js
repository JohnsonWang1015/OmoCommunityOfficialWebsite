/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://wennei.org',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: [],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
};
