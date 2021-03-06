import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import Link from 'next/link';

const ifFirstCharIsZero = (phoneNum) => {
  if (phoneNum.charAt(0) === '0') {
    return phoneNum.slice(1);
  } else {
    return phoneNum;
  }
};

export default function Placeholder({}) {
  const [data, setData] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [err_msg, seterr_msg] = useState('');
  const [cipher, setCipher] = useState('');
  const [flip, setFlip] = useState('placeholder');
  const [border, setBorder] = useState('border-outline');
  const [borderOnfocus, setBorderOnfocus] = useState('border-outline');
  const [isVerify, setisVerify] = useState(true);
  const [isInvalid, setisInvalid] = useState(true);
  const [seconds, setSeconds] = useState(10);
  const [miliseconds, setMiliseconds] = useState('00:');
  const [resendTxt, setResendTxt] = useState("Didn't get it? Resend the code in");

  const startVerify = async () => {
    if (phoneNumber === '') {
      setisInvalid(false);
      seterr_msg('Phone number is empty!');
      setBorderOnfocus('border-rose-600');
    }
    if (phoneNumber !== '') {
      await axios
        .get('/api/getcode', {
          params: {
            ver: phoneNumber,
          },
        })
        .then((res) => {
          setFlip('flip-card');
          setBorder('border-outline');
          setSeconds(10);
          setisVerify(false);
          setisInvalid(true);
          return setData(res.data.results);
        })
        .catch((e) => console.error(e.response.data));
    }
  };

  const checkVerify = async () => {
    phoneNumber = ifFirstCharIsZero(phoneNumber);
    await axios
      .get('/api/verifycode', {
        params: {
          ver: phoneNumber,
          cipher: cipher,
        },
      })
      .then((data) => {
        if (data.data.valid) {
          window.location = `/signup?wa=+62${phoneNumber}`;
        }
        if (!data.data.valid) {
          setisInvalid(false);
          setBorder('border-rose-600');
          seterr_msg('Invalid code! Please input the right one');
        }
        // console.log(data)
        // if (res.status === 500) {
        // 	setisInvalid(false);
        // 	setBorder("border-rose-600");
        // }
      })
      .catch((e) => console.error(e.response.data));
  };

  const handleStartVerify = (event) => {
    event.preventDefault();
    startVerify();
  };
  const handleCheckVerify = (event) => {
    event.preventDefault();
    if (cipher !== '') {
      checkVerify();
    }
  };
  const retypeNumber = () => {
    setBorder('border-outline');
    setBorderOnfocus('border-outline');
    setFlip('placeholder');
    setisVerify(true);
    setisInvalid(true);
    setCipher('');
    seterr_msg('');
    setPhoneNumber('');
  };

  let timer1;
  if (seconds > 0) {
    timer1 = setTimeout(() => setSeconds(`0${seconds - 1}`), 1000);
  }
  if (seconds === '00') {
    setSeconds(<button onClick={startVerify}>now</button>);
    setResendTxt("Didn't get it? Resend the code");
    setMiliseconds('');
  }

  return (
    <div>
      {isVerify ? (
        <p className="text-onPrimaryContainer text-left text-sm">
          Get early access and help shape the product by joining the waitlist!
        </p>
      ) : (
        <p className="text-onPrimaryContainer text-left text-sm">
          Type the verification code sent to{' '}
          <span className="text-primary">{`+62${phoneNumber}`}</span>
        </p>
      )}
      <div
        className={`my-2 flex flex-row justify-between align-middle lg:w-2/3 ${flip}`}
        id="placeholder"
      >
        <div className="flip-card-inner flex-row justify-between align-middle items-center self-center">
          <div
            className={`flip-card-front flex flex-row justify-between border-4 ${borderOnfocus}`}
          >
            <div className="mr-2 rounded-md p-2 flex flex-row items-center justify-center bg-neutralBackground">
              +62
            </div>
            <input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onFocus={() => {
                if (isInvalid === true) {
                  setBorderOnfocus('border-primary');
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
            <button className="btn-try rounded-md p-2 min-w-fit" onClick={handleStartVerify}>
              Try it first
            </button>
          </div>
          <div
            className={`flip-card-back flex flex-row justify-between border-4 ${border}`}
            onFocus={() => {
              if (isInvalid === true) {
                setBorder('border-primary');
              }
            }}
          >
            <OtpInput
              className="otp-input"
              value={cipher}
              onChange={setCipher}
              numInputs={6}
              separator={<span className="separator"></span>}
              isInputNum={true}
              inputStyle="box"
            />
            <button className="btn-try rounded-md p-2 min-w-fit" onClick={handleCheckVerify}>
              Try it first
            </button>
          </div>
        </div>
      </div>
      {isInvalid ? (
        <></>
      ) : (
        <>
          <h4 className="text-rose-600 text-left text-sm">{err_msg}</h4>
        </>
      )}
      {isVerify ? (
        <>
          <h4 className="text-onPrimaryContainer text-left text-xs">
            By clicking the button, you agree with our{' '}
            <span className="text-primary">
              <Link href="/privacy">Privacy Policy</Link>
            </span>
          </h4>
        </>
      ) : (
        <>
          <h4 className="text-black text-left text-sm">
            {resendTxt} <span className="text-primary">{seconds}</span>
          </h4>
          <h4 className="text-black text-left text-sm">
            Entering the wrong number?{' '}
            <span className="text-primary">
              <button type="button" onClick={retypeNumber}>
                re-type phone number
              </button>
            </span>
          </h4>
        </>
      )}
    </div>
  );
}
