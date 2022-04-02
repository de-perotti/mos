const withPWA = require('next-pwa');
const { EnvironmentPlugin } = require('webpack');

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
        pwa: {
            dest: 'public',
        },
        reactStrictMode: true,
        compiler: {
            removeConsole: true,
        },
        experimental: {
            swcMinify: true,
        },
    })
);
