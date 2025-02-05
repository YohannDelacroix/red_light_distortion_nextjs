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
 * The component uses IntersectionObserver to load the video iframe only 
 * when it is visible on the screen, improving performance by avoiding unnecessary loading.
 * 
 * Props:
 * @param {string} videoId - The YouTube video ID.
 * @param {string} alt - The alt text for the thumbnail image.
 * @param {string} title - The title of the video.
 * @param {boolean} [autoPlay=false] - Whether the video should autoplay after a delay.
 */


const VideoThumbnail = ({ videoId, alt, title, autoPlay = false }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    // useEffect hook to handle lazy loading of the video when it becomes visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsPlaying(true); // Start playing when video is visible
                    observer.disconnect(); // Stop observing after the video is loaded
                }
            },
            { threshold: 0.5 } // Load the iframe when at least 50% of the video is in the viewport
        );

        if (videoRef.current) observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    return isPlaying ? (
        // Render the embedded YouTube video when playing
        <div ref={videoRef} className="iframe-container">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                className="video-frame"
                loading="lazy"
            />
        </div>
    ) : (
        // Render the video thumbnail with a play button
        <div ref={videoRef} className='video-thumbnail-container'
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