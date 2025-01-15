"use client"
import "../../../styles/header.css"
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderMobile = () => {
    const headerStyleDefault = {
        buttonToggled: false,
        buttonImg: "/images/header/menu_icon.png",
        navMobile: 'nav-mobile-hidden'
    };

    const headerStyleMobile = {
        buttonToggled: true,
        buttonImg: "/images/header/cross_icon.png",
        navMobile: 'nav-mobile'
    }

    const [headerStyle, setHeaderStyle] = useState(headerStyleDefault);

    //Header button in responsive design
    const toggleMobileNavigation = () => {
        if (headerStyle.buttonToggled) {
            setHeaderStyle(headerStyleDefault);
        }
        else {
            setHeaderStyle(headerStyleMobile);
        }
    };

    return (
        <div>
            <div className="header-mobile-button-container">
                <button className="header-button" onClick={toggleMobileNavigation}>
                    <Image
                        src={headerStyle.buttonImg}
                        alt="X"
                        width={172}
                        height={172}
                        layout="responsive"
                        className="header-img-button"></Image>
                </button>
            </div>

            <nav className={headerStyle.navMobile}>
                <Link className="link-header" onClick={toggleMobileNavigation} href="/tour">Tour</Link>
                <Link className="link-header" onClick={toggleMobileNavigation} href="/news">News</Link>
                <Link className="link-header" onClick={toggleMobileNavigation} href="/photos">Photos</Link>
                <Link className="link-header" onClick={toggleMobileNavigation} href="/videos">Videos</Link>
                <Link className="link-header" onClick={toggleMobileNavigation} href="/universe">Universe</Link>
                <Link className="link-header" onClick={toggleMobileNavigation} href="/about">About</Link>
            </nav>
        </div>
    )
}

export default HeaderMobile