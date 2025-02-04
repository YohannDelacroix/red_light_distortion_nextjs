"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";

const VideoThumbnail = ({ videoId, alt, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return isPlaying ? (
        <iframe
            className="video-frame"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allowFullScreen
        />
    ) : (
        <div    className='video-thumbnail-container'
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