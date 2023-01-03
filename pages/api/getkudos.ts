import pool from '$utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const email = `${req.query.email}`;

    const response = await dbQuery(email);

    res.status(200).json({ data: response });
}

const dbQuery = async (email: string) => {
    const queryString = `SELECT * FROM users_final WHERE email=$1`;
    const arr = [email];

    return new Promise((resolve, reject) => {
        pool.query(queryString, arr, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.rows[0]);
            }
        });
    });
};
