const { Pool } = require('pg');

// Isi sendiri database password-nya, janlup setup postgres dl
// Schema udah ada di turing-game\server\db\schema.sql
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'turing_game',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
}; 