import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default CustomApp;