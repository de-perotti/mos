/** @typedef IConfig {import('next-sitemap').IConfig} */
/** @typedef NextConfig {import('next').NextConfig} */

const withPWA = require('next-pwa');
const { EnvironmentPlugin } = require('webpack');
const runtimeCaching = require('next-pwa/cache');

const env = require('dotenv-extended').load({
    errorOnExtra: true,
    errorOnMissing: true,
    errorOnRegex: true,
    includeProcessEnv: true,
    overrideProcessEnv: false,
});

module.exports = withPWA(
    /** @type {IConfig & NextConfig} */ ({
        webpack(config) {
            config.plugins.push(new EnvironmentPlugin(env));

            return config;
        },
        swcMinify: true,
        siteUrl:
            process.env.VERCEL_ENV === 'preview'
                ? process.env.VERCEL_URL
                : env.NEXT_PUBLIC_HOST_NAME,
        generateRobotsTxt: true,
        pwa: {
            dest: 'public',
            register: true,
            scope: '/',
            sw: '/service-worker.js',
            dynamicStartUrl: false,
            runtimeCaching,
            buildExcludes: [
                /**
                 * @link https://github.com/shadowwalker/next-pwa/issues/288
                 * @description compatibility with next 12 is incomplete, but it works.
                 * Try removing those middleware exclusions at some point
                 * and see if it runs in production without any errors
                 */
                /middleware-build-manifest\.js$/,
                /middleware-react-loadable-manifest\.js$/,
            ],
        },
        reactStrictMode: true,
        compiler: {
            removeConsole: process.env.NODE_ENV === 'production',
        },
    })
);
