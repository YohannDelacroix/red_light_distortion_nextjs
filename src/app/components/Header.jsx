"use client"
import "../../styles/header.css"
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const headerStyleDefault = {
        buttonActive: false,
        buttonImg: "/images/header/menu_icon.png",
        headerClass: 'header-desktop',
        navMobile: 'nav-mobile-hidden'
    };

    const headerStyleMobile = {
        buttonActive: true,
        buttonImg: "/images/header/cross_icon.png",
        headerClass: 'header-mobile',
        navMobile: 'nav-mobile'
    }

    const [headerStyle, setHeaderStyle] = useState(headerStyleDefault);

    //Header button in responsive design
    const handleButtonHeader = () => {
        if (headerStyle.buttonActive) {
            setHeaderStyle(headerStyleDefault);
        }
        else {
            setHeaderStyle(headerStyleMobile);
        }
    };

    return (
        <header data-testid="header" className={headerStyle.headerClass}>
            <div className="header-nav">
                <nav className="header-left">
                    <ul className="ul-header">
                        <li><Link className="link-header" href="/Tour">Tour</Link></li>
                        <li><Link className="link-header" href="/News">News</Link></li>
                        <li><Link className="link-header" href="/Photos">Photos</Link></li>
                    </ul>
                </nav>

                <div className="header-logo">
                    <Link className="header-link-image" href="/Home">
                        <Image
                            src="/images/header/RLDLogoFondNoir.jpg"
                            alt="Logo-RedLightdistortion"
                            width={778}
                            height={306}
                            layout="responsive"
                            className="header-logo-image"></Image>
                    </Link>
                </div>

                <div className="header-mobile-nav">
                    <button className="header-button" onClick={handleButtonHeader}>
                        <Image
                            src={headerStyle.buttonImg}
                            alt="X"
                            width={172}
                            height={172}
                            layout="responsive"
                            className="header-img-button"></Image>
                    </button>
                </div>

                <nav className="header-right">
                    <ul className="ul-header">
                        <li><Link className="link-header" href="/Videos">Videos</Link></li>
                        <li><Link className="link-header" href="/Universe">Universe</Link></li>
                        <li><Link className="link-header" href="/About">About</Link></li>
                    </ul>
                </nav>

                <nav className={headerStyle.navMobile}>
                    <Link className="link-header" onClick={handleButtonHeader} href="/Tour">Tour</Link>
                    <Link className="link-header" onClick={handleButtonHeader} href="/News">News</Link>
                    <Link className="link-header" onClick={handleButtonHeader} href="/Photos">Photos</Link>
                    <Link className="link-header" onClick={handleButtonHeader} href="/Videos">Videos</Link>
                    <Link className="link-header" onClick={handleButtonHeader} href="/Universe">Universe</Link>
                    <Link className="link-header" onClick={handleButtonHeader} href="/About">About</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header