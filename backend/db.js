const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "0908",
  database: "patientsGestions",
});

module.exports = pool;
