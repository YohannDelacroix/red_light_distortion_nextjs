/**
 * HomeVideoSection Component
 * Displays an embedded YouTube video in a responsive container.
 * This section is used to showcase a featured video on the homepage.
 */

import React from 'react'

const HomeVideoSection = ({videoSrc}) => {
    return (
        // Section to hold the embedded video player
        <section className="home-video">
            <div className="container-video">
                <iframe className="iframe-video"
                    src={videoSrc}
                    title="YouTube video player"
                    allowFullScreen
                    origin="http://localhost:3000"
                    loading="lazy"
                />
            </div>
        </section>
    )
}

export default HomeVideoSection