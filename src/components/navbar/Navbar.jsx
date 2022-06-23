import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/static/assets/logo/variant2.svg";
import { MaterialUISwitch } from "./MaterialUISwitch";
import styles from './Navbar.module.css'


var language = "en"


export default function Navbar({ }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
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
    <nav className={styles.navbar}>
      <div className={styles.image}>
        <Link href="/">
          <Image src={Logo} alt="Kudoku Logo" />
        </Link>
      </div>
      <div className={styles.switch}>
          <MaterialUISwitch disabled defaultChecked className={styles.switch__item}/>
      </div>
    </nav>
  );
}