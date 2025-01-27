/***************************************************************
  * @file photos.js
  * @description
  * "Photo Gallery" page for the Red Light Distortion website.
  * It renders a gallery of images from the band's official photos, displaying them dynamically based on paths provided by a JSON file. 
  * The component includes metadata for SEO optimization and social media sharing.
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
import TitleComponent from "../components/TitleComponent/TitleComponent";
import imagesSrc from "@/../data/imageList.json"
import Image from "next/image";

export const metadata = {
    title: "Red Light Distortion - Photo Gallery",
    description: "Explore the official photo gallery of Red Light Distortion. See stunning images of the band on stage, behind the scenes, and more.",
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

function Photos() {
    return (
        <div className="photo-container">
            <TitleComponent titleContent="Photos" />
            <section className="photo-gallery">
                {
                    imagesSrc.map((image, index) => {
                        return (
                            <figure className="photo-gallery-img-container" key={image}>
                                <a href={image}>
                                    <Image
                                        src={image}
                                        alt={`Photo from the first shooting of Red Light Distortion : #${index + 1}`}
                                        layout="responsive"
                                        width={16}
                                        height={9}
                                        className="photo-gallery-img"
                                    ></Image>
                                </a>
                            </figure>)
                    }
                    )
                }
            </section>
        </div>
    )
}

export default Photos;
