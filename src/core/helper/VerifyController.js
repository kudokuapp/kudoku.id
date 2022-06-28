const client = require("twilio")(
	process.env.ACCOUNT_SID,
	process.env.AUTH_TOKEN
);
const Pool = require("pg").Pool;
const dotenv = require("dotenv/config");
const locale = "en";
const fs = require("fs");

//Postgresql credentials
const {
	DB_USERNAME: dbUser,
	DB_PASSWORD: dbPassword,
	DB_HOST: dbHost,
	DB_PORT: dbPort,
	DB_DATABASE: dbDatabase,
} = process.env;

//Intiliaze database
const pool = new Pool({
	user: dbUser,
	password: dbPassword,
	host: dbHost,
	port: dbPort,
	database: dbDatabase,
	ssl: {
		rejectUnauthorized: true,
		ca: fs.readFileSync(`./ca-certificate.crt`).toString(),
	},
});

exports.getCode = async (req, res) => {
	client.verify
		.services(process.env.VERIFY_SERVICE_SID)
		.verifications.create({
			to: `+${req.query.ver}`,
			channel: "sms",
			locale: locale,
		})
		.then((data) => {
			res.status(200).send(data);
		});
};

exports.verifyCode = async (req, res) => {
	client.verify
		.services(process.env.VERIFY_SERVICE_SID)
		.verificationChecks.create({
			to: `+${req.query.ver}`,
			code: req.query.cipher,
		})
		.then((data) => {
			res.status(200).send(data);

			const wa = `${data.to}`;
			const today = new Date();
			const date = `${today.getFullYear()}-${
				today.getMonth() + 1
			}-${today.getDate()}`;

			if (data.valid == true) {
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
		});
};
