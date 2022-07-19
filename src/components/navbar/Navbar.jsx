import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/static/assets/logo/variant2.svg';
import { MaterialUISwitch } from './MaterialUISwitch';

var language = 'en';

export default function Navbar({}) {
  // const [navbarOpen, setNavbarOpen] = useState(false);
  // const [toggle, setToggle] = useState(true);

  // const changeLanguage = (e, toggle) => {
  // 	if (toggle === true) {
  // 		language = "en";
  // 		localStorage.setItem("lang", language);
  // 	}
  // 	if (toggle === false) {
  // 		language = "id";
  // 		localStorage.setItem("lang", language);
  // 	}
  // };
  return (
    <nav className="navbar">
      <div className="navbar__image cursor-pointer">
        <Link href="/">
          <Image src={Logo} alt="Kudoku Logo" />
        </Link>
      </div>
      <div className="navbar__switch">
        <MaterialUISwitch disabled defaultChecked />
      </div>
    </nav>
  );
}
