/**
 * HomePhotosSection Component
 * 
 * This component displays a section of the homepage dedicated to showcasing photos from the gallery.
 * It fetches the photo URLs from a static JSON file and renders them as a grid of images
 * 
 * Structure:
 * - Title: A dynamic title rendered using the TitleComponent (level 2 heading).
 * - Gallery: A responsive photo grid showing the first three images from the imported list.
 * - Link: A "More Photos" button that redirects to the full photo gallery page.
 * 
 * Example usage:
 * - This component is used as part of the Home page to highlight a selection of photos.
 * 
 * Dependencies:
 * - `TitleComponent`: To render the section title.
 * - `Image` (from Next.js): For optimized image rendering.
 * - `Link` (from Next.js): For navigation to the full gallery page.
 */

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import images from "@/../data/imageList.json"
import TitleComponent from '../TitleComponent'

const HomePhotosSection = () => {
    return (
        <section className="home-photos" aria-labelledby="photos-section-title">
            {/* Title Section */}
            <TitleComponent titleContent="Photos" level={2} titleId="photos-section-title" />

            {/* Photo Gallery Section */}
            <div className="photo-gallery">
                {
                    //Slice 0 , 3 to select the first three photos
                    images.slice(0, 3).map((image, index) => (
                        <div className="photo-gallery-img-container" key={image}>
                            <a href={image}>
                                <Image
                                    src={image}
                                    alt={`Photo ${index + 1}`}
                                    width={320}
                                    height={180}
                                    layout="responsive"
                                    className="photo-gallery-img"
                                ></Image>
                            </a>
                        </div>
                    ))
                }
            </div>

            {/* Link to Full Gallery */}
            <Link className="home-link" href="/photos">
                <button className="home-button">More Photos</button>
            </Link>
        </section>
    )
}

export default HomePhotosSection