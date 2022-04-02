module.exports = require('dotenv-extended').load({
    encoding: 'utf8',
    silent: true,
    path: '.env',
    defaults: '.env.defaults',
    schema: '.env.schema',
    errorOnExtra: true,
    errorOnMissing: true,
    errorOnRegex: true,
    includeProcessEnv: true,
    overrideProcessEnv: false,
    assignToProcessEnv: true,
});
