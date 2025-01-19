import "@/styles/universe.css";
import TitleComponent from "../components/TitleComponent";
//import Lyrics from "./Lyrics";

function Universe() {
    return (
        <div className="universe-container">
            <TitleComponent titleContent="Universe" />

            <div className="universe-content">

                <p className="universe-presentation">
                    On all the Connexus reigns with an iron fist, the Lord Walrus.
                </p>
                <p className="universe-presentation">
                    Meanwhile, X is deeply diving into the Red Light Distortion.
                </p>

                <TitleComponent titleContent="Songs and lyrics" />


            </div>
        </div>
    )
}

export default Universe;