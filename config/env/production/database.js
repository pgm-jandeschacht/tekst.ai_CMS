const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.process.env.DATABASE_HOST,
        port: config.process.env.DATABASE_PORT,
        database: config.process.env.DATABASE_NAME,
        user: config.process.env.DATABASE_USERNAME,
        password: config.process.env.DATABASE_PASSWORD,
      },
      options: {
        rejectUnauthorized: false
      }
    }
  },
});
