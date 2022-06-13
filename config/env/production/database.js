const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.DATABASE_HOST,
        port: config.DATABASE_PORT,
        database: config.DATABASE_NAME,
        user: config.DATABASE_USERNAME,
        password: config.DATABASE_PASSWORD,
      },
      options: {
        ssl: true,
        rejectUnauthorized: false,
      }
    }
  },
});
