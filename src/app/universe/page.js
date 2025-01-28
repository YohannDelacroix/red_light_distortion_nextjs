/**
 * Universe Component
 *
 * @description This component renders the "Universe" page for the Red Light Distortion website, 
 * providing an immersive experience into the band's world. It includes:
 * - A presentation of the band with narrative text
 * - A section displaying the band's song lyrics
 * 
 * @component
 * @returns {JSX.Element} The rendered Tour page with tour dates or error message.
 * 
 * 
 * @dependencies
 * - TitleComponent: for displaying the page title.
 * - Lyrics: Component that displays song's lyrics of the band
 *
 * This component is styled with "universe.css" and integrates seamlessly with the 
 * overall site design and structure.
 * 
 * @author Yohann Delacroix
 * 
 */

import "@/styles/universe.css";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import Lyrics from "./components/Lyrics";

// Metadata for SEO and social media sharing
export const metadata = {
    title: "Universe - Red Light Distortion",
    description: "Dive into the universe of Red Light Distortion. Explore the band's lyrics, albums, and links to their music. Discover the sound and story of this French electronic metal band.",
    keywords: "Red Light Distortion, lyrics, music universe, electronic metal, song lyrics, music links, French band, albums, band universe",
    openGraph: {
        title: "Universe - Red Light Distortion",
        description: "Explore the universe of Red Light Distortion, featuring the band's song lyrics, albums, and links to their music. Discover their unique sound and story.",
        url: "https://www.redlightdistortion.com/universe",
        images: [
            {
                url: "/images/galery/306269907_794345211858007_7240273007052242851_n.jpg",
                width: 1200,
                height: 630,
                alt: "Red Light Distortion Universe",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Universe - Red Light Distortion",
        description: "Discover the universe of Red Light Distortion, featuring lyrics, music, and albums from the French electronic metal band. Dive into their unique sound.",
        images: ["/images/galery/306269907_794345211858007_7240273007052242851_n.jpg"],
    },
};

function Universe() {
    return (
        <div className="universe-container">
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
        </div>
    )
}

export default Universe;