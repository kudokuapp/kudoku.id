import pool from '$utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await dbQuery();
        res.status(200).send(response);
    } catch (e) {
        // console.error(JSON.stringify(e));
        res.status(200).send(e);
    }
}

const dbQuery = async () => {
    const queryString = 'SELECT * FROM website_comments ORDER BY commentdate DESC';

    return new Promise((reject, resolve) => {
        pool.query(queryString, [], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
};
