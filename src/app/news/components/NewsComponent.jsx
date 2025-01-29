"use client"
import "@/styles/news.css";
import { useState } from 'react'

/**
 * @component NewsComponent
 * @description Displays a clickable news card with a dynamic background.
 * The background changes when hovered, and the news title and date appear/disappear accordingly.
 * @param {Object} props.newsContent - The news content data.
 * @param {string} props.newsContent.title - The title of the news.
 * @param {string} props.newsContent.date - The publication date of the news.
 * @param {string} props.newsContent.img - The background image URL.
 * @returns {JSX.Element}
 * 
 * @author Yohann Delacroix
 */

function NewsComponent({ newsContent }) {
    //This part make the background of the news component changing when the mouse comes in or out
    const backgroundImageNormal = {
        backgroundImage: "url(" + newsContent.img + ")"
    };
    const backgroundImageDark = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(" + newsContent.img + ")"
    };

    const [backgroundImage, setBackgroundImage] = useState(backgroundImageDark); 
    const [isContentVisible, setIsContentVisible] = useState(true);

    /**
     * Handles the mouse entering the news card.
     * Changes the background and hides the content.
     */
    const mouseIn = () => {
        setBackgroundImage(backgroundImageNormal);
        setIsContentVisible(false);
    };

    /**
     * Handles the mouse leaving the news card.
     * Restores the background and displays the content.
     */
    const mouseOut = () => {
        setBackgroundImage(backgroundImageDark);
        setIsContentVisible(true);
    };

    return (<div className="news-component-background"
        style={backgroundImage}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        role="button"
        aria-label={`Read news: ${newsContent.title}`}>
        {isContentVisible &&
            <div className="news-component-content">
                <h3 className="news-component-content-title">
                    {newsContent.title}
                </h3>
                <time className="news-component-content-date">
                    {newsContent.date}
                </time>
            </div>
        }
    </div>)
}

export default NewsComponent;
