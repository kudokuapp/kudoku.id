import twilio from 'twilio';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = twilio(
  process.env.TWILIO_ACCCOUNT_SID as string,
  process.env.TWILIO_AUTH_TOKEN as string
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    res.status(500).json({ error: 'Only POST method allowed' });

  const { code, receiver } = req.body;

  try {
    const response = await client.verify.v2
      .services(process.env.TWILIO_SERVICE_SID as string)
      .verificationChecks.create({ to: receiver, code: code });
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error, see console' });
  }
}
