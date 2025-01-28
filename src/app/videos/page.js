/**
 * Video Page Component
 * 
 * This page displays the videos available from Red Light Distortion, it's divided into two sections:
 * The first for original songs and the seconds for covers videos
 *
 * @component
 * @returns {JSX.Element} The rendered Tour page with tour dates or error message.
 * 
 * @dependencies
 * - TitleComponent: for displaying the page title.
 * 
 * @author Yohann Delacroix
 */

import "@/styles/videos.css";
import TitleComponent from "../components/TitleComponent/TitleComponent";

// Metadata for SEO and social media sharing
export const metadata = {
    title: "Red Light Distortion - Videos",
    description: "Watch official music videos, live performances, and exclusive footage of Red Light Distortion, the electronic metal band from France.",
    keywords: "Red Light Distortion, music videos, live performances, official videos, band videos, electronic metal, French band, video clips, concerts",
    openGraph: {
        title: "Red Light Distortion - Videos",
        description: "Explore the video collection of Red Light Distortion, featuring music videos, live shows, and exclusive content.",
        url: "https://www.redlightdistortion.com/videos",
        images: [
            {
                url: "/images/news/sirFailiure.jpg",
                width: 1200,
                height: 630,
                alt: "Red Light Distortion Videos",
            },
        ],
        type: "video.other",
    },
    twitter: {
        card: "summary_large_image",
        title: "Red Light Distortion - Videos",
        description: "Watch the latest videos from Red Light Distortion, including music clips and live performances.",
        images: ["/images/news/sirFailiure.jpg"],
    },
};

function Videos() {
    return (
        <div className="videos-container">
            <TitleComponent titleContent="Our Music" />

            { /* Original Song's Videos */ }
            <section className="videos-list">
                <iframe
                    className="video-frame"
                    src="https://www.youtube.com/embed/p0Y52_ej810"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen />
                <iframe
                    className="video-frame"
                    src="https://www.youtube.com/embed/1dG4USdI4gk"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen />
                <iframe
                    className="video-frame"
                    src="https://www.youtube.com/embed/gTMZEDhnLUI"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen />
            </section>

            <TitleComponent titleContent="Covers" />

            { /* Covers Song's Videos */ }
            <section className="videos-list">
                <iframe
                    className="video-frame"
                    src="https://www.youtube.com/embed/HZIAnUmYJEs"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen />
            </section>
        </div>
    )
}

export default Videos;
