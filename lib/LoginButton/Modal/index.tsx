'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import ProgressButton from '$lib/ProgressButton';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Tooltip } from '$lib/Tooltip';
import TextInput from '$lib/TextInput';
import { useRouter } from 'next/router';

export default function Modal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  // const router = useRouter();
  const [input, setInput] = useState('');
  const [otp, setOtp] = useState('');
  const [progress, setProgress] = useState('initial');
  const [kudosNo, setKudosNo] = useState(0);

  useEffect(() => {
    (async function () {
      const url = new URL(
        '/api/postgres/getkudosnumber',
        process.env.NODE_ENV === 'production'
          ? 'https://kudoku.id'
          : 'http://localhost:3000'
      );
      const response = await axios.get(url.href);

      setKudosNo(response.data);
    })();
  }, []);

  const getCode = async () => {
    await axios.post('/api/twilio/getcode', {
      type: 'email',
      receiver: input,
    });
  };

  const checkOtp = async () => {
    await axios.post('/api/twilio/verifycode', {
      code: otp,
      receiver: input,
    });
  };

  const checkKudos = () => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          await axios.post('/api/postgres/checkkudosbyemail', {
            email: input,
          });
          reject('Udah jadi kudos');
        } catch (e) {
          resolve('Belum jadi Kudos');
        }
      })();
    });
  };

  const handleSendOtpRejection = () => {
    return toast(
      (t) => (
        <div className="flex flex-col">
          <p>
            Nampaknya Kudoku gabisa ngirim OTP karena servernya error. Tolong
            email ke{' '}
            <a
              className="underline text-primary"
              href="mailto:furqon@kudoku.id"
            >
              furqon@kudoku.id
            </a>{' '}
            atau{' '}
            <a className="underline text-primary" href="mailto:rizqy@kudoku.id">
              rizqy@kudoku.id
            </a>{' '}
            untuk kasih tau ini yaa!
          </p>
          <button
            className="bg-primary text-onPrimary py-2 font-bold shadow-xl rounded-lg mt-4"
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </div>
      ),
      { duration: Infinity }
    );
  };

  const renderProgress = () => {
    switch (progress) {
      case 'initial':
        return (
          <>
            <div className="flex flex-col gap-3 mt-8">
              <TextInput
                placeholder="Email"
                id="email"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                required={true}
              />

              <p className="text-justify text-xs text-onPrimary">
                Dengan mengisi email dan meng-klik tombol lanjut, kamu menyadari
                bahwa kamu telah membaca, mengerti, dan setuju dengan{' '}
                <Link
                  href="https://kudoku.id/terms"
                  target="_blank"
                  className="hover:text-primaryDark no-underline text-onPrimary"
                >
                  Syarat dan Ketentuan
                </Link>{' '}
                dan{' '}
                <Link
                  href="https://kudoku.id/privacy"
                  target="_blank"
                  className="hover:text-primaryDark no-underline text-onPrimary"
                >
                  Kebijakan Privasi
                </Link>{' '}
                Kudoku.
              </p>
            </div>

            <ProgressButton
              text="Lanjut"
              disabled={
                !input ||
                !(input.length > 3) ||
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
              }
              onClick={() => {
                toast
                  .promise(getCode(), {
                    loading: 'Kirim OTP...',
                    success: 'Sukses kirim OTP',
                    error: 'Error kirim OTP',
                  })
                  .then(
                    () => {
                      setProgress('otp');
                    },
                    () => {
                      handleSendOtpRejection();
                    }
                  );
              }}
              from="0%"
              to="10%"
            />
          </>
        );

      case 'otp':
        return (
          <>
            <motion.div
              className="flex flex-col gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h4 className="text-2xl font-medium text-onPrimaryContainerDark">
                Kudoku udah kirim kode OTP ke{' '}
                <span className="text-primaryDark">{input}</span>.
              </h4>
              <p className="text-onPrimaryContainerDark">
                Masukkan kode otpnya dibawah yaa!
              </p>
              <OtpInput
                placeholder="123123"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                isInputNum={true}
                containerStyle={
                  'w-full flex flex-row justify-between gap-1 mt-2 font-medium text-xl'
                }
                focusStyle={{ border: '2px solid #BA1B1B', outline: 'none' }}
                inputStyle={{
                  backgroundColor: '#d6e3ff',
                  borderRadius: '0.375rem',
                  padding: '0.5rem',
                  color: '#001a40',
                  width: '100%',
                  maxWidth: '60px',
                  border: '2px solid #d6e3ff',
                }}
              />
            </motion.div>

            <ProgressButton
              text="Cek"
              disabled={!otp || !(otp.length > 5)}
              onClick={() => {
                toast
                  .promise(checkOtp(), {
                    loading: 'Verifikasi OTP...',
                    success: 'OTP terverifikasi!',
                    error: 'OTP salah!',
                  })
                  .then(
                    () => {
                      // ON FULFILLED

                      toast
                        .promise(checkKudos(), {
                          loading: 'Loading...',
                          success: 'Kamu belum jadi Kudos!',
                          error: 'Kamu sudah jadi Kudos!',
                        })
                        .then(
                          () => {
                            // ON FULFILLED
                            // router.push('/daftar');
                          },
                          () => {
                            // ON REJECTED
                            // router.push('/queue')
                          }
                        );
                    },
                    () => {
                      // ON REJECTED
                      setOtp('');
                    }
                  );
              }}
              from="10%"
              to="80%"
            />
          </>
        );

      default:
        return (
          <>
            <p>Error!</p>
          </>
        );
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={() => {
          return;
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-onSurface p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="div" className="w-full flex justify-end">
                  <Toaster />
                  <div className="text-center font-[500] sm:text-lg text-base flex flex-wrap justify-start">
                    <p className="text-onPrimary m-0">
                      Dengan mendaftar, kamu akan jadi
                    </p>
                    <Tooltip text="Kudos adalah panggilan untuk user Kudoku">
                      <p className="bg-gradient-to-r from-primary to-secondary rounded-md text-onPrimary px-1 py-0.25 m-0">
                        Kudos yang ke {kudosNo}
                      </p>
                    </Tooltip>
                  </div>
                  <button
                    onClick={() => {
                      closeModal();
                      if (progress === 'initial') {
                        setInput('');
                      }
                    }}
                    className="rounded-full hover:bg-gray-200 w-[30px] h-[30px] flex items-center justify-center text-2xl text-primary"
                  >
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </Dialog.Title>
                {renderProgress()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
