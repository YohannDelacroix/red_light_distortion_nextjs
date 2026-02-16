/**
 * @file Header.js
 * @description This file defines the `Header` component, which serves as the main navigation bar for the application.
 *              It includes links to various sections of the site, a logo, and integrates responsive design with a separate mobile header.
 * 
 * @author Yohann Delacroix
 * @version 2.0.0
 * @date 2025-01-27
 * 
 * @features
 * - Renders a desktop header with left and right navigation menus.
 * - Includes a responsive logo with optimized loading using Next.js Image component.
 * - Ensures accessibility through semantic HTML elements and proper ARIA labels.
 * - Integrates a separate `HeaderMobile` component for smaller screens.
 * - Links const to change the header links or their order
 * 
 */

import "../../../styles/header.css"
import HeaderMobile from "./HeaderMobile";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    //Here are the header links, simply change the order or the routes if needed 
    const links = [
        { label: "Tour", href: "/tour" },
        { label: "News", href: "/news" },
        { label: "Photos", href: "/photos" },
        { label: "Videos", href: "/videos" },
        { label: "Universe", href: "/universe" },
        { label: "About", href: "/about" },
    ];

    const leftLinks = links.slice(0, 3); //Group the 3 first links for the left header
    const rightLinks = links.slice(3);  //Group the last links for the right header

    return (
        <header data-testid="header" className="header-desktop">
            {/* Including the mobile version of the header (responsiveness) */}
            <HeaderMobile links={links} />

            {/* The main navigation section of the header */}
            <div className="header-nav">

                {/* Left navigation links */}
                <nav className="header-left" aria-label="Main navigation" role="navigation">
                    <ul className="ul-header">
                        {leftLinks.map((link, index) => (
                            <li key={`${link.href}-${index}`}>
                                <Link
                                    className="link-header"
                                    href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* The logo section (usually clickable to return to the homepage) */}
                <h1 className="header-logo">
                    <Link className="header-link-image" href="/">
                        <Image
                            src="/images/header/rldlogofondnoir.jpg"
                            alt="Red Light Distortion - Official Website"
                            width={778}
                            height={306}
                            layout="responsive"
                            className="header-logo-image"></Image>
                    </Link>
                </h1>

                {/* Right navigation links */}
                <nav className="header-right" aria-label="Main navigation" role="navigation">
                    <ul className="ul-header">
                        {rightLinks.map((link, index) => (
                            <li key={`${link.href}-${index}`}>
                                <Link
                                    className="link-header"
                                    href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header