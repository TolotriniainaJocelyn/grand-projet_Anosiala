const Pool = require("pg").Pool

const pool = new Pool({
    user : "postgres",
    password : "0908",
    database : "paterntodo"
})

module.exports = pool; 