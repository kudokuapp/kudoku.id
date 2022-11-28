import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '$utils/postgres';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { whatsapp } = req.body;

  try {
    const response: any = await dbQuery(whatsapp);

    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
}

async function dbQuery(whatsapp: string) {
  const query = 'SELECT * FROM users_final WHERE whatsapp=$1';

  const arr = [whatsapp];

  return new Promise(function (resolve, reject) {
    pool.query(query, arr, (err, res) => {
      if (err) {
        reject(err);
      } else if (!res.rows[0]) {
        reject('Cannot find user');
      } else {
        resolve(res.rows[0]);
      }
    });
  });
}
