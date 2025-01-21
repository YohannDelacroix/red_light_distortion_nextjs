import "@/styles/home.css"
import "@/styles/newsletter.css";
import "@/styles/photos.css";
import "@/styles/tour.css";
import Loading from "./components/Loading";
import TitleComponent from "./components/TitleComponent";
import ServerError from "./components/ServerError";
import Date from "./tour/components/Date";
import NewsComponent from "./news/components/NewsComponent";
import NewsletterForm from "./components/NewsletterForm";
import { newsTable } from "@/api/dataNews"
import { dataDate } from "@/api/dataDate"
import images from "@/../data/imageList.json"
import Link from "next/link";
import Image from "next/image"
import axios from "../api/axios.js";

export default async function Home() {
    let tourDates = null;
    let errorMessage = null;

    try {
        const res = await axios.get('/tour', {
            headers: { 'Cache-Control': 'no-store' }
        });

        tourDates = res.data;
    } catch (error) {
        errorMessage = error.response
            ? `Error ${error.response.status}: ${error.response.statusText}`
            : error.message;
    }

    //if(errorMessage) tourDates = []

    return (
        <div className="home">
            <div className="home-home-video">
                <div className="container-video">
                    <iframe className="iframe-video"
                        src="https://www.youtube.com/embed/p0Y52_ej810"
                        title="YouTube video player"
                        allowFullScreen
                        origin="http://localhost:3000"
                    />
                </div>
            </div>

            <NewsletterForm />

            {dataDate.length !== 0 && <div className="home-tour">
                <TitleComponent titleContent="Tour Dates" />
                <ul className="tour-list">
                    {
                        tourDates !== null ? (
                            tourDates.length === 0 ? <div className="tour-nodate">No upcoming tour dates</div> : (
                                tourDates.slice(0, 5).map((date, index) => (
                                    <li key={`${date.day}-${date.month}-${date.year}`}><Date date_content={tourDates[index]} /></li>
                                ))
                            )
                        ) : <ServerError />
                    }
                </ul>
                <Link className="home-link" href="/tour"><button className="home-button">More Tour Dates</button></Link>
            </div>}

            <div className="home-news">
                <TitleComponent titleContent="News" />
                <div className="news-list">
                    {
                        newsTable.slice(0, 4).map((news, index) => (
                            <Link key={`${news.title}-${index}`} href={`/news/${news.id}`}><NewsComponent newsContent={news} /></Link>
                        ))
                    }
                </div>
                <Link className="home-link" href="/news"><button className="home-button">More News</button></Link>
            </div>

            <div className="home-photos">
                <TitleComponent titleContent="Photos" />
                <div className="photo-galery">
                    {
                        images.slice(0, 3).map((image, index) => (
                            <div className="photo-galery-img-container" key={image}>
                                <a href={image}>
                                    <Image
                                        src={image}
                                        alt={`Photo ${index + 1}`}
                                        width={320}
                                        height={180}
                                        layout="responsive"
                                        className="photo-galery-img"
                                    ></Image>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <Link className="home-link" href="/photos"><button className="home-button">More Photos</button></Link>
            </div>

            <div className="home-logo">
                <Image
                    src="/images/header/RLDLogoFondNoir.jpg"
                    alt="Red Light Distortion Logo"
                    width={389}
                    height={153}
                    layout="responsive"
                    className="logo-img"></Image>
            </div>
        </div>
    );
}
