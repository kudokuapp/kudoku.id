import '$styles/globals.css';
import '$styles/animations.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '$public/Logo/variant2.svg';
import Logo2 from '$public/Logo/primary.svg';
import Toast from '$lib/Toast';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen">
        <Navbar />
        {children}
        <div>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-DNM26NZJJP"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-DNM26NZJJP');
              
            `}
          </Script>
        </div>
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
      <div className="flex items-center gap-4 z-50">
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
            <p className="font-bold tracking-[-0.15em] w-fit h-fit sm:ml-[-5px] pr-1 select-none gradient-text-bgst text-2xl">
              BGST
            </p>
          </button>
        </Link>
      </div>
    </nav>
  );
}
