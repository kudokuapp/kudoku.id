import twilio from 'twilio';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = twilio(
  process.env.ACCOUNT_SID as string,
  process.env.AUTH_TOKEN as string
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const twilioResponse = await client.verify
      .services(process.env.VERIFY_SERVICE_SID as string)
      .verificationChecks.create({
        to: `+62${req.query.ver}`,
        code: req.query.cipher as string,
      });

    if (!twilioResponse.valid) {
      throw new Error('Invalid code');
    }

    res.status(200).send(twilioResponse);
  } catch (e) {
    res.status(500).send(e);
  }
}
