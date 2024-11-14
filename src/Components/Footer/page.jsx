import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import style from './page.module.css'


export default function Footer() {
  return (
    <div className={style.footer} >
      <div className={style.social}>
        <FaFacebookSquare className={style.icon} />
        <FaInstagram className={style.icon} />
        <FaTwitter className={style.icon} />
        <IoLogoYoutube className={style.icon} />
        <div className={style.ftext}>
        <span className={style.ccf}>Conditions of Use</span>
        <span className={style.ccf}>Privacy & Policy</span>
        <span className={style.ccf}>Press Room</span>
        </div>
        

        <div className={style.copyright}>
        <p>© MovieBox by Adriana Eka  Prayudha</p> </div>
      </div>
      
    
    </div>

  )
}
