"use client";
import React from "react";
import style from "./page.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

let casts = [
  {
    ActorPic: "/image/keanu reeves.jpg",
    ActorName: "Keanu Reeves",
  },
  {
    ActorPic: "/image/ryan.jpg",
    ActorName: "Ryan Reynolds",
  },
  {
    ActorPic: "/image/timothee.jpg",
    ActorName: "Timothee Chalamet",
  },
  {
    ActorPic: "/image/chloe.jpg",
    ActorName: "Chloe Grace Moretz",
  },
  {
    ActorPic: "/image/chloe.jpg",
    ActorName: "Chloe Grace Moretz",
  },
  {
    ActorPic: "/image/chloe.jpg",
    ActorName: "Chloe Grace Moretz",
  },
  
];

export default function Cast() {
  return (
    <>
      <div className={style.top}>
        <h1>Featured Casts</h1>{" "}
        <button className={style.btn}>
          {" "}
          <p> See more </p>
          <IoIosArrowForward className={style.arrow} />
        </button>
      </div>

      <div className={style.swipContainer}>
        <Swiper
          className={style.mSwiper}
          navigation={true}
          modules={[Navigation]}
          spaceBetween={-50}
          slidesPerView={4}
        >
          {casts.map((cast, index) => (
            <SwiperSlide key={index}>
              <div className={style.mContent}>
                <div className={style.mImage}>
                  <Image
                    src={cast.ActorPic}
                    width={250}
                    height={350}
                    alt="casts"
                  />
                </div>
                <div className={style.mtext}>
                  <h4>{cast.ActorName}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
