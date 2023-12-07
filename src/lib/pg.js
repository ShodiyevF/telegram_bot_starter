const pg = require('pg');

const pool = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWDD,
    database: process.env.DB_NAME,
});

const fetchPsql = async (query, ...arr) => {
    try {
        const client = await pool.connect();
        const data = await client.query(query, arr);
        client.release();
        return data.rows;
    } catch (error) {
        console.log(error, query);
    }
};

module.exports = {
    fetchPsql
};
