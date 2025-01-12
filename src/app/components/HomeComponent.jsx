"use client"
import "../../styles/home.css"

import Loading from "./Loading"
import TitleComponent from "./TitleComponent"
import ServerError from "./ServerError"
import { useState, useEffect } from 'react'

import Link from "next/link";
import Image from "next/image"

//import NewsComponent from "../News/NewsComponent";
//import Date from "../Tour/Date";
//import { newsTable } from "../News/dataNews";
//import { dataDate } from "../Tour/dataDate";
//import { images } from "../Photos/dataPhotos";

import axios from "axios";



function HomeComponent() {
    const [displayForm, setDisplayForm] = useState(false);

    const resultsDefault = { name: "", city: "", email: "" };
    const [results, setResults] = useState(resultsDefault);

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

    //Handle when button "Subscribe href Newsletter" is pressed
    /*const handleButtonNewsletter = (e) => {
      e.preventDefault();
      setDisplayForm(true);
    };*/

    //Handle display Newsletter Form
    const toggleNewsletterForm = () => {
        setDisplayForm((prevDisplayForm) => !prevDisplayForm);
    }

    //Handle when button "Subscribe" is pressed
    const handleButtonSubscribe = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5050/newsletter/add', results).then((response) => {
            console.log(response.status)
            console.log(response.data)
        })

        setDisplayForm(false);
        setResults(resultsDefault);
    };

    //Handle whenn name is changed
    const handleNameChanged = (e) => {
        setResults(prevResults => ({
            ...prevResults,
            name: e.target.value
        }));
    };

    //Handle whenn city is changed
    const handleCityChanged = (e) => {
        setResults(prevResults => ({
            ...prevResults,
            city: e.target.value
        }));
    };

    //Handle whenn email is changed
    const handleEmailChanged = (e) => {
        setResults(prevResults => ({
            ...prevResults,
            email: e.target.value
        }));
    };


    //Displaying the results in the console (Test checking)
    useEffect(() => {
        console.log("Following the results");
        console.log(results);
    }, [results])

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

            <div className="home-home-newsletterform">
                <div className="home-home-newsletterform-button">
                    {
                        /*  CODE for Newsletter inside our database
                          <button className="home-home-buttonnewsletter"
                              type="button"
                              onClick={handleButtonNewsletter}>Subscribe href Newsletter</button>
                        */
                    }

                    <button 
                        className="home-home-buttonnewsletter"
                        onClick={toggleNewsletterForm}
                        type="button">Subscribe to Newsletter
                    </button>
                </div>
                {
                    displayForm &&
                    <form className="home-home-newsletterform-form">
                        <div className="home-home-newsletterform-form-element">
                            <label>Name :</label>
                            <input type="text" id="name" name="name"
                                onChange={handleNameChanged} />
                        </div>
                        <div className="home-home-newsletterform-form-element">
                            <label>City :</label>
                            <input type="text" id="city" name="city"
                                onChange={handleCityChanged} />
                        </div>
                        <div className="home-home-newsletterform-form-element">
                            <label>E-mail :</label>
                            <input type="text" id="email" name="email"
                                onChange={handleEmailChanged} />
                        </div>
                        <div className="home-home-newsletterform-form-element">
                            <button type="button"
                                onClick={handleButtonSubscribe}>Subscribe</button>
                        </div>
                    </form>
                }
            </div>
            
            {/*      Tour Part desactivate waiting for updates

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
                <Link className="home-link" href="/Tour"><button className="home-button">More Tour Dates</button></Link>
            </div>}
            */}

            {/*      News Part desactivate waiting for updates
            <div className="home-news">
                <TitleComponent titleContent="News" />
                <div className="news-list">
                    {
                        newsTable.slice(0, 4).map((news, index) => (
                            <Link key={`${news.title}-${index}`} href={`/News/${news.id}`}><NewsComponent newsContent={news} /></Link>
                        ))
                    }
                </div>
                <Link className="home-link" href="/News"><button className="home-button">More News</button></Link>
            </div>
            */}

            {/*      News Part desactivate waiting for updates
            <div className="home-photos">
                <TitleComponent titleContent="Photos" />
                <div className="photo-galery">
                    {
                        images.slice(0, 3).map((image) => (
                            <div className="photo-galery-img-container" key={image}>
                                <a href={image}><img src={image} alt="X or walrus" className="photo-galery-img" /></a>
                            </div>
                        ))
                    }
                </div>
                <Link className="home-link" href="/Photos"><button className="home-button">More Photos</button></Link>
            </div>
            */}

            <div className="home-logo">
                <Image
                    src="/images/header/RLDLogoFondNoir.jpg"
                    alt="Red Light Distortion Logo"
                    width={778}
                    height={306}
                    layout="responsive"
                    className="logo-img"></Image>
            </div>
        </div>
    );
}

export default HomeComponent;
