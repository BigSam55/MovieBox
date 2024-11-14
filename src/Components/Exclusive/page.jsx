"use client";
import React from "react";
import style from "./page.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { HiOutlinePlayCircle } from "react-icons/hi2";

let exculsives = [
  {
    album: "/image/lambpic.avif",
    albumName: "Keanu Reeves",
  },
  {
    album: "/image/sucide.avif",
    albumName: "Keanu Reeves",
  },
  {
    album: "/image/pix.jpg",
    albumName: "Keanu Reeves",
  },
  {
    album: "/image/lambpic.avif",
    albumName: "Keanu Reeves",
  },
  {
    album: "/image/lambpic.avif",
    albumName: "Keanu Reeves",
  },
];

export default function Exculsive() {
  return (
    <>
      <div className={style.top}>
        <h1>Exculsive Videos</h1>{" "}
        <button className={style.btn}>
          {" "}
          <p> See more </p>
          <IoIosArrowForward className={style.arrow} />
        </button>
      </div>

      <div className={style.swipContainer}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={-60}
          slidesPerView={2.5}
        >
          {exculsives.map((exculsive, index) => (
            <SwiperSlide key={index}>
              <div className={style.mContent}>
              <div className={style.mImage}>
                <Image
                  src={exculsive.album}
                  width={450}
                  height={250}
                  alt="movies"
                />
                <HiOutlinePlayCircle className={style.mBtn}/>
              </div>
              <div className={style.mtext}>
                <h4>{exculsive.albumName}</h4>
              </div>

              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
