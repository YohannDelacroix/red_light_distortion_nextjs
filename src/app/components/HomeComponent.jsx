"use client"
import "../../styles/home.css"
import "@/styles/newsletter.css";
import "@/styles/photos.css";
import "@/styles/tour.css";
import Loading from "./Loading"
import TitleComponent from "./TitleComponent"
import ServerError from "./ServerError"
import Date from "../tour/components/Date"
import NewsComponent from "../news/components/NewsComponent"
import NewsletterForm from "./NewsletterForm";
import { newsTable } from "@/api/staticNews"
import { dataDate } from "@/api/staticTourDates"
import images from "@/../data/imageList.json"
import { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image"
import axios from "axios";

function HomeComponent() {
    const [dataTour, setDataTour] = useState(null);
    const [errorTour, setErrorTour] = useState(null);
    const [loadingTour, setLoadingTour] = useState(true);

    //Get the datas from the server
    useEffect(() => {
        //Get list of tour dates from the server
        const getTourDates = async () => {
            try {
                const response = await axios.get('http://localhost:5050/tour')
                setDataTour(response.data)
                setErrorTour(null)
            }
            catch (err) {
                setErrorTour(err.message)
                setDataTour(null)
            }
            finally {
                setLoadingTour(false)
            }
        }
        getTourDates();
    }, []);

    

    return (
        <div className="home">
            <div className="home-home-video">
                <div className="container-video">
                    <iframe className="iframe-video"
                        src="https://www.youtube.com/embed/p0Y52_ej810"
                        title="YouTube video player"
                        frameBorder="0"
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
                        loadingTour && <Loading />
                    }

                    {
                        errorTour && (<ServerError />)
                    }

                    {
                        dataTour && (
                            dataTour.length === 0 ? <div className="tour-nodate">No upcoming tour dates</div> : (
                                dataTour.slice(0, 5).map((date, index) => (
                                    <li key={`${date.day}-${date.month}-${date.year}`}><Date date_content={dataTour[index]} /></li>
                                ))
                            )
                        )
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

export default HomeComponent;
