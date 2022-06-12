const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
      },
      options: {
        rejectUnauthorized: false
      }
    }
  },
});
