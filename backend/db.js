const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: "1337",
    host: "localhost", // если на другом пк либо на серве, то надо изменить с localhost на х.х.х.х
    port: 5432,
    database: "spp_jobfinder"
})

module.exports = pool