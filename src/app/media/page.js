/***************************************************************
  * @file media.js
  * @description
  * Fusion of Photos & Videos section of the old version of RLD web
  * "Photo Gallery" page for the Red Light Distortion website.
  * It renders a gallery of images from the band's official photos, displaying them dynamically based on paths provided by a JSON file. 
  * The component includes metadata for SEO optimization and social media sharing.
  * Video Page Component
  * 
  * This page displays the videos available from Red Light Distortion, it's divided into two sections:
  * The first for original songs and the seconds for covers videos
  *
  * @dependencies
  * - `TitleComponent`: A reusable component for displaying the page title.
  * - `imageList.json`: A JSON file that contains paths to all images in the gallery.
  * - `photos.css`: Custom CSS for styling the photo gallery.
  *
  * @usage
  * This component is part of the Red Light Distortion website and is used to display a responsive gallery of band photos. 
  * It dynamically loads image paths from `imageList.json`
  *
  * @author Yohann Delacroix
 ***************************************************************/

import "@/styles/photos.css";
import "@/styles/videos.css";
import PhotosComponent from "./components/PhotosComponent";
import VideosComponent from "./components/VideosComponent";

export const metadata = {
    title: "Red Light Distortion - Media Gallery",
    description: "Explore the official media gallery of Red Light Distortion. See stunning images and videos of the band on stage, behind the scenes, and more.",
    keywords: "Red Light Distortion, photo gallery, band photos, live performances, backstage, music, electronic metal band, French band",
    openGraph: {
        title: "Red Light Distortion - Photo Gallery",
        description: "Browse through the official photo gallery of Red Light Distortion. Discover the band in action and behind the scenes.",
        url: "https://www.redlightdistortion.com/photos",
        images: [
            {
                url: "/images/galery/306269907_794345211858007_7240273007052242851_n.jpg",
                width: 1200,
                height: 630,
                alt: "Photo of Red Light Distortion on stage",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Red Light Distortion - Photo Gallery",
        description: "Discover Red Light Distortion in pictures. See the band performing live and behind the scenes.",
        images: ["/images/galery/306269907_794345211858007_7240273007052242851_n.jpg"],
    },
};

function Media() {
    return (
        <div className="videos-container">
            <PhotosComponent />
            <VideosComponent />
        </div>
    )
}

export default Media;
