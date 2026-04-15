/**
 * HomeHeroSection Component
 */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeUniverseSection = ({ }) => {
    const phraseAccroche = "A drop of energy into a flying harmonized core"

    return (
        <section className="home-universe">
            <div className="home-universe-image-container">
                <Image
                    src="/images/galery/305920230_468835338494704_4370616707722259473_n.jpg"
                    alt="Red Light Distortion Logo"
                    width={389}
                    height={153}
                    layout="responsive"
                    className="home-universe-image"></Image>
                <div className="home-universe-image-text">
                    <p>{phraseAccroche}</p>
                    <Link className="home-link" href="/music">
                        <button className="home-large-button">Discover Red Light Distortion universe</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeUniverseSection