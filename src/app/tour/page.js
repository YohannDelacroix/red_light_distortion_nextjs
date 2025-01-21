import "../../styles/tour.css";
import TitleComponent from "@/app/components/TitleComponent";
import ServerError from "@/app/components/ServerError";
import Date from "./components/Date";
import axios from "../../api/axios.js";

export const metadata = {
    title:"Red Light Distortion - Tour",
    metadescription:"Tour : Tournée et dates de concerts de Red Light Distortion"
}

export default async function Tour(){
    let tourDates = null;
    let errorMessage = null;

    try{
        const res = await axios.get('/tour', {
            headers: {'Cache-Control': 'no-store'}
        });

        tourDates = res.data;
    }catch(error){
        errorMessage = error.response
            ? `Error ${error.response.status}: ${error.response.statusText}`
            : error.message;
    }

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

