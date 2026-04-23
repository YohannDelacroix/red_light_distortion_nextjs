/**
 * HomeHeroSection Component
 */

import React from 'react'
import HomeVideoSection from './HomeVideoSection'
import HomeNewsletterSection from './HomeNewsletterSection'
import HomePhotosSection from './HomePhotosSection'
import Image from 'next/image'
import HomeMusicSection from './HomeMusicSection'
import HomeUniverseSection from './HomeUniverseSection'
import BreakComponent from '../Break/BreakComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import HomeHeroSection from './HomeHeroSection'
import Link from 'next/link'

const HomePage = ({ videoId }) => {
    return (
        <main className="home">

            {/* Hero Section */}
            <HomeHeroSection />

            {/* Music Section */}
            <HomeMusicSection />

            {/* Universe Section */}
            <HomeUniverseSection />

            {/* Break */}
            <BreakComponent />

            {/* About */}
            <section className="home-about">
                <TitleComponent titleContent="Who are we ?" />
                <p className="home-about-text">
                    From the forgotten fields of France to the sound of Red Light Distortion. Walrus, on guitar and X on vocals form an hypnotic duo. A frenetic, high-voltage heavy metal band with an electronic orchestra, their third invisible member.
                </p>
                <Link className="home-link" href="/about">
                    <button className="home-large-button">More About Red Light Distortion</button>
                </Link>
            </section>


            {/* Photos Section */}
            <HomePhotosSection />

            {/* Video Section */}
            <HomeVideoSection videoId={videoId} />

            {/* Newsletter Section */}
            <HomeNewsletterSection />

            {/* Branding Logo Section */}
            <section className="home-logo">
                <Image
                    src="/images/header/rldlogofondnoir.jpg"
                    alt="Red Light Distortion Logo"
                    width={389}
                    height={153}
                    layout="responsive"
                    className="logo-img"></Image>
            </section>


        </main>
    )
}

export default HomePage