import '$styles/globals.css';
import '$styles/animations.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '$public/Logo/variant2.svg';
import Logo2 from '$public/Logo/primary.svg';
import ToastClient from './toastclient';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className="overflow-y-hidden"
        style={{ height: '-webkit-fill-available' }}
      >
        <ToastClient />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between flex-nowrap items-center my-0 mx-auto sm:pt-10 pt-2 pb-2 sm:pl-10 sm:pr-16 px-4 w-full">
      <div className="items-center max-w-[10rem] sm:flex hidden cursor-pointer select-none">
        <Link href="/" className="no-underline" passHref>
          <Image src={Logo} alt="Kudoku Logo" />
        </Link>
      </div>
      <div className="items-center max-w-[3rem] sm:hidden flex cursor-pointer select-none">
        <Link href="/" className="no-underline" passHref>
          <Image src={Logo2} alt="Kudoku Logo" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://app.kudoku.id/"
          target="_blank"
          className="no-underline"
        >
          <button className="bg-gray-800 border-[1px] border-gray-600 text-lg select-none flex items-center cursor-pointer text-onPrimary px-4 py-1.5 rounded-lg gap-2 hover:opacity-75">
            <span className="font-[500]">Masuk</span>
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
        <Link
          href="https://bgst.kudoku.id/"
          target="_blank"
          className="no-underline"
        >
          <button className="bg-white border-[1px] border-gray-600 text-lg select-none flex items-center cursor-pointer text-onPrimary px-6 py-1 rounded-lg gap-2 hover:opacity-75 shadow-[0px_0px_10px_#2C5EA8] ">
            <p className="font-bold tracking-[-0.15em] w-fit h-fit sm:ml-[-5px] pr-1 select-none gradient-text text-2xl">
              BGST
            </p>
          </button>
        </Link>
      </div>
    </nav>
  );
}

// function Footer() {
//   const arrTop = [
//     {
//       name: 'Changelog',
//       url: 'https://kudoku.notion.site/9c775a1cb1454635836c612b8b570e76?v=93a095a3a4d24e6281c35a0fe12fd11e',
//     },
//     { name: 'Security', url: '/security', right: true },
//     { name: 'BGST', url: 'https://bgst.kudoku.id' },
//   ];

//   const arrBottom = [
//     {
//       name: 'Imprint',
//       url: '/imprint',
//     },
//     {
//       name: 'Ketentuan Layanan',
//       url: 'https://kudoku.notion.site/Ketentuan-Layanan-ce1af59c2768440781538c9a4e606fc4',
//     },
//     {
//       name: 'Kebijakan Privasi',
//       url: 'https://kudoku.notion.site/Kebijakan-Privasi-8685c4789f7c4aff9b0fe933fe62c2ef',
//     },
//     {
//       name: 'Manifesto',
//       url: 'https://kudoku.notion.site/Manifesto-af777ccb94c24aa8becf134f684520c0',
//     },
//   ];

//   return (
//     <footer className="max-w-[1400px] mx-auto sm:px-8 px-4 mt-16 pb-20 sm:pb-28">
//       <section>
//         <ul className="list-none mb-0 grid sm:grid-cols-2 grid-cols-1 w-full h-fit">
//           {arrTop.map((value, index) => {
//             return (
//               <li
//                 key={index}
//                 className={`${value.right ? 'sm:text-right' : ''}`}
//               >
//                 <Link
//                   href={value.url}
//                   target="_self"
//                   className="text-white hover:text-primary no-underline"
//                   passHref
//                 >
//                   <button className="sm:text-4xl text-2xl font-bold w-max h-max transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200 mb-6">
//                     {value.name}
//                   </button>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//       <section className="md:flex justify-between items-end sm:mt-14 mt-6 flex-wrap gap-10">
//         <ul className="flex flex-wrap sm:gap-6 gap-4 list-none md:mb-0 mb-12">
//           {arrBottom.map((value, index) => {
//             return (
//               <li key={index}>
//                 <button className="w-max h-max text-sm sm:text-base transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200">
//                   <Link
//                     href={value.url}
//                     passHref
//                     target="_self"
//                     rel="noopener noreferrer"
//                     className="no-underline text-white hover:text-primary"
//                   >
//                     {value.name}
//                   </Link>
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//         <p className="text-white sm:mt-0 mt-4">
//           {new Date().getFullYear()} PT. Kudoku Finansial Indonesia
//         </p>
//       </section>
//     </footer>
//   );
// }
