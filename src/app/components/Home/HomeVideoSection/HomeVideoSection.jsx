/**
 * HomeVideoSection Component
 * Displays an embedded YouTube video in a responsive container.
 * This section is used to showcase a featured video on the homepage.
 */

import React from 'react'

const HomeVideoSection = () => {
    return (
        // Section to hold the embedded video player
        <section className="home-video">
            <div className="container-video">
                <iframe className="iframe-video"
                    src="https://www.youtube.com/embed/p0Y52_ej810"
                    title="YouTube video player"
                    allowFullScreen
                    origin="http://localhost:3000"
                />
            </div>
        </section>
    )
}

export default HomeVideoSection