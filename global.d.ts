declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_DOMAIN_NAME: string;
        }
    }
}

export {};
