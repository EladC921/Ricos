require("dotenv").config();
const env = process.env;

const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false,
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
