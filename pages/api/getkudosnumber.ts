import pool from '$utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const response = await getKudosNumber();

    res.status(200).json({ data: response });
}
const getKudosNumber = async () => {
  const query = 'SELECT * FROM users_final ORDER BY id DESC LIMIT 1';
  const arr: any[] = [];
  return new Promise((resolve, reject) => {
    pool.query(query, arr, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve((res.rows[0].id + 1));
      }
    });
  });
};