const activeEnv = process.env.NODE_ENV || 'local';
const envFile = `./env.${activeEnv}`;
const env = require(envFile);
const commonConfig = require('./common');

const envConfig = {
  env: env.ENV,
  port: process.env.PORT || env.PORT,
  database: {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    databaseName: env.DATABASE_NAME,
    userName: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    ssl: env.DATABASE_SSL || false,
    srv: env.DATABASE_SRV,
    poolSize: env.POOL_SIZE || 5,
  }
};

module.exports = { ...envConfig, ...commonConfig };
