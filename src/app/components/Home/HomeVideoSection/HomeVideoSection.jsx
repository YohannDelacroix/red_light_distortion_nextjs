/**
 * HomeVideoSection Component
 * Displays an embedded YouTube video in a responsive container.
 * This section is used to showcase a featured video on the homepage.
 */

import VideoThumbnail from '@/app/videos/components/VideoThumbnail'
import React from 'react'

const HomeVideoSection = ({ videoId }) => {
    return (
        // Section to hold the embedded video player
        <section className="home-video">
            <div className="container-video">
                <VideoThumbnail
                    videoId={videoId}
                    title={"Red Light Distortion Home video"}
                    alt={"Last video from Red Light Distortion"}
                     />
            </div>
        </section>
    )
}

export default HomeVideoSection