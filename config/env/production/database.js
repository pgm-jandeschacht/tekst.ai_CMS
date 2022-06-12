const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: `${process.env.DATABASE_HOST || config.host}`,
      port: `${ process.env.DATABASE_PORT || config.port}`,
      database: `${ process.env.DATABASE_NAME || config.database}`,
      user: `${ process.env.DATABASE_USERNAME || config.user}`,
      password: `${ process.env.DATABASE_PASSWORD || config.password}`,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
