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
  try {
    const response = await client.verify
      .services(process.env.VERIFY_SERVICE_SID as string)
      .verifications.create({
        to: `+62${req.query.ver}`,
        channel: 'sms',
        locale: LOCALE,
      });

    const result = await response.toJSON();

    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ success: false });
  }
}
