import pg from 'pg';

const Pool = pg.Pool;

const pool = new Pool({
    user: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT as unknown as number,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false,
        ca: process.env.DB_PGCACERT as string,
    },
});

export default pool;
