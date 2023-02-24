'use client';

import '$styles/globals.css';
import { useState, useEffect, Suspense, useLayoutEffect } from 'react';
import { Placeholder } from '$lib/Placeholder';
import { Tooltip } from '$lib/Tooltip';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import Furqon from '$public/Founders/Furqon.png';
import Aldi from '$public/Founders/Aldi.png';
import Rizqy from '$public/Founders/Rizqy.png';
import Midtrans from '$public/Manifesto/nextlvl.png';
import Seribu from '$public/Manifesto/1000.png';
import FounderIns from '$public/Manifesto/founder.png';
import * as THREE from 'three';
import { AuthContextProvider } from '../pages/api/twitter/AuthContext';
import { useFrame, useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls } from '@react-three/drei';
import { Point, Points } from '@react-three/drei';
import Model from '$lib/Model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import LoginButton from '$lib/LoginButton';

export default function Client({ kudosref }: { kudosref: string | null }) {
  const [firstName, setFirstName] = useState('...');
  const [lastName, setLastName] = useState('...');
  const [id, setId] = useState('...');
  const [parentId, setParentId] = useState(null);
  const [modal, setModal] = useState(false);
  const [buttonText, setButtonText] = useState('Daftar');
  const c = document.getElementById('placeholderContainer');
  const [data, setData] = useState(null);

  useLayoutEffect(() => {
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
    <main className="flex flex-col h-screen w-full mx-auto">
      <AuthContextProvider>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35] }}>
          <ambientLight />
          <directionalLight color="red" intensity={10} />
          <Model pose={0} />
          <Suspense fallback={null}>
            <ScrollBasedAnimation />
          </Suspense>
        </Canvas>
        <div
          className="hidden"
          id="placeholderContainer"
          style={{
            background: 'linear-gradient(90deg, #2c5ea8d5, #9e3c60d6)',
            position: 'absolute',
            float: 'left',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '100',
            width: '100%',
            height: '100%',
          }}
        >
          <button
            className="absolute font-bold text-xl right-10 top-10 rounded-full px-3 py-1 bg-white w-fit"
            onClick={() => {
              c?.classList.add('hidden');
              document.documentElement.style.overflow = 'auto';
            }}
          >
            Tutup X
          </button>
          <Hero parentId={parentId ? parentId : null}>
            {kudosref && (
              <p className="gradient-text-new text-2xl text-center mt-8">
                Kamu diundang jadi Kudos sama {firstName} {lastName} Kudos No.{' '}
                {id}
              </p>
            )}
          </Hero>
        </div>
      </AuthContextProvider>
    </main>
  );
}

function Html() {
  const [data, setData] = useState(0);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    (async function () {
      const url = new URL(
        '/api/postgres/getkudosnumber',
        process.env.NODE_ENV === 'production'
          ? 'https://kudoku.id'
          : 'http://localhost:3000'
      );
      const response = await axios.get(url.href);

      setData(Number(response.data) - 1);
    })();
  }, []);
  return (
    <div className="w-full max-w-[1000px] h-fit flex flex-col gap-60 mx-auto py-40">
      <div className="w-fit h-fit flex flex-col gap-2">
        <div className="w-full flex items-center justify-center">
          <h4 className="rounded-lg shadow-[0px_0px_10px_#2C5EA8] border-[1px] border-primary bg-onPrimaryContainer text-white px-4 py-1 font-medium text-sm my-4 select-none">
            Lagi uji coba versi Beta
          </h4>
        </div>
        <h1 className="gradient-text-new text-4xl sm:text-6xl font-bold sm:leading-snug leading-snug text-center my-0">
          Stop cari aplikasi lain.
        </h1>
        <h2 className="text-center font-[500] text-xl sm:text-3xl text-white my-0 mt-4">
          Kenalin Kudoku,{' '}
          <span className="font-bold">aplikasi pengelola keuangan</span> yang
          gak bikin lo pusing.
        </h2>
        <LoginButton />
        <div className="flex gap-2 justify-center items-center w-100 select-none">
          <h4 className="text-white font-normal leading-snug text-center my-4">
            Scroll ke bawah buat cari tau lebih lanjut
          </h4>
          <FontAwesomeIcon className="text-white" icon={faArrowDown} />
        </div>
      </div>
      <div>
        <h3 className="text-white text-center mt-5 font-[500]">
          Udah{' '}
          <span className="bg-gradient-to-r from-primary to-secondary px-2 py-0 rounded-md shadow-lg">
            {data}
          </span>{' '}
          Kudos yang join. Waitlist Kudoku nambah terus setiap harinya.
          <br />
          Pastiin lo ga ketinggalan. Sekarang Kudoku lagi diuji coba versi Beta.
        </h3>
      </div>

      <Manifesto />
    </div>
  );
}

function Particles({ size = 5000 }) {
  const { width, height } = useThree((state) => state.viewport);

  const particleColors = [
    '#673ab7',
    '#f4b677',
    'orange',
    'blue',
    '#8bc34a',
    'purple',
  ];

  return (
    <Points limit={size}>
      <pointsMaterial size={0.05} vertexColors />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          position={[
            (0.5 - Math.random()) * width * 2,
            0.5 * height + Math.random() ** 0.25 * height * -3,
            (0.5 - Math.random()) * 25,
          ]}
          color={
            particleColors[
              Math.floor(Math.random() * (particleColors.length - 1))
            ]
          }
        />
      ))}
    </Points>
  );
}

function ScrollBasedAnimation() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });

  return (
    <ScrollControls pages={3} damping={0.5}>
      <Scroll>
        <Objects />
        <Particles />
      </Scroll>
      {/* @ts-ignore */}
      <Scroll html style={{ width: '100%' }}>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

function Objects() {
  const { height, width } = useThree((state) => state.viewport);
  return (
    <>
      <pointLight color="blue" position={[8, -25, 5]} intensity={20} />
      <pointLight
        color="red"
        position={[0, -height * 2.25, 5]}
        intensity={10}
      />
    </>
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
  const [modal, setModal] = useState(false);
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
    <section className="h-screen md:mb-6 mb-32 mt-32 items-center justify-between">
      <div className="sm:gap-0 gap-6 lg:py-14 sm:py-10 py-6">
        <div className="sm:mt-6 px-0">
          {children}
          <div className="sm:my-16 my-8 w-full">
            <Placeholder
              type={'normal'}
              buttonText={buttonText}
              parentId={parentId}
            />

            <div
              style={{
                position: 'absolute',
                float: 'left',
                left: '50%',
                top: '63%',
                width: '100%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <p className="text-white mt-10 sm:mt-0 text-center font-[500]">
                Udah jadi kudos?{' '}
                <button
                  className="font-bold w-fit h-fit transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200 text-white"
                  onClick={() => {
                    const d = document.getElementById('placeholder');
                    d?.classList.add('shakeit__link');
                    setTimeout(
                      () => d?.classList.remove('shakeit__link'),
                      3000
                    );
                    setButtonText('Cek');
                  }}
                >
                  Cek antrian
                </button>
              </p>
              <div className="text-center font-[500] sm:text-lg text-base flex gap-1.5 justify-center">
                <p className="text-onPrimary">Kamu akan jadi</p>
                <Tooltip text="Kudos adalah panggilan untuk user Kudoku">
                  <p className="bg-gradient-to-r from-primary to-secondary rounded-md text-onPrimary px-1 py-0.25 mb-0">
                    Kudos No. {data}
                  </p>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <section className="max-w-[800px] px-2 w-fit mx-auto mb-20 mt-28 lg:z-0 sm:z-50">
      <h2 className="gradient-text-new font-bold text-2xl ml-1 sm:text-4xl mb-8">
        Kami punya impian untuk membuat aplikasi pengelola keuangan yang
        terbaik.
      </h2>
      <div className="bg-onPrimaryContainer bg-opacity-75 p-4 rounded-xl mb-4">
        <p className="mb-6 last:mb-0 sm:text-xl text-sm ml-1 text-justify text-white font-normal">
          Mengelola keuangan pribadi itu ribet-ribet gampang. Ribet karena
          banyak hal yang harus kita pikirin, gampang karena udah banyak tools
          yang bisa ngebantu kita, mulai dari <i>spreadsheets</i> sampai{' '}
          <i>Personal Financial Management app</i> (PFM). Tapi, <i>tools</i>{' '}
          yang udah tersedia untuk membantu kita belum bisa bekerja secara
          maksimal. Masih banyak orang yang ujung-ujungnya berhenti ngatur duit
          karena malah pusing sendiri.
        </p>
        <p className="mb-6 last:mb-0 sm:text-xl text-sm ml-1 text-justify text-white font-normal">
          Itulah kenapa kami bertiga mencoba membuat Kudoku. Kudoku adalah satu
          aplikasi yang ngebantu lo mengkontrol seluruh transaksi, tagihan,
          asset, hutang, dan masih banyak lagi.{' '}
          <i>
            It&apos;s gonna be the best personal financial management app that
            you&apos;ll ever use
          </i>
          . Ibarat teropong finansial, Kudoku bakal bisa ngebantu lo ngertiin
          kondisi keuangan lo sekarang dan pergi ke level finansial yang
          selanjutnya.
        </p>
        <p className="mb-6 last:mb-0 sm:text-xl text-sm ml-1 text-justify text-white font-normal">
          Lo gak bakal pusing lagi ngontrol duit lo, dan perjalanan lo untuk
          mencari-cari aplikasi finansial mana yang paling cocok buat lo, akan
          berhenti disini.
        </p>
        <p className="mb-6 last:mb-0 sm:text-xl text-sm ml-1 text-justify text-white font-normal">
          Kalau lo tertarik dengan alasan lebih lengkap kami ngebuat Kudoku, lo
          bisa baca lengkap manifesto Kudoku.
        </p>
      </div>

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
              className="no-underline bg-onPrimaryContainer bg-opacity-75 px-4 py-2 rounded-xl"
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
                  <p className="font-bold text-white text-left text-base">
                    {item.name}
                  </p>
                  <p className="font-normal text-white text-left text-sm">
                    {item.title}
                  </p>
                </div>
              </button>
            </Link>
          );
        })}
      </div>

      <div className="mt-8">
        <h2 className="gradient-text-new font-bold text-2xl ml-1 sm:text-4xl mb-8">
          Recognized by
        </h2>

        <div className="flex w-full flex-wrap justify-between mt-8 gap-4">
          <Link
            href="https://midtrans.com/nextlvl"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div
              className="bg-onPrimaryContainer bg-opacity-75 px-6 py-6 rounded-xl"
              style={{
                position: 'relative',
                width: '140px',
                height: '80px',
              }}
            >
              <Image
                objectFit="contain"
                src={Midtrans}
                alt="Next Lvl Midtrans"
              />
            </div>
          </Link>

          <Link
            href="https://1000startupdigital.id/hatch/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div
              className="bg-onPrimaryContainer bg-opacity-75 px-6 py-6 rounded-xl"
              style={{
                position: 'relative',
                width: '140px',
                height: '80px',
              }}
            >
              <Image
                objectFit="contain"
                src={Seribu}
                alt="Seribu startup digital"
              />
            </div>
          </Link>

          <Link
            href="https://fi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div
              className="bg-onPrimaryContainer bg-opacity-75 py-4 px-12 rounded-xl"
              style={{
                position: 'relative',
                width: '140px',
                height: '80px',
              }}
            >
              <Image
                objectFit="contain"
                src={FounderIns}
                alt="Founder Institute"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
