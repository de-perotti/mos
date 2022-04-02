import * as React from 'react';
import * as config from '../core/config';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';

const Offline: NextPage = () => {
    return (
        <>
            <NextSeo
                title={`${config.domainName} (offline)`}
                description={config.appDescription}
                canonical={config.hostName}
                openGraph={{
                    url: config.hostName,
                    title: `${config.domainName} (offline)`,
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
                <p>Você está offline</p>
            </div>
        </>
    );
};

export default Offline;
