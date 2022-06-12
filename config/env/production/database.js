const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: `${config.DATABASE_HOST || config.host}`,
        port: `${ config.DATABASE_PORT || config.port}`,
        database: `${ config.DATABASE_NAME || config.database}`,
        user: `${ config.DATABASE_USERNAME || config.user}`,
        password: `${ config.DATABASE_PASSWORD || config.password}`,
      },
      options: {
        rejectUnauthorized: false
      }
    }
  },
});
