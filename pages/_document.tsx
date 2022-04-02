import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as config from '../core/config';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="canonical" href={config.hostName} />

                    {/* PWA - start */}
                    <meta name="application-name" content={config.domainName} />
                    <meta name="description" content={config.appDescription} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta
                        name="msapplication-config"
                        content="/images/browserconfig.xml"
                    />
                    <meta name="msapplication-TileColor" content="#2B5797" />
                    <meta
                        name="msapplication-TileImage"
                        content="/images/icons/ms-icon-144x144.png"
                    />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/images/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="mask-icon"
                        href="/images/icons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <link
                        rel="shortcut icon"
                        href="/images/icons/favicon.ico"
                    />
                    {/* PWA - end */}

                    {/* iPhone specific - start */}
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="black-translucent"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content={config.domainName}
                    />
                    <link
                        rel="apple-touch-icon"
                        href="/images/icons/apple-icon.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/images/icons/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/images/icons/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/images/icons/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/images/icons/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/images/icons/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/images/icons/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/images/icons/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/images/icons/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/images/icons/apple-icon-180x180.png"
                    />
                    {/*apple splash screen images*/}
                    {/*<link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />*/}
                    {/*<link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />*/}
                    {/*<link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />*/}
                    {/*<link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />*/}
                    {/*<link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />*/}
                    {/*<link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />*/}
                    {/*<link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />*/}
                    {/* iPhone specific - end */}

                    {/* Twitter - start */}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content={config.hostName} />
                    <meta name="twitter:title" content={config.domainName} />
                    <meta
                        name="twitter:description"
                        content={config.appDescription}
                    />
                    <meta
                        name="twitter:image"
                        content={`${config.hostName}/images/icons/android-chrome-192x192.png`}
                    />
                    <meta
                        property="twitter:image:alt"
                        content="perotti.dev logo"
                    />
                    {/* Twitter - end */}

                    {/* OpenGraph - start */}
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={config.domainName} />
                    <meta
                        property="og:description"
                        content={config.appDescription}
                    />
                    <meta property="og:site_name" content={config.domainName} />
                    <meta property="og:url" content={config.hostName} />
                    <meta
                        property="og:image"
                        content={`${config.hostName}/images/icons/apple-touch-icon.png`}
                    />
                    <meta
                        property="og:image:secure_url"
                        content={`${config.hostName}/images/icons/apple-touch-icon.png`}
                    />
                    <meta property="og:image:alt" content="perotti.dev logo" />
                    {/* OpenGraph - end */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
