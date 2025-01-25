"use client"
import React from 'react'
import { useState } from 'react'
import "@/styles/newsletter.css";
import TitleComponent from '../TitleComponent/TitleComponent';
import useNewsletterForm from '@/app/hooks/useNewsletterForm';
import Loading from '../Loading';

/**
 * HomeNewsletterSection Component
 * 
 * This component renders a newsletter subscription section. It allows users to:
 * - Toggle the visibility of the subscription form.
 * - Input their details (name, city, and email).
 * - Validate input fields.
 * - Submit the form to subscribe to the newsletter.
 * 
 * The component integrates the `useNewsletterForm` custom hook to handle all logic, 
 * including state management, form validation, and submission (static or dynamic mode).
 * 
 * Accessibility features:
 * - `aria-labelledby` associates the section with its title.
 * - `aria-describedby` links to a description for additional context.
 * 
 * @returns {JSX.Element} - The newsletter subscription section.
 */

const HomeNewsletterSection = () => {
    const {
        displayForm,            // Controls whether the form is visible
        errorServer,            // Error message from the server (if any)
        errors,                 // Client-side validation errors for each field
        loading,                // Indicates whether the form submission is in progress
        confirmation,           // Confirmation message after successful submission
        toggleNewsletterForm,   // Method: Toggles the form visibility
        handleInputChange,      // Method: Handles input field changes
        handleSubmit            // Method: Handles form submission
    } = useNewsletterForm();

    return (
        <section
            className="home-home-newsletterform"
            aria-labelledby="newsletter-section-title"
            aria-describedby="newsletter-desc">

            {/* Title of the newsletter section */}
            <TitleComponent titleContent={"Newsletter"} level={2} titleId="newsletter-section-title" />

            {/* Description of the newsletter */}
            <p className="home-newsletter-description" id="newsletter-desc">
                Subscribe to our Newsletter to be awared of all the latest news, songs and youtube videos.
            </p>
            <p className="home-newsletter-description">
                Don't miss Anything, subscribe !
            </p>

            {/* "Subscribe" button - visible only if the form hasn't been submitted */}
            {!confirmation && <div className="home-home-newsletterform-button">
                <button
                    className="home-home-buttonnewsletter"
                    onClick={toggleNewsletterForm}
                    type="button">Subscribe to Newsletter
                </button>
            </div>}

            {/* Newsletter subscription form */}
            {displayForm &&
                <form className="home-home-newsletterform-form">
                    {/* Name input field */}
                    <div className="home-home-newsletterform-form-element">
                        <label htmlFor='name'>Name :</label>
                        <input type="text" id="name" name="name"
                            onChange={handleInputChange} />
                    </div>

                    {/* Display validation error for name */}
                    {errors.name &&
                        <p className="home-home-newsletterform-error">
                            {errors.name}
                        </p>
                    }

                    {/* City input field */}
                    <div className="home-home-newsletterform-form-element">
                        <label htmlFor='city'>City :</label>
                        <input type="text" id="city" name="city"
                            onChange={handleInputChange} />
                    </div>

                    {/* Display validation error for city */}
                    {errors.city &&
                        <p className="home-home-newsletterform-error">
                            {errors.city}
                        </p>}

                    {/* Email input field */}
                    <div className="home-home-newsletterform-form-element">
                        <label htmlFor='email'>E-mail :</label>
                        <input type="text" id="email" name="email"
                            onChange={handleInputChange} />
                    </div>

                    {/* Display validation error for email */}
                    {errors.email &&
                        <p className="home-home-newsletterform-error">
                            {errors.email}
                        </p>}

                    {/* Server error message */}
                    {errorServer &&
                        <p className="home-home-newsletterform-errorServer">
                            {errorServer}
                        </p>}

                    {/* Submit button or loading indicator */}
                    {loading ?
                        <Loading /> :
                        <div className="home-home-newsletterform-form-element">
                            <button type="submit"
                                onClick={handleSubmit}>
                                Subscribe
                            </button>
                        </div>}
                </form>
            }

            {/* Confirmation message after successful form submission */}
            {confirmation &&
                <p className="home-home-newsletterform-confirmation">
                    Thank you for subscribing to our newsletter, you are now Red Lighted to the Distortion !
                </p>}


        </section>
    )
}

export default HomeNewsletterSection