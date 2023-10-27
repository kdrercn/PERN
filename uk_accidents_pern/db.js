const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "181210",
    host: "localhost",
    port: 5432,
    database: "uk_accidents1"
});

module.exports = pool;