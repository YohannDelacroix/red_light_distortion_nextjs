import "../../../styles/tour.css";

import TitleComponent from "@/app/components/TitleComponent/TitleComponent";
import Loading from "@/app/components/Loading/Loading";
import ServerError from "@/app/components/ServerError/ServerError";
import Date from "./Date";
import axios from "../../../api/axios.js";

export async function getServerSideProps() {
    try{
        const res = await axios.get('/tour');

        if(!res.ok){
            throw new Error(`Failed to fetch data ${res.status.text}`);
        }

        const tourDates = await res.json();

        return {
            props: { tourDates, error: null }
        };
    }catch(err){
        return {
            props: { tourDates: null, error: err.message}
        }
    }    
}

const Tour = ({tourDates, error}) => {
    console.log("Tour dates : ", tourDates, error);
    if(error) return <ServerError />

    return (
        <div className="tour-container">
            <TitleComponent titleContent="Tour Dates" />

            <ul className="tour-list">
                <div>
                    {
                        tourDates && (
                            tourDates.length === 0 ? <div className="tour-nodate">No upcoming tour dates</div> : (
                                tourDates.map((date, index) => (
                                    <li key={`${date.day}-${date.month}-${date.year}`}><Date date_content={tourDates[index]} /></li>
                                ))
                            )
                        )
                    }
                </div>
            </ul>
        </div>
    )
}

export default Tour;