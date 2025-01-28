/**
 * Tour Page Component
 * 
 * This page displays the upcoming tour dates for the band "Red Light Distortion". 
 * It fetches the tour dates either statically or dynamically based on the environment 
 * variable NEXT_PUBLIC_STATIC_VERSION. 
 *
 * @component
 * @returns {JSX.Element} The rendered Tour page with tour dates or error message.
 * 
 * @dependencies
 * - axios: for making HTTP requests to fetch tour data.
 * - getStaticTourDates: for retrieving static tour dates data.
 * - TitleComponent: for displaying the page title.
 * - Date: a child component that renders the individual tour dates.
 * - ServerError: for handling errors in fetching the tour dates.
 * 
 * @author Yohann Delacroix
 */

import "../../styles/tour.css";
import TitleComponent from "@/app/components/TitleComponent/TitleComponent";
import ServerError from "@/app/components/ServerError/ServerError";
import Date from "./components/Date";
import axios from "../../api/axios.js";
import { getStaticTourDates } from "@/api/staticTourDates";

// Metadata for SEO and social media sharing
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

// Tour page component that displays tour dates dynamically or statically
export default async function Tour() {
    // Check if the static version of the tour dates should be used based on environment variables
    const isStaticVersion = process.env.NEXT_PUBLIC_STATIC_VERSION === "true";
    let tourDates = null;

    if (isStaticVersion) {
        // Static version
        tourDates = getStaticTourDates();
    } else {
        // Dynamic version
        let errorMessage = null;

        try {
            const res = await axios.get('/tour', {
                headers: { 'Cache-Control': 'no-store' }// Disable caching for fresh data
            });

            tourDates = res.data;
        } catch (error) {
            errorMessage = error.response
                ? `Error ${error.response.status}: ${error.response.statusText}`
                : error.message;
        }
    }

    return (
        <div className="tour-container">
            <TitleComponent titleContent="Tour Dates" />

            {/* List of tour dates */}
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

