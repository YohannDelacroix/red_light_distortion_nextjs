"use client"
import "@/styles/shop.css";
import { useState } from 'react'

/**
 * @component ShoppingComponent
 * @description Displays a clickable shop card with a dynamic background.
 * The background changes when hovered, and the shop title and date appear/disappear accordingly.
 * @param {Object} props.shopContent - The shop content data.
 * @param {string} props.shopContent.title - The title of the shop.
 * @param {string} props.shopContent.date - The publication date of the shop.
 * @param {string} props.shopContent.img - The background image URL.
 * @returns {JSX.Element}
 * 
 * @author Yohann Delacroix
 */

function ShoppingComponent({ shopContent }) {
    //This part make the background of the shop component changing when the mouse comes in or out
    const backgroundImageNormal = {
        backgroundImage: "url(" + shopContent.img + ")"
    };
    const backgroundImageDark = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(" + shopContent.img + ")"
    };

    const [backgroundImage, setBackgroundImage] = useState(backgroundImageDark);
    const [isContentVisible, setIsContentVisible] = useState(true);

    /**
     * Handles the mouse entering the shop card.
     * Changes the background and hides the content.
     */
    const mouseIn = () => {
        setBackgroundImage(backgroundImageNormal);
        setIsContentVisible(false);
    };

    /**
     * Handles the mouse leaving the shop card.
     * Restores the background and displays the content.
     */
    const mouseOut = () => {
        setBackgroundImage(backgroundImageDark);
        setIsContentVisible(true);
    };

    return (<div className="shop-component-background"
        style={backgroundImage}
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        role="button"
        aria-label={`Read shop: ${shopContent.title}`}>
        {isContentVisible &&
            <div className="shop-component-content">
                <h3 className="shop-component-content-title">
                    {shopContent.title}
                </h3>
                <div className="shop-component-content-shortdesc">
                    {shopContent.shortDescription}
                </div>
                <div className="shop-component-content-price">
                    {shopContent.price}€
                </div>
            </div>
        }
    </div>)
}

export default ShoppingComponent;
