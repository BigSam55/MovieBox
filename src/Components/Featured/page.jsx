"use client";
import React from "react";
import style from "./page.module.css";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

let movies = [
  {
    poster: "/image/Stranger_Things_season_4.jpg",
    moviesName: "Stranger Things",
    location: "USA, 2016- Current",
    rating1: "86.0 /100",
    rating2: "97%",
    class: "Action, Adventure, Horror",
  },
  {
    poster: "/image/Batman_Begins_Poster.jpg",
    moviesName: "Batman Begins",
    location: "USA, 2016- Current",
    rating1: "60.0 /100",
    rating2: "70%",
    class: "Action, Adventure",
  },
  {
    poster: "/image/The_Amazing_Spider-Man_(film)_poster.jpg",
    moviesName: "Spider Man",
    location: "USA, 2012",
    rating1: "70 /100",
    rating2: "97%",
    class: "Action, Adventure, Horror",
  },
  {
    poster: "/image/doctor-strange.jpeg",
    moviesName: "Doctor Strange",
    location: "USA, 2016- Current",
    rating1: "86.0 /100",
    rating2: "97%",
    class: "Action, Adventure, Horror",
  },
  {
    poster: "/image/Stranger_Things_season_4.jpg",
    moviesName: "Stranger Things",
    location: "USA, 2016- Current",
    rating1: "86.0 /100",
    rating2: "97%",
    class: "Action, Adventure, Horror",
  },
  {
    poster: "/image/Stranger_Things_season_4.jpg",
    moviesName: "Stranger Things",
    location: "USA, 2016- Current",
    rating1: "86.0 /100",
    rating2: "97%",
    class: "Action, Adventure, Horror",
  },
];

export default function Feature() {
  return (
    <>
      <div className={style.top}>
        <h1>Featured Movie</h1>
        <button className={style.btn}>
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
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className={style.mContent}>
                <div className={style.mImage}>
                  <Image
                    src={movie.poster}
                    width={250}
                    height={400}
                    alt="movies"
                  />
                </div>
                <div className={style.mtext}>
                  <h6>{movie.location}</h6>
                  <h4>{movie.moviesName}</h4>
                </div>
                <div className={style.icon}>
                  <div className={style.ccf}>
                    <Image
                      src={"/image/imdb_logo-removebg-preview.png"}
                      width={50}
                      height={45}
                      alt="icon"
                    />
                    <span className={style.rating}>{movie.rating1}</span>
                  </div>

                  <div className={style.tomato}>
                    <Image
                      src={"/image/mini-tomato.png"}
                      width={22}
                      height={22}
                      alt="icon"
                    />
                    <span className={style.rating}>{movie.rating2}</span>
                  </div>
                </div>
                <h6>{movie.class}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
