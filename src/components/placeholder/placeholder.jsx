import React, { useState, Component } from "react";
import axios from "axios";
import OtpInput from "react-otp-input";

const Placeholder = ({}) => {
	const [data, setData] = useState();
	const [phoneNumber, setPhoneNumber] = useState("");
	const [cipher, setCipher] = useState("");
	const [flip, setFlip] = useState("placeholder");

	const startVerify = async () => {
		await axios
			.get("/api/getcode", {
				params: {
					ver: phoneNumber,
				},
			})
			.then((res) => {
				console.log(phoneNumber);
				setFlip("flip-card");
				return setData(res.data.results);
			});
	};

	const checkVerify = async () => {
		await axios
			.get("/api/verifycode", {
				params: {
					ver: phoneNumber,
					cipher: cipher,
				},
			})
			.then((res) => {
				window.location = `/signup?wa=${phoneNumber}`;
				console.log(phoneNumber);
				console.log(res.data.results);
				// return setData(res.data.results)
			});
	};

	const handleStartVerify = (event) => {
		event.preventDefault();
		startVerify();
	};
	const handleCheckVerify = (event) => {
		event.preventDefault();
		checkVerify();
	};
	return (
		<>
			<div
				className={`my-2 flex flex-row justify-between align-middle lg:w-2/3 ${flip}`}
			>
				<div className="flip-card-inner flex-row justify-between align-middle items-center self-center">
					<div className="flip-card-front">
						<div className="flex flex-row">
							<div className=" mr-2 rounded-md p-2 flex flex-row items-center justify-center bg-neutralBackground">+62</div>
							<input
								type="number"
								value={phoneNumber}
								onChange={(e) => {
									setPhoneNumber(e.target.value);
								}}
								placeholder="Your WhatsApp here"
							/>
							<button className="btn-try rounded-md p-2 min-w-fit" onClick={handleStartVerify}>
								Try it first
							</button>
						</div>
					</div>
					<div className="flip-card-back flex flex-row justify-between">
						<OtpInput
							value={cipher}
							onChange={setCipher}
							numInputs={6}
							separator={<span>-</span>}
						/>
						<button onClick={handleCheckVerify}>verify</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Placeholder;
