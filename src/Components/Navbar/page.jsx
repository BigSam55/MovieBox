import React from "react";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { BsPlayBtn } from "react-icons/bs";
import style from "./page.module.css";
import { ImSearch } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className={style.nav}>
      <div className={style.navContent}>
        <div className={style.logContent}>
          <div className={style.logo}>
            <PiTelevisionSimpleLight className={style.tv} />
            <BsPlayBtn className={style.play} />
          </div>
        </div>
        <div className={style.logotext}>
          <span>
            <h3>MovieBox</h3>
          </span>
        </div>

        <div className={style.searchContainer}>
          <input
            type="text"
            placeholder="What do you want to watch?"
            className={style.searchInput}
          />
          <ImSearch className={style.searchIcon} />
        </div>

        <div className={style.login}>
            <p>Sign in  </p> <GiHamburgerMenu  className={style.hambuger} />
            
        </div>
      </div>
    </div>
  );
}
