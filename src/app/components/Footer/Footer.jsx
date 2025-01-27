/**
 * @file Footer.jsx
 * @Component Footer
 * 
 * @Description
 * This component renders the footer of the website, providing contact information,
 * a link to download the press kit, and social media icons linked to Red Light Distortion's
 * official social media pages.
 * 
 * @Features
 * - Displays an email address that users can click to send an email.
 * - Provides a downloadable Press Kit (French version) PDF file.
 * - Includes social media icons for Facebook, Instagram, and YouTube, with appropriate links
 *   and accessible attributes for a better user experience.
 * 
 * @Author Yohann Delacroix
 * @Version 2.0.0
 * @Date 2025-01-27
 * 
 */

import "@/styles/footer.css"
import React from 'react'
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="footer">
            {/* Section Contact Information */}
            <address className="footer-contact">
                <p>
                    <a  href="mailto:redlightdistortion.metalband@gmail.com" 
                        aria-label="Send an email to Red light distortion"
                        title="Send a mail to Red Light Distortion"
                        className="footer-email">
                        redlightdistortion.metalband@gmail.com
                    </a>
                </p>
                <p>
                    <a href="/assets/DossierREDLIGHTDISTORTION-1.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Download the Press Kit in French version"
                        title="Download the Press Kit in French version">
                        <button>Download Press Kit (FR)</button>
                    </a>
                </p>
            </address>

            {/* Section Social Media Links */}
            <div className="footer-social">
                <a href="https://www.facebook.com/redlightdistortion/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Visit Red Light Distortion on Facebook" 
                    title="Go to Red Light Distortion's official Facebook page">
                    <SiFacebook className='footer-react-icons' size='25px' />
                </a>

                <a href="https://www.instagram.com/redlightdistortion/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Visit Red Light Distortion on Instagram"
                    title="Go to Red Light Distortion's official Instagram page">
                    <SiInstagram className='footer-react-icons' size='25px' />
                </a>

                <a href="https://www.youtube.com/channel/UC1C7_waXIYi6cdy_jCPKoLQ" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    aria-label="Visit Red Light Distortion on Youtube"
                    title="Go to Red Light Distortion's official Youtube page">
                    <SiYoutube className='footer-react-icons' size='25px' />
                </a>
            </div>
        </footer>)
}

export default Footer