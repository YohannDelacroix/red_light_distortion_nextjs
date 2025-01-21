"use client"
import React from 'react'
import { useState } from 'react'
import "@/styles/newsletter.css";

const NewsletterForm = () => {
    const [displayForm, setDisplayForm] = useState(false);
    const resultsDefault = { name: "", city: "", email: "" };
    const [results, setResults] = useState(resultsDefault);

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

    return (
        <div className="home-home-newsletterform">
            <div className="home-home-newsletterform-button">
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
    )
}

export default NewsletterForm