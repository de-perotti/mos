const env = require('./env');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:
        env.VERCEL_ENV === 'preview'
            ? env.VERCEL_URL
            : env.NEXT_PUBLIC_HOST_NAME,
    generateRobotsTxt: true,
    sitemapSize: 100,
};
