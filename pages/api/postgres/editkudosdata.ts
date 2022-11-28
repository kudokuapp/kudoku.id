import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '$utils/postgres';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, firstname, lastname, email } = req.body;

  try {
    const response: any = await dbQuery(
      id,
      upperCaseEveryLetter(firstname),
      upperCaseEveryLetter(lastname),
      email
    );

    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
}

async function dbQuery(
  id: string | number,
  firstname: string,
  lastname: string,
  email: string
) {
  const query =
    'UPDATE users_final SET firstname=$2, lastname=$3, email=$4 WHERE id=$1';

  const arr = [id, firstname, lastname, email];

  return new Promise(function (resolve, reject) {
    pool.query(query, arr, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows[0]);
      }
    });
  });
}

const upperCaseEveryLetter = (str: string) => {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};
