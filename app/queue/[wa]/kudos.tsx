'use client';
import '$styles/animations.css';
import { useState } from 'react';
import { Tooltip } from '$lib/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import CalCom from '$lib/CalCom';
import FurqonAvatar from '$public/Founders/Furqon.png';
import AldiAvatar from '$public/Founders/Aldi.png';
import RizqyAvatar from '$public/Founders/Rizqy.png';
import Link from 'next/link';

interface KudosData {
  id: number | string;
  firstname: string;
  lastname: string;
  email: string;
  whatsapp: string;
  subscribe: boolean;
  invited: boolean;
}

export default function Kudos({ data }: { data: KudosData }) {
  const [progress, setProgress] = useState(1);
  const [firstname, setFirstname] = useState(`${data.firstname}`);
  const [lastname, setLastname] = useState(`${data.lastname}`);
  const [email, setEmail] = useState(`${data.email}`);
  const [edit, setEdit] = useState(false);

  const caldata = [
    {
      name: 'Furqon Wilogo',
      title: 'Co-CEO',
      avatar: FurqonAvatar,
      calLink: 'furqon/kudoku',
    },
    {
      name: 'Rizqy Fachri',
      title: 'Co-CEO',
      avatar: RizqyAvatar,
      calLink: 'rizqy-fachri/kudoku',
    },
    {
      name: 'Aldi Megantara',
      title: 'CTO',
      avatar: AldiAvatar,
      calLink: 'aldi-megantara-arifin/30min',
    },
  ];

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    console.table({ id: data.id, firstname, lastname, email });
    toast
      .promise(submitKudos(), {
        loading: 'Loading...',
        success: 'Sukses ganti data',
        error: 'Servernya error',
      })
      .then(
        () => {
          setEmail(email);
          setFirstname(upperCaseEveryLetter(firstname));
          setLastname(upperCaseEveryLetter(lastname));
          setEdit(false);
        },
        () => {
          setFirstname(data.firstname);
          setLastname(data.lastname);
          setEmail(data.email);
          setEdit(false);
        }
      );
  }

  async function submitKudos() {
    return new Promise((resolve, reject) => {
      (async () => {
        const url = new URL(
          '/api/postgres/editkudosdata',
          process.env.NODE_ENV === 'production'
            ? 'https://kudoku.id'
            : 'http://localhost:3000'
        );
        try {
          const response = await axios.post(url.href, {
            id: data.id,
            firstname,
            lastname,
            email,
          });
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }

  const SHARELINK = `https://kudoku.id?kudosref=${
    data.id
  }${firstname.toUpperCase()}${data.whatsapp.slice(data.whatsapp.length - 4)}`;

  const textWA = `Eh, lo udah cek Kudoku belum? Ini menurut gua aplikasi buat ngebantu atur keuangan yang keren banget sih. Ngelacak transaksi, investasi, tabungan, sampe ngitung utang, semuanya bisa lo lakuin disini. Lo gua undang buat jadi Kudos ${SHARELINK}.`;
  const waLink = `https://wa.me/send?text=${encodeURIComponent(textWA)}`;

  const textTwitter = `Eh, lo udah cek @kudokuapp belum? Ini menurut gua aplikasinya keren banget sih. Pake Kudoku, gua bisa nge-track pemasukan, pengeluaran, investasi, tabungan sampe utang gua. Lo gua undang buat jadi Kudos ${SHARELINK}.`;
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    textTwitter
  )}`;

  return (
    <section className="min-h-[50vh] flex items-center justify-center w-full my-14">
      <div className="bg-onPrimary p-8 rounded-xl shadow-md flex flex-col gap-8 sm:min-w-[600px]  sm:mx-0 mx-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary m-0 text-4xl">
            Heyy Kudos <span className="text-secondary">No. {data.id}</span>!
            <span className="wave sm:ml-4 ml-1">👋</span>
          </h1>
          <h2 className="text-onPrimaryContainer m-0 text-2xl">
            Kamu{' '}
            <span className="bg-[#FFFF00] px-1.5 rounded-md">
              {data.invited ? 'sudah' : 'belum'}
            </span>{' '}
            bisa masuk Kudoku
          </h2>
        </div>

        {/* Home di progress 1 */}
        {progress === 1 && (
          <div className="flex flex-col gap-4">
            <button
              className="bg-primary px-4 py-2 text-onPrimary font-[500] rounded-md m-0 text-xl"
              onClick={() => setProgress(2)}
            >
              Edit data kamu (nama dan email)
            </button>
            <button
              className="bg-secondary px-4 py-2 text-onPrimary font-[500] rounded-md m-0 text-xl"
              onClick={() => setProgress(3)}
            >
              Booking meeting dengan founder
            </button>

            <button
              className="bg-tertiary px-4 py-2 text-onPrimary font-[500] rounded-md m-0 text-xl"
              onClick={() => setProgress(4)}
            >
              Share Kudoku ke temen lo
            </button>
          </div>
        )}

        {/* Edit form di progress 2 */}
        {progress === 2 && (
          <div>
            <BalikButton onClick={() => setProgress(1)} />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex sm:flex-nowrap flex-wrap justify-between gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="m-0">Nama depan:</p>
                  <input
                    type="text"
                    disabled={!edit}
                    placeholder={firstname}
                    className="text-onPrimaryContainer p-2 rounded-md shadow-md disabled:bg-gray-200 bg-onPrimary border-2 disabled:border-gray-400 border-primary focus:ring-0 w-full"
                    onChange={(e) => {
                      setFirstname(e.currentTarget.value);
                    }}
                    value={firstname}
                    required={true}
                    onKeyDown={(e) => {
                      if (!/[a-zA-Z]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <p className="m-0">Nama belakang:</p>
                  <input
                    type="text"
                    disabled={!edit}
                    placeholder={lastname}
                    className="text-onPrimaryContainer p-2 rounded-md shadow-md disabled:bg-gray-200 bg-onPrimary border-2 disabled:border-gray-400 border-primary focus:ring-0 w-full"
                    onChange={(e) => {
                      setLastname(e.currentTarget.value);
                    }}
                    value={lastname}
                    required={true}
                    onKeyDown={(e) => {
                      if (!/[a-zA-Z]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="m-0">Email:</p>
                <input
                  type="email"
                  disabled={!edit}
                  placeholder={email}
                  className="text-onPrimaryContainer p-2 rounded-md shadow-md disabled:bg-gray-200 bg-onPrimary border-2 disabled:border-gray-400 border-primary focus:ring-0 w-full"
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                  value={email}
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex gap-1 items-center">
                  <p className="m-0">Whatsapp:</p>
                  <Tooltip text="Kamu belum bisa ganti nomor whatsapp">
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="text-tertiary"
                    />
                  </Tooltip>
                </div>
                <div className="flex gap-1 bg-gray-200 p-2 rounded-md shadow-md border-2 border-gray-400 cursor-not-allowed">
                  <div className="rounded-md px-1 py-0.5 h-fit w-fit flex flex-row items-center justify-center bg-outline text-onPrimary text-base font-[500] tracking-wider cursor-not-allowed">
                    +62
                  </div>
                  <input
                    disabled={true}
                    className="bg-transparent w-full
                    text-onPrimaryContainer placeholder:text-onPrimaryContainer cursor-not-allowed"
                    placeholder={data.whatsapp.slice(3)}
                    type="tel"
                    maxLength={13}
                  />
                </div>
              </div>
              <div className="w-full flex justify-end gap-4 mt-4">
                {edit && (
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setEdit(false);
                        setFirstname(data.firstname);
                        setLastname(data.lastname);
                        setEmail(data.email);
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="bg-primary py-2 px-4 rounded-md shadow-xl text-onPrimary font-[500]"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            </form>
            {!edit && (
              <div className="w-full flex justify-end">
                <button
                  type="button"
                  className="bg-primary py-2 px-4 rounded-md shadow-xl text-onPrimary font-[500]"
                  onClick={() => setEdit(true)}
                >
                  Edit Data Kamu
                </button>
              </div>
            )}
          </div>
        )}

        {/* Booking dengan founder */}
        {progress === 3 && (
          <div>
            <BalikButton onClick={() => setProgress(1)} />
            <div className="mb-8">
              <p className="m-0 text-onPrimaryContainer text-lg">
                Pilih mau ngobrol sama Founders yang mana. Semua asik kok.
              </p>
              <p className="m-0 text-onPrimaryContainer text-lg">
                Kalo udah tau, langsung aja gas. Nanti kita meeting via Google
                Meet
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {caldata.map((value, index) => {
                return <CalCom founders={value} user={data} key={index} />;
              })}
            </div>
          </div>
        )}

        {/* Share link */}
        {progress === 4 && (
          <div>
            <BalikButton onClick={() => setProgress(1)} />
            <div className="flex flex-col gap-4 max-w-[600px] mb-8">
              <p className="text-onPrimaryContainer m-0 text-lg">
                Kudoku adalah perusahaan startup baru yang masih keciiiil
                banget. Sebagai perusahaan, ukuran tim kami kecil dan yang pasti
                gapunya duit yang banyak.
              </p>
              <p className="text-onPrimaryContainer m-0 text-lg">
                Hal yang paling kami <i>value the most</i> adalah lo, sebagai
                calon pengguna Kudoku (Kudos). Jadi kami bener-bener{' '}
                <i>appreciate</i> banget keinginan lo untuk mendaftar Kudoku.
                Dan juga, lo bisa bantuin kita untuk tawarin temen-temen lo yang
                lain untuk menjadi Kudos.
              </p>
              <p className="text-onPrimaryContainer m-0 text-lg text-left">
                Kudoku udah buat link khusus yang bisa lo share kemana-mana:{' '}
                <span className="font-[500] text-primary">{SHARELINK}</span>.
                Atau lo bisa langsung pilih mau share lewat mana dengan klik
                tombol di bawah.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <button
                className="bg-primary px-4 py-2 text-onPrimary font-[500] rounded-md m-0 text-xl"
                onPointerDown={() => {
                  toast.promise(navigator.clipboard.writeText(SHARELINK), {
                    loading: 'Loading...',
                    success: 'Link berhasil disalin',
                    error: 'Gagal copy link',
                  });
                }}
              >
                Salin link
              </button>

              <Link
                href={twitterLink}
                target="_blank"
                className="no-underline w-full"
              >
                <button className="bg-[#1DA1F2] px-4 py-2 text-onPrimary font-[500] rounded-md m-0 text-xl w-full">
                  Share ke Twitter
                </button>
              </Link>

              <Link
                href={waLink}
                target="_blank"
                className="no-underline w-full"
              >
                <button className="bg-[#25D366] px-4 py-2 text-onPrimary font-[500] rounded-md m-0 text-xl w-full">
                  Share ke WhatsApp
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const upperCaseEveryLetter = (str: string) => {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

const BalikButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      className="bg-secondary py-1 px-2 rounded-md shadow-xl text-onPrimary font-[500] flex gap-1 w-fit items-center mb-12"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Kembali
    </button>
  );
};
