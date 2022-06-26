import React, { useState, Component } from "react";
import axios from "axios";
import OtpInput from "react-otp-input";
import { en } from "../../../public/static/locales/en/common";
import { Title } from "../sections/finansial-check/FinansialCheck";
import { SubTitleSection, SubTitleSectionSm, SubTitleSectionWM } from "../text/SubtitleSection";

const ifFirstCharIsZero = (phoneNum) => {
	if (phoneNum.charAt(0) === "0") {
		return phoneNum.slice(1);
	} else {
		return phoneNum;
	}
};

const Placeholder = ({}) => {
	const [data, setData] = useState();
	const [phoneNumber, setPhoneNumber] = useState("");
	const [cipher, setCipher] = useState("");
	const [flip, setFlip] = useState("placeholder");
	const [isVerify, setisVerify] = useState(true);

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
        setisVerify(false)
				return setData(res.data.results);
			});
	};

	const checkVerify = async () => {
		phoneNumber = ifFirstCharIsZero(phoneNumber);
		await axios
			.get("/api/verifycode", {
				params: {
					ver: phoneNumber,
					cipher: cipher,
				},
			})
			.then((res) => {
				window.location = `/signup?wa=+62${phoneNumber}`;
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
      {isVerify
          ? <>
          <Title.Provider value={en.section1.alpha}>
            <SubTitleSection />
          </Title.Provider>
          <Title.Provider value={en.section1.invite}>
            <SubTitleSectionWM />
          </Title.Provider></>
          : 
          <Title.Provider value={en.section1.send + ' ' + '+' + phoneNumber}>
            <SubTitleSection />
          </Title.Provider>
        }
			<div
				className={`my-2 flex flex-row justify-between align-middle lg:w-2/3 ${flip}`}
        id="placeholder"
			>
				<div className="flip-card-inner flex-row justify-between align-middle items-center self-center">
					<div className="flip-card-front flex flex-row justify-between">
            <div className="mr-2 rounded-md p-2 flex flex-row items-center justify-center bg-neutralBackground">
              +62
            </div>
            <input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Your WhatsApp here"
              minLength={10}
            />
            <button
              className="btn-try rounded-md p-2 min-w-fit"
              onClick={handleStartVerify}
            >
              Try it first
            </button>
					</div>
					<div className="flip-card-back flex flex-row justify-between">
						<OtpInput
							value={cipher}
							onChange={setCipher}
							numInputs={6}
							separator={<span className='separator'></span>}
              shouldAutoFocus
							isInputNum={true}
              inputStyle='box'
						/>
						<button className="btn-try rounded-md p-2 min-w-fit" onClick={handleCheckVerify}>Try it first</button>
					</div>
				</div>
			</div>
      <Title.Provider value={en.section1.policy}>
        <SubTitleSectionSm />
      </Title.Provider>
		</>
	);
};

export default Placeholder;
