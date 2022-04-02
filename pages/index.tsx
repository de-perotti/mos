import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import * as config from '../core/config';

const Home: NextPage = () => {
    return (
        <>
            <NextSeo
                title={config.domainName}
                description={config.appDescription}
                canonical={config.hostName}
                openGraph={{
                    url: config.hostName,
                    title: config.domainName,
                    description: config.appDescription,
                    images: [
                        {
                            url: `${config.hostName}/images/icons/ms-icon-310x310.png`,
                            width: 310,
                            height: 310,
                            alt: `${config.domainName} icon`,
                            type: 'image/png',
                        },
                    ],
                    site_name: config.domainName,
                }}
            />
            <div>
                <a href="https://www.github.com/de-perotti/mos">
                    <h1>{config.domainName} (under construction)</h1>
                </a>
            </div>
        </>
    );
};

export default Home;
