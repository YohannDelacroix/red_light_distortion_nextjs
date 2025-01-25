import "@/styles/footer.css"
import React from 'react'
import axios from "@/api/axios.js";
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'
import { IconContext } from "react-icons";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-contact">
                <p>redlightdistortion.metalband@gmail.com</p>
                <p>  <a href="/assets/DossierREDLIGHTDISTORTION-1.pdf" target="_blank" rel="noreferrer"><button>Download Press Kit (FR)</button></a></p>
            </div>

            <div className="footer-social">
                <a href="https://www.facebook.com/redlightdistortion/" target="_blank" rel="noreferrer">
                    <SiFacebook className='footer-react-icons' size='25px' />
                </a>

                <a href="https://www.instagram.com/redlightdistortion/" target="_blank" rel="noreferrer">
                    <SiInstagram className='footer-react-icons' size='25px' />
                </a>

                <a href="https://www.youtube.com/channel/UC1C7_waXIYi6cdy_jCPKoLQ" target="_blank" rel="noreferrer">
                    <SiYoutube className='footer-react-icons' size='25px' />
                </a>
            </div>
        </div>)
}

export default Footer