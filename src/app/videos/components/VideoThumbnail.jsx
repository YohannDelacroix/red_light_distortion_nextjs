"use client"
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react'
import { FaPlay } from "react-icons/fa";
import "@/styles/videos.css"

/**
 * VideoThumbnail Component
 * 
 * This component displays a YouTube video thumbnail that, when clicked, 
 * replaces itself with the embedded YouTube player.
 * 
 * Props:
 * @param {string} videoId - The YouTube video ID.
 * @param {string} alt - The alt text for the thumbnail image.
 * @param {string} title - The title of the video.

 */


const VideoThumbnail = ({ videoId, alt, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return isPlaying ? (
        // Render the embedded YouTube video when playing
        <div className="iframe-container">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                className="video-frame"
                loading="lazy"
            />
        </div>
    ) : (
        // Render the video thumbnail with a play button
        <div className='video-thumbnail-container'
            onClick={() => setIsPlaying(true)}>
            <div className="video-thumbnail-player">
                <FaPlay className="video-thumbnail-player-icon" />
            </div>
            <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={alt}
                width={16}
                height={9}
                sizes="100vw"
                className="video-thumbnail">
            </Image>
        </div>

    );
}

export default VideoThumbnail;