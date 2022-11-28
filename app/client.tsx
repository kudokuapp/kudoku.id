'use client';

import '$styles/globals.css';
import { useState, useEffect } from 'react';
import { Placeholder } from '$lib/Placeholder';
import { Tooltip } from '$lib/Tooltip';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import mockup from '$public/mockup.png';
import Furqon from '$public/Founders/Furqon.png';
import Aldi from '$public/Founders/Aldi.png';
import Rizqy from '$public/Founders/Rizqy.png';
import { Kanban } from '$lib/Kanban';

export default function Client({ kudosref }: { kudosref: string | null }) {
  const [firstName, setFirstName] = useState('...');
  const [lastName, setLastName] = useState('...');
  const [id, setId] = useState('...');
  const [parentId, setParentId] = useState(null);

  useEffect(() => {
    if (kudosref) {
      const url = new URL(
        '/api/postgres/checkkudosbyid',
        process.env.NODE_ENV === 'production'
          ? 'https://kudoku.id'
          : 'http://localhost:3000'
      );
      axios
        .post(url.href, {
          id: kudosref[0],
        })
        .then((data) => {
          setFirstName(data.data.firstname);
          setLastName(data.data.lastname);
          setId(data.data.id);
          setParentId(data.data.id);
        });
    }
  }, [kudosref]);
  return (
    <main className="flex flex-col h-full w-full max-w-[1400px] mx-auto lg:px-0 px-[3vmin]">
      <Hero parentId={parentId ? parentId : null}>
        {kudosref && (
          <p className="gradient-text-new text-2xl text-center mt-8">
            Kamu diundang jadi Kudos sama {firstName} {lastName} Kudos No. {id}
          </p>
        )}
      </Hero>
      <Mockup />
      <Manifesto />
      <Roadmap />
    </main>
  );
}

function Hero({
  children,
  parentId,
}: {
  children: React.ReactNode;
  parentId: string | number | null;
}) {
  const [data, setData] = useState(null);
  const [buttonText, setButtonText] = useState('Daftar');
  const announcement = {
    text: 'Baca kenapa kami buat Kudoku',
    link: 'https://kudoku.notion.site/Manifesto-af777ccb94c24aa8becf134f684520c0',
  };

  useEffect(() => {
    (async function () {
      const url = new URL(
        '/api/postgres/getkudosnumber',
        process.env.NODE_ENV === 'production'
          ? 'https://kudoku.id'
          : 'http://localhost:3000'
      );
      const response = await axios.get(url.href);

      setData(response.data);
    })();
  }, []);

  return (
    <section className="h-max md:mb-6 mb-8 mt-8 flex flex-col items-center justify-center">
      <Link href={announcement.link} className="no-underline">
        <button className="flex items-center gap-2 rounded-lg animation-popup shadow-[0px_0px_20px_#2C5EA8] border-[1px] border-primary bg-onPrimaryContainer text-white px-4 py-1 font-bold text-sm my-4">
          {announcement.text}{' '}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              d="M 1 6 L 11 6"
              fill="transparent"
              strokeWidth="1.5"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
            <path
              d="M 7 10 L 11 6 L 7 2"
              fill="transparent"
              strokeWidth="1.5"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </Link>
      <div className="sm:gap-0 gap-6 lg:py-14 sm:py-10 py-6">
        <div className="sm:mt-6 px-0">
          <h1 className="gradient-text-new text-5xl sm:text-7xl font-bold sm:leading-snug leading-snug text-center my-0 px-4">
            Stop cari aplikasi lain.
          </h1>
          <h2 className="text-center font-[500] text-xl sm:text-3xl text-onPrimaryContainer my-0 mt-4 px-4">
            Kenalin Kudoku,{' '}
            <span className="font-bold">aplikasi pengelola keuangan</span> yang
            fiturnya paling mantep.
          </h2>
          {children}
          <div className="sm:my-16 my-8 w-full">
            <Placeholder
              type={'normal'}
              buttonText={buttonText}
              parentId={parentId}
            />
            <p className="text-onPrimaryContainer text-center mt-8 font-[500]">
              Udah jadi kudos?{' '}
              <button
                className="font-bold w-fit h-fit transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200 text-primary"
                onClick={() => {
                  const d = document.getElementById('placeholder');
                  d?.classList.add('shakeit__link');
                  setTimeout(() => d?.classList.remove('shakeit__link'), 3000);
                  setButtonText('Cek');
                }}
              >
                Cek antrian
              </button>
            </p>
            <div className="text-center font-[500] sm:text-lg text-base flex gap-1.5 justify-center">
              <p>Kamu akan jadi</p>
              <Tooltip text="Kudos adalah panggilan untuk user Kudoku">
                <p className="bg-gradient-to-r from-primary to-secondary rounded-md text-onPrimary px-1 py-0.25 mb-0">
                  Kudos No. {data}
                </p>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mockup() {
  return (
    <div className="overflow-hidden min-w-[800px] mb-16 mx-auto lg:z-0 sm:z-50">
      <Image src={mockup} alt="" width={2012} quality={100} draggable={false} />
    </div>
  );
}

function Manifesto() {
  const founders = [
    {
      imgSrc: Furqon,
      alt: 'Furqon Profile Picture',
      name: 'Furqon Wilogo',
      title: 'Co-Founder',
      link: 'https://www.linkedin.com/in/fdwilogo/',
    },
    {
      imgSrc: Rizqy,
      alt: 'Rizqy Profile Picture',
      name: 'Rizqy Fachri',
      title: 'Co-Founder',
      link: 'https://www.linkedin.com/in/rizqy-fachri/',
    },
    {
      imgSrc: Aldi,
      alt: 'Aldi Profile Picture',
      name: 'Aldi Megantara',
      title: 'Co-Founder',
      link: 'https://www.linkedin.com/in/aldi-megantara-arifin/',
    },
  ];

  return (
    <section className="max-w-[800px] px-2 w-fit mx-auto mb-20 mt-28 lg:z-0 sm:z-50 bg-background">
      <h2 className="gradient-text-new font-bold text-4xl mb-8">
        Kami punya impian untuk membuat aplikasi pengelola keuangan yang
        terbaik.
      </h2>
      <p className="mb-6 last:mb-0 sm:text-xl text-lg text-justify text-black font-normal">
        Mengelola keuangan pribadi itu ribet-ribet gampang. Ribet karena banyak
        hal yang harus kita pikirin, gampang karena udah banyak tools yang bisa
        ngebantu kita, mulai dari <i>spreadsheets</i> sampai{' '}
        <i>Personal Financial Management app</i> (PFM). Tapi, <i>tools</i> yang
        udah tersedia untuk membantu kita belum bisa bekerja secara maksimal.
        Masih banyak orang yang ujung-ujungnya berhenti ngatur duit karena malah
        pusing sendiri.
      </p>
      <p className="mb-6 last:mb-0 sm:text-xl text-lg text-justify text-black font-normal">
        Itulah kenapa kami bertiga mencoba membuat Kudoku. Kudoku adalah satu
        aplikasi yang ngebantu lo mengkontrol seluruh transaksi, tagihan, asset,
        hutang, dan masih banyak lagi.{' '}
        <i>
          It&apos;s gonna be the best personal financial management app that
          you&apos;ll ever use
        </i>
        . Ibarat teropong finansial, Kudoku bakal bisa ngebantu lo ngertiin
        kondisi keuangan lo sekarang dan pergi ke level finansial yang
        selanjutnya.
      </p>
      <p className="mb-6 last:mb-0 sm:text-xl text-lg text-justify text-black font-normal">
        Lo gak bakal pusing lagi ngontrol duit lo, dan perjalanan lo untuk
        mencari-cari aplikasi finansial mana yang paling cocok buat lo, akan
        berhenti disini.
      </p>
      <p className="mb-6 last:mb-0 sm:text-xl text-lg text-justify text-black font-normal">
        Kalau lo tertarik dengan alasan lebih lengkap kami ngebuat Kudoku, lo
        bisa baca lengkap manifesto Kudoku.
      </p>

      <Link
        href="https://kudoku.notion.site/Manifesto-af777ccb94c24aa8becf134f684520c0"
        className="no-underline"
      >
        <button className="bg-gradient-to-br from-primary to-secondary text-onPrimary font-[500] text-lg px-4 py-1.5 rounded-md flex items-center gap-2 shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <span>Baca lebih lengkap</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              d="M 1 6 L 11 6"
              fill="transparent"
              strokeWidth="1.5"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
            <path
              d="M 7 10 L 11 6 L 7 2"
              fill="transparent"
              strokeWidth="1.5"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </Link>
      <div className="flex w-full flex-wrap justify-between mt-8 gap-4">
        {founders.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <button
                key={index}
                className="cursor-pointer flex items-center gap-4 w-fit h-fit"
              >
                <div
                  className="p-2 select-none"
                  style={{
                    position: 'relative',
                    width: '60px',
                    height: '80px',
                  }}
                >
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={item.imgSrc}
                    alt={item.alt}
                  />
                </div>
                <div>
                  <p className="font-bold text-primary text-left text-base">
                    {item.name}
                  </p>
                  <p className="font-normal text-onPrimaryContainer text-left text-sm">
                    {item.title}
                  </p>
                </div>
              </button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Roadmap() {
  const [dataInProgress, setDataInProgress] = useState([]);
  const [dataPlanning, setDataPlanning] = useState([]);
  const [dataUnderReview, setDataUnderReview] = useState([]);
  useEffect(() => {
    (async () => {
      const url = new URL(
        '/api/notion/getroadmap',
        process.env.NODE_ENV === 'production'
          ? 'https://kudoku.id'
          : 'http://localhost:3000'
      );
      const response = await axios.get(url.href);
      setDataPlanning(response.data.dataPlanning);
      setDataInProgress(response.data.dataInProgress);
      setDataUnderReview(response.data.dataUnderReview);
    })();
  }, []);
  return (
    <>
      <div className="mt-20 mb-4 flex flex-col gap-4">
        <h2 className="text-onPrimaryContainer sm:text-4xl text-2xl font-bold m-0">
          Roadmap
        </h2>
        <p className="text-onPrimaryContainer text-xl font-[300]">
          Liat yang buat aplikasi lagi ngerjain apa
        </p>
      </div>
      <Kanban
        dataInProgress={dataInProgress}
        dataPlanning={dataPlanning}
        dataUnderReview={dataUnderReview}
      />
    </>
  );
}
