import pg from "pg";
import "dotenv/config";
import twilio from "twilio";
import fs from "fs";

const Pool = pg.Pool;

const { ACCOUNT_SID: account_sid, AUTH_TOKEN: auth_token } = process.env;

const client = twilio(account_sid, auth_token);
const locale = "en";

const {
	DB_USERNAME: dbUser,
	DB_PASSWORD: dbPassword,
	DB_HOST: dbHost,
	DB_PORT: dbPort,
	DB_DATABASE: dbDatabase,
} = process.env;

const pool = new Pool({
	user: dbUser,
	password: dbPassword,
	host: dbHost,
	port: dbPort,
	database: dbDatabase,
	ssl: {
		rejectUnauthorized: true,
		ca: fs.readFileSync("./ca-certificate.crt").toString(),
	},
});

export default function handler(req, res) {
	client.verify
		.services(process.env.VERIFY_SERVICE_SID)
		.verificationChecks.create({
			to: `+62${req.query.ver}`,
			code: req.query.cipher,
			locale: locale
		})
		.then((data) => {
			res.send(data);
			const wa = `${data.to}`;
			const today = new Date();
			const date = `${today.getFullYear()}-${
				today.getMonth() + 1
			}-${today.getDate()}`;
			
			if (data.data.valid) {
				res.status(200).send(data);
				//Push wa to database here
				pool.query(
					"INSERT INTO users_wa (whatsapp, registerDate) VALUES ($1, $2)",
					[wa, date],
					(err) => {
						if (err) {
							console.error(err);
						}
					}
				);
			}
		})
		.catch((error) => {
			console.log(error)
			logger.error(error);
			res.send(error);
		})
}
