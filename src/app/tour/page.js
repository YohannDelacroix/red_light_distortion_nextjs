import "../../styles/tour.css";
import TitleComponent from "@/app/components/TitleComponent";
import ServerError from "@/app/components/ServerError";
import Date from "./components/Date";
import axios from "../../api/axios.js";
import { dataDate } from "@/api/dataDate";

export const metadata = {
    title: "Red Light Distortion - Tour Dates",
    description: "Check out the latest tour dates for Red Light Distortion. Don't miss your chance to see the band live in concert. Get tickets now!",
    keywords: "Red Light Distortion, tour dates, concerts, live music, tickets, electronic metal band, French band",
    openGraph: {
        title: "Red Light Distortion - Tour Dates",
        description: "Explore upcoming tour dates and locations for Red Light Distortion. Find out when the band is playing near you!",
        url: "https://www.redlightdistortion.com/tour",
        images: [
            {
                url: "/images/news/sirFailiure.jpg",
                width: 1200,
                height: 630,
                alt: "Red Light Distortion live on stage",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Red Light Distortion - Tour Dates",
        description: "Find out when Red Light Distortion is performing live near you. Get your tickets today!",
        images: ["/images/news/sirFailiure.jpg"],
    },
};

export default async function Tour() {
    let tourDates = [...dataDate];

    return (
        <div className="tour-container">
            <TitleComponent titleContent="Tour Dates" />

            <ul className="tour-list">
                <div>
                    {
                        tourDates !== null ? (
                            tourDates.length === 0 ? <div className="tour-nodate">No upcoming tour dates</div> : (
                                tourDates.map((date, index) => (
                                    <li key={`${date.day}-${date.month}-${date.year}`}><Date date_content={tourDates[index]} /></li>
                                ))
                            )
                        ) : <ServerError />
                    }
                </div>
            </ul>
        </div>
    )
}

