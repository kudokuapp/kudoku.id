import twilio from "twilio";
import "dotenv/config";

const { ACCOUNT_SID: account_sid, AUTH_TOKEN: auth_token } = process.env;

const client = twilio(account_sid, auth_token);

const locale = "en";

export default function handler(req, res) {
	client.verify
		.services(process.env.VERIFY_SERVICE_SID)
		.verifications.create({
			to: `+62${req.query.ver}`,
			channel: "sms",
			locale: locale,
		})
		.then((data) => {
			res.status(200).send(data);
		});
}
