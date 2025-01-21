import "@/styles/photos.css";
import TitleComponent from "../components/TitleComponent";
import images from "@/../data/imageList.json"
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
            <div className="photo-galery">
                {
                    images.map((image, index) => {
                        return (
                            <div className="photo-galery-img-container" key={image}>
                                <a href={image}>
                                    <Image
                                        src={image}
                                        alt={`Photo ${index + 1}`}
                                        layout="responsive"
                                        width={16}
                                        height={9}
                                        className="photo-galery-img"
                                    ></Image>
                                </a>
                            </div>)
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Photos;
