import React from "react";
import style from "./page.module.css";
import Navbar from "../Navbar/page";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";

export default function Heropage() {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Navbar />
      </div>
      <div className={style.heroContent}>
        <h1>John Wick 3 :</h1>
        <h1>Parabellum</h1>
        <div className={style.img}>
          <div className={style.ccf}>
            <Image
              src={"/image/imdb_logo-removebg-preview.png"}
              width={50}
              height={45}
              alt=""
            />
            <span className={style.rating}>86.0 /100</span>
          </div>
          <div className={style.tomato}>
            <Image
              src={"/image/mini-tomato.png"}
              width={22}
              height={22}
              alt=""
            />
            <span className={style.rating}>97%</span>
          </div>
        </div>

        <p>
          John Wick is on the run after killing a member of the international
          assassins guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

        <div className={style.btn}>
          <button className={style.Wbtn}>
            {" "}
            <FaPlayCircle className={style.vplay} /> <h5> WATCH TRAILER</h5>
          </button>
        </div>
      </div>
    </div>
  );
}
