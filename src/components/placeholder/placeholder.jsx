import React, { useState, Component } from 'react';
import axios from "axios";
import OtpInput from "react-otp-input";

const Placeholder = ({ }) => {
    const [data, setData] = useState();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [cipher, setCipher] = useState("");
    const [flip, setFlip] = useState("placeholder");

    const startVerify = async () => {
        await axios.get('http://localhost:3000/verify/getcode', {
            params: {
                ver: phoneNumber
            }
        })
        .then((res) => {
            console.log(phoneNumber)
            setFlip("flip-card")
            return setData(res.data.results)
        })
    };

    const checkVerify = async () => {
        await axios.get('http://localhost:3000/verify/verifycode', {
            params: {
                ver: phoneNumber,
                cipher: cipher
            }
        })
        .then((res) => {
            window.open(`https://kudoku.typeform.com/to/PZR271ql#wa=${phoneNumber}#index=1`, '_blank');
            console.log(phoneNumber)
            console.log(res.data.results)
            // return setData(res.data.results)
        })
    };

    const handleStartVerify = (event) => {
        event.preventDefault();
        startVerify()
    };
    const handleCheckVerify = (event) => {
        event.preventDefault();
        checkVerify()
    };
    return (
        <>
        <div className={`my-2 flex flex-row justify-between w-2/3 ${flip}`}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="flex flex-row">
                        <div className="mr-4">+62</div>
                        <input type="number"
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                        placeholder="Your WhatsApp here" />
                        <button onClick={handleStartVerify}>try</button>
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
    )
}

export default Placeholder;