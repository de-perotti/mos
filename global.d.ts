declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_DOMAIN_NAME: string;
            NEXT_PUBLIC_HOST_NAME: string;
        }
    }
}

export {};
