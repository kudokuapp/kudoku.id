import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/static/assets/logo/official-logo.svg";

var language = "en"
export default function Navbar({ }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  const changeLanguage = (e, toggle) => {
    if (toggle === true) {
        language = "en"
        localStorage.setItem('lang', language)
    }
    if (toggle === false) {
        language = "id"
        localStorage.setItem('lang', language)
    }
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 pt-4 mt-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link href="/">
              <a
                href="#"
                className=""
              >
                <Image src={Logo} height={50} width={200} alt="" />
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <div
                className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-primary rounded-full p-1 cursor-pointer"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {/* Switch */}
                <div
                  className={
                    "bg-secondary md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                    (toggle ? null : toggleClass)
                  }
                ></div>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}