'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import { RegisterButton } from './components/RegisterButton';
import { RightArrowIcon } from './components/RightArrowIcon';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ifFirstCharIsZero = (phoneNum: string): string => {
  if (phoneNum.charAt(0) === '0') {
    return phoneNum.slice(1);
  } else {
    return phoneNum;
  }
};

export const Placeholder = ({
  type,
  buttonText,
  parentId,
}: {
  type: 'footer' | 'normal';
  buttonText: string;
  parentId: string | number | null;
}): JSX.Element => {
  const router = useRouter();

  const [phoneNum, setPhoneNum] = useState('');
  const [cipher, setCipher] = useState('');
  const [otpPlaceholder, setOtpPlaceholder] = useState(false);
  const [counter, setCounter] = useState(30);
  const [err, setErr] = useState('');

  useEffect(() => {
    counter > 0 &&
      otpPlaceholder &&
      setTimeout(() => {
        setCounter((time) => time - 1);
      }, 1000);
  }, [counter, otpPlaceholder]);

  const handleClick = () => {
    toast
      .promise(checkKudos(), {
        loading: 'Loading',
        success: 'Kamu sudah jadi Kudos!',
        error: 'Kamu belum jadi Kudos!',
      })
      .then(
        () => {
          router.push(`/queue/62${ifFirstCharIsZero(phoneNum)}`);
        },
        () => {
          toast
            .promise(getCode(), {
              loading: 'Kirim OTP...',
              success: `Sukses kirim OTP ke +62${ifFirstCharIsZero(phoneNum)}`,
              error: 'Gagal kirim OTP',
            })
            .then(() => {
              setOtpPlaceholder(true);
            });
        }
      );
  };

  const checkKudos = async () => {
    await axios.post('/api/postgres/checkkudos', {
      whatsapp: `+62${ifFirstCharIsZero(phoneNum)}`,
    });
  };

  const getCode = async () => {
    await axios.get('/api/twilio/getcode', {
      params: {
        ver: ifFirstCharIsZero(phoneNum),
      },
    });
  };

  const verifyCode = async () => {
    try {
      const response = await axios.get('/api/twilio/verifycode', {
        params: {
          ver: ifFirstCharIsZero(phoneNum),
          cipher: cipher,
        },
      });
      if (response.data.valid) {
        router.push(
          `/daftar?wa=62${ifFirstCharIsZero(phoneNum)}&parentId=${parentId}`
        );
      } else if (!response.data.valid) {
        setErr('Kodenya salah');
      }
    } catch (e) {
      setErr('Kodenya salah');
    }
  };

  const renderCounter = () => {
    if (counter === 0) {
      return (
        <button
          onClick={async () => {
            setCipher('');
            setErr('');
            setCounter(30);
            await getCode();
          }}
        >
          <p
            className={`${
              type === 'footer' ? 'text-errorContainer' : 'text-primary'
            }  font-[500]`}
          >
            sekarang
          </p>
        </button>
      );
    } else {
      return (
        <span
          className={`${
            type === 'footer' ? 'text-errorContainer' : 'text-primary'
          }  font-[500]`}
        >{`00:${counter >= 10 ? counter : `0${counter}`}`}</span>
      );
    }
  };

  const renderError = () => {
    if (err) {
      return <p className="m-0 mt-2 text-right font-[500] text-error">{err}</p>;
    }
  };

  const renderPlaceholder = () => {
    if (otpPlaceholder) {
      return (
        <>
          <Back
            cipher={cipher}
            setCipher={setCipher}
            onClick={verifyCode}
            err={err}
          />
          {renderError()}
          <p
            className={`m-0 mt-2 ${
              type === 'footer'
                ? 'text-secondaryContainer'
                : 'text-onPrimaryContainer'
            } `}
          >
            Tuliskan kode sms di nomor{' '}
            <span
              className={`${
                type === 'footer' ? 'text-errorContainer' : 'text-primary'
              }  font-[500]`}
            >{`+62${ifFirstCharIsZero(phoneNum)}`}</span>
          </p>
          <p
            className={`m-0 ${
              type === 'footer'
                ? 'text-secondaryContainer'
                : 'text-onPrimaryContainer'
            } `}
          >
            Gadapet? Coba lagi dalam{' '}
            <span className="inline">{renderCounter()}</span>
          </p>
          <p
            className={`m-0 ${
              type === 'footer'
                ? 'text-secondaryContainer'
                : 'text-onPrimaryContainer'
            } `}
          >
            Salah nomor?{' '}
            <button
              onClick={() => {
                setPhoneNum('');
                setCipher('');
                setErr('');
                setOtpPlaceholder(false);
                setCounter(30);
              }}
            >
              <p
                className={`${
                  type === 'footer' ? 'text-errorContainer' : 'text-primary'
                }  font-[500]`}
              >
                reset
              </p>
            </button>
          </p>
        </>
      );
    } else {
      return (
        <Front
          onClick={handleClick}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setPhoneNum(e.currentTarget.value);
          }}
          phoneNum={phoneNum}
          buttonText={buttonText}
        />
      );
    }
  };
  return (
    <div
      className="max-w-[500px] mx-auto text-left select-none w-full h-fit"
      id="placeholder"
    >
      {renderPlaceholder()}
    </div>
  );
};

const Front = ({
  onClick,
  onChange,
  phoneNum,
  buttonText,
}: {
  onClick: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: any) => void;
  phoneNum: string;
  buttonText: string;
}) => {
  return (
    <div className="flex flex-row justify-between border-4 border-outline w-full h-fit rounded-2xl p-4 sm:text-2xl xs:text-lg text-base shadow-2xl items-center bg-onPrimary focus-within:border-primary fade-in">
      <div className="flex gap-2">
        <div className="rounded-md px-2 py-1 h-fit w-fit flex flex-row items-center justify-center bg-outline text-onPrimary text-base font-[500] tracking-wider">
          +62
        </div>
        <input
          className="bg-transparent w-full font-[500] 
                    text-onPrimaryContainer placeholder:text-onPrimaryContainer focus:placeholder:opacity-50 focus:placeholder:tracking-normal focus:outline-none"
          onKeyDown={(e) => {
            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
              e.preventDefault();
            }
          }}
          placeholder="WhatsApp Kamu..."
          type="tel"
          onChange={onChange}
          maxLength={13}
        />
      </div>
      <RegisterButton
        onClick={onClick}
        disabled={
          !phoneNum || phoneNum.length < 9 || !/^08\d|^8\d/g.test(phoneNum)
        }
        text={buttonText}
      />
    </div>
  );
};

const Back = ({
  cipher,
  setCipher,
  onClick,
  err,
}: {
  cipher: string;
  setCipher: any;
  onClick: () => void;
  err: any;
}) => {
  return (
    <div
      className={`flex flex-row gap-4 justify-between border-4 ${
        err
          ? 'border-error focus-within:border-error'
          : 'border-outline focus-within:border-primary'
      } w-full h-full min-h-[90px] rounded-2xl sm:p-4 p-2 sm:text-2xl text-base shadow-2xl items-center bg-onPrimary  ${
        styles.flip
      }`}
    >
      <OtpInput
        value={cipher}
        onChange={setCipher}
        numInputs={6}
        isInputNum={true}
        placeholder="123123"
        containerStyle="w-full flex flex-row justify-between gap-1"
        focusStyle="border-2 border-error"
        inputStyle={styles.otpInput}
      />
      <button className="min-w-fit h-fit drop-shadow-xl z-50" onClick={onClick}>
        <RightArrowIcon />
      </button>
    </div>
  );
};
