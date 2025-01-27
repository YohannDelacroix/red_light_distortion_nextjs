"use client"
import "../../../styles/header.css"
import React from 'react'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * HeaderMobile Component
 * 
 * This component renders the mobile version of the website header. It features a
 * button that toggles the navigation menu. When the menu is open, the button displays
 * a cross icon, and when the menu is closed, a hamburger icon appears. The menu links
 * are passed to the component as props, allowing the navigation items to be dynamically
 * rendered.
 *
 * @param {Array} links - An array of objects where each object contains `href` (URL) and `label` (text to display) for each navigation item.
 *
 * @returns {JSX.Element} The mobile header component with a toggling menu.
 * 
 * @author Yohann Delacroix
 * @version 2.0.0
 * @date 2025-01-27
 */
const HeaderMobile = ({ links }) => {
    // State to track whether the menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Paths for the icons used in the menu button
    const menuIcon = "/images/header/menu_icon.png";
    const crossIcon = "/images/header/cross_icon.png"

    // Toggle the mobile navigation menu (open/close)
    const toggleMobileNavigation = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <div>
            {/* Button to toggle the navigation menu on mobile */}
            <div className="header-mobile-button-container">
                <button className="header-button"
                    data-testid="header-mobile-toggle_button"
                    onClick={toggleMobileNavigation}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}>
                    <Image
                        src={isMenuOpen ? crossIcon : menuIcon}
                        alt={isMenuOpen ? "Close menu" : "Open menu"}
                        width={172}
                        height={172}
                        layout="responsive"
                        className="header-img-button"></Image>
                </button>
            </div>

            {/* Navigation menu (conditionally rendered based on menu state) */}
            <nav className={isMenuOpen ? "nav-mobile" : "nav-mobile-hidden"}
                data-testid="header-nav-mobile"
                aria-label="Mobile navigation menu"
                role="navigation">

                {/* Dynamically render links from the passed 'links' prop */}
                {links.map((link, index) => (
                    <Link
                        key={`${link.href}-${index}`}
                        className="link-header"
                        onClick={toggleMobileNavigation}
                        href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default HeaderMobile