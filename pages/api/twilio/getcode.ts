import twilio from 'twilio';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = twilio(
  process.env.ACCOUNT_SID as string,
  process.env.AUTH_TOKEN as string
);

const LOCALE = 'id';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    res.status(500).json({ error: 'Only POST method allowed' });

  const { type, receiver } = req.body;

  try {
    const response = await client.verify
      .services(process.env.VERIFY_SERVICE_SID as string)
      .verifications.create({
        to: receiver,
        channel: type,
        locale: LOCALE,
      });
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error, check console' });
  }
}
