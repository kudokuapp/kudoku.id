import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '$utils/postgres';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  try {
    const response: any = await dbQuery(email);

    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
}

async function dbQuery(email: string) {
  const query = 'SELECT * FROM users_final WHERE email=$1';

  const arr = [email];

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
