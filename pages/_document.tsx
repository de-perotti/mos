import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as config from '../core/config';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="canonical" href={config.hostName} />
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
