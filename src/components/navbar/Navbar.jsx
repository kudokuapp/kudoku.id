import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/static/assets/logo/variant2.svg";
import { MaterialUISwitch } from "./MaterialUISwitch";


var language = "en"


export default function Navbar({ }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [toggle, setToggle] = useState(true);

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
<nav className="px-2 sm:px-1">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link href="/" className="flex items-center">
    <Image src={Logo} width={200} height={50} className="mr-3 h-6 sm:h-9" alt="Kudoku Logo" />
  </Link>
  <div className="flex md:order-2">
      <MaterialUISwitch />
  </div>
  </div>
</nav>
  );
}