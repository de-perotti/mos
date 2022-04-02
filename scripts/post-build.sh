set -e

yarn next-sitemap;
yarn ts-node-transpile-only --project tsconfig-script.json scripts/genRss.ts;
