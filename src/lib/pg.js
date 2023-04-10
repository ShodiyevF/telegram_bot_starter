require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const pg = require('pg');

const pool = new pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

const uniqRow = async (query, ...arr) => {
    try {
        const client = await pool.connect();
        const data = await client.query(query, arr);
        client.release();
        return data;
    } catch (error) {}
};

module.exports = {
    uniqRow,
};
