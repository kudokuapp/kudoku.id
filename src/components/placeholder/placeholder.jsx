import React, { useState } from "react";
import axios from "axios";
import OtpInput from "react-otp-input";
import { en } from "../../../public/static/locales/en/common";
import { Title } from "../sections/finansial-check/FinansialCheck";
import { SubTitleSection, SubTitleSectionWM } from "../text/SubtitleSection";
import Link from "next/link";

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
	const [border, setBorder] = useState("border-outline");
	const [isVerify, setisVerify] = useState(true);
	const [isInvalid, setisInvalid] = useState(true);
  const [seconds, setSeconds] = React.useState(10);
  const [miliseconds, setMiliseconds] = React.useState('00:');
  const [resendTxt, setResendTxt] = React.useState("Didn't get it? Resend the code in");

	const startVerify = async () => {
		await axios
			.get("/api/getcode", {
				params: {
					ver: phoneNumber,
				},
			})
			.then((res) => {
				setFlip("flip-card")
        setBorder("border-outline")
        setSeconds(10)
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
        if(res.error) {
          setisInvalid(false)
          setBorder("border-rose-600")
        }
				window.location = `/signup?wa=+62${phoneNumber}`;
			})
      .catch(() => {
        setisInvalid(false)
        setBorder("border-rose-600")
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
	const retypeNumber = () => {
    setBorder("border-outline")
		setFlip('placeholder')
    setisVerify(true)
	};
  
  React.useEffect(() => {
      if(!isVerify) {
        if (seconds > 0) {
          setTimeout(() => setSeconds(`0${seconds - 1}`), 1000);
        }  
        if(seconds === '00') {
          setSeconds(<button onClick={startVerify}>now</button>);
          setResendTxt("Didn't get it? Resend the code");
          setMiliseconds('')
        }
      }
  });
  
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
          <Title.Provider value={en.section1.send + ' ' + '+62' + phoneNumber}>
            <SubTitleSection />
          </Title.Provider>
        }
			<div
				className={`my-2 flex flex-row justify-between align-middle lg:w-2/3 ${flip}`}
        id="placeholder"
			>
				<div className="flip-card-inner flex-row justify-between align-middle items-center self-center">
					<div className={`flip-card-front flex flex-row justify-between border-4 border-outline`}>
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
              type="number"
            />
            <button
              className="btn-try rounded-md p-2 min-w-fit"
              onClick={handleStartVerify}
            >
              Try it first
            </button>
					</div>
					<div className={`flip-card-back flex flex-row justify-between border-4 ${border}`}>
						<OtpInput
							value={cipher}
							onChange={setCipher}
							numInputs={6}
							separator={<span className='separator'></span>}
							isInputNum={true}
              inputStyle='box'
						/>
						<button className="btn-try rounded-md p-2 min-w-fit" onClick={handleCheckVerify}>Try it first</button>
					</div>
				</div>
			</div>
      {isInvalid
            ?
              <>
              </>
            :
              <>
              <h4 className="text-rose-600 text-left text-sm">Invalid code! Please input the right one</h4>
              </>
          }
      {isVerify
          ? <>
          <h4 className="text-black text-left text-sm">{en.section1.policy} <span className="text-primary"><Link href="/privacy">Privacy Policy</Link></span></h4>
          </>
          : 
          <>
          <h4 className="text-black text-left text-sm">{resendTxt} <span className="text-primary">{miliseconds}{seconds}</span></h4>
          <h4 className="text-black text-left text-sm">Entering the wrong number? <span className="text-primary"><button type="button" onClick={retypeNumber}>re-type phone number</button></span></h4>
          </>
        }
		</>
	);
};

export default Placeholder;
