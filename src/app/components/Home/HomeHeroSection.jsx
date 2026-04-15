/**
 * HomeHeroSection Component
 */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeHeroSection = ({ }) => {
    const phrasePresentation = "Red Light Distortion, the new Heavy Thrash metal band with electronic orchestra"

    return (
        <section className="home-universe">
            <div className="home-universe-image-container">
                <Image
                    src="/images/galery/305681444_1020287611978967_1052835398201498065_n.jpg"
                    alt="Red Light Distortion Logo"
                    width={389}
                    height={153}
                    layout="responsive"
                    className="home-universe-image"></Image>
                <div className="home-universe-image-text">
                    <p>{phrasePresentation}</p>
                    <div className="home-hero-buttons">
                        <Link className="home-link" href="/music">
                            <button className="home-button">Listen</button>
                        </Link>
                        <Link className="home-link" href="/media">
                            <button className="home-button">Watch</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeroSection