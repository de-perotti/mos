const withPWA = require('next-pwa');
const { EnvironmentPlugin } = require('webpack');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA(
    /** @type {import('next').NextConfig} */ ({
        webpack(config) {
            const env = require('dotenv-extended').load({
                errorOnExtra: true,
                errorOnMissing: true,
                errorOnRegex: true,
                includeProcessEnv: true,
                overrideProcessEnv: false,
            });

            config.plugins.push(new EnvironmentPlugin(env));

            return config;
        },
        swcMinify: true,
        pwa: {
            dest: 'public',
            register: true,
            scope: '/',
            sw: '/service-worker.js',
            dynamicStartUrl: false,
            runtimeCaching,
            buildExcludes: [
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
