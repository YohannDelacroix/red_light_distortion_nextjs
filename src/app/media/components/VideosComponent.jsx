"use client"
import React, { useEffect, useState, useRef } from 'react'
import "@/styles/photos.css"
import TitleComponent from '@/app/components/TitleComponent/TitleComponent';
import videosSrc from "@/../data/youtubeVideosList.json";
import VideoThumbnail from "./VideoThumbnail";

/**
 * 
 * Video component
 * Display the video list
 * 
 */


const VideosComponent = () => {
    return (<div>
        <TitleComponent titleContent="Our Music" />

        { /* Original Song's Videos */}
        <section className="videos-list">
            {
                videosSrc.originals.map((video, index) =>
                (<VideoThumbnail
                    key={`${video.title}-${index}`}
                    videoId={video.videoId}
                    alt={video.alt}
                    title={video.title} />))
            }
        </section>

        <TitleComponent titleContent="Covers" />

        { /* Covers Song's Videos */}
        <section className="videos-list">
            {
                videosSrc.covers.map((video, index) =>
                (<VideoThumbnail
                    key={`${video.title}-${index}`}
                    videoId={video.videoId}
                    alt={video.alt}
                    title={video.title} />))
            }
        </section>
    </div>)
}

export default VideosComponent;