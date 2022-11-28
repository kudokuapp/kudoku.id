import pool from '$utils/postgres';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getKudosNumber();
    res.status(200).json(response);
  } catch (e) {
    const error = e as Error;
    res.status(500).json({ error: error.message });
  }
}

const getKudosNumber = (): Promise<number> => {
  const query = 'SELECT * FROM users_final ORDER BY id DESC LIMIT 1';
  const arr: any[] = [];
  return new Promise((resolve, reject) => {
    pool.query(query, arr, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve((res.rows[0].id as number) + 1);
      }
    });
  });
};
