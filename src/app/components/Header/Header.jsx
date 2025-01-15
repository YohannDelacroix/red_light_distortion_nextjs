import "../../../styles/header.css"
import HeaderMobile from "./HeaderMobile";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header data-testid="header" className="header-desktop">
            <HeaderMobile />
            <div className="header-nav">
                <nav className="header-left">
                    <ul className="ul-header">
                        <li><Link className="link-header" href="/tour">Tour</Link></li>
                        <li><Link className="link-header" href="/news">News</Link></li>
                        <li><Link className="link-header" href="/photos">Photos</Link></li>
                    </ul>
                </nav>

                <h1 className="header-logo">
                    <Link className="header-link-image" href="/">
                        <Image
                            src="/images/header/RLDLogoFondNoir.jpg"
                            alt="Red Light Distortion - Official Website"
                            width={778}
                            height={306}
                            layout="responsive"
                            className="header-logo-image"></Image>
                    </Link>
                </h1>

                <nav className="header-right">
                    <ul className="ul-header">
                        <li><Link className="link-header" href="/videos">Videos</Link></li>
                        <li><Link className="link-header" href="/universe">Universe</Link></li>
                        <li><Link className="link-header" href="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header