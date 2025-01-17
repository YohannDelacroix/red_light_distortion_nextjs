import "@/styles/photos.css";
import TitleComponent from "../components/TitleComponent";
import images from "@/../data/imageList.json"
import Image from "next/image";

export const metadata = {
    title:"Red Light Distortion - Photos",
    metadescription:"Photos : Photos du groupe Red Light Distortion"
}

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
