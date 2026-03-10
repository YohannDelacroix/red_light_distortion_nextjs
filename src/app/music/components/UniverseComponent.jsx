"use client"
import React from 'react'
import "@/styles/photos.css"
import TitleComponent from '@/app/components/TitleComponent/TitleComponent';
import Lyrics from './Lyrics';


/**
 * 
 * Universe Component
 * 
 */


const UniverseComponent = () => {
    return (<div>
        <TitleComponent titleContent="Universe" />

        <article className="universe-content">

            <p className="universe-presentation">
                On all the Connexus reigns with an iron fist, the Lord Walrus.
            </p>
            <p className="universe-presentation">
                Meanwhile, X is deeply diving into the Red Light Distortion.
            </p>

            <TitleComponent titleContent="Songs and lyrics" />

            {/* Lyrics component to display song lyrics */}
            <Lyrics />
        </article>
    </div>)
}

export default UniverseComponent;