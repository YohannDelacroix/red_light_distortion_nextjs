/**
 * 
 * @description ShopContent component to display a dynamic shop article.
 * This component retrieves a shop article based on its ID through the dynamic route.
 * The content of the shop article is sanitized using DOMPurify to avoid XSS vulnerabilities.
 * Static data is generated through the `generateStaticParams` function.
 * 
 * @author Yohann Delacroix
 */

import "@/styles/shopContent.css";
import { getShop, staticShop } from "@/api/staticShop";
import { notFound } from "next/navigation";
import Image from "next/image";
import { JSDOM } from "jsdom";
import DOMPurify from 'dompurify';

// Configure DOMPurify by creating a virtual window to avoid errors in the Node environment
const window = new JSDOM("").window;
const purify = DOMPurify(window);


/**
 * This function generates dynamic parameters for each shop article.
 * It uses a static list of articles to return the ID for each article.
 * 
 * @returns {Array} - List of dynamic parameters for each article
 */
export async function generateStaticParams() {
    // Simulate fetching static articles
    const articles = staticShop;

    return articles.map((article) => ({
        id: article.id.toString(), 
    }));
}

/**
 * Main component to display the content of a shop article.
 * 
 * @param {Object} params - Dynamic parameters containing the shop article's ID to display.
 * @returns {JSX.Element}
 */
async function ShopContent({ params }) {
    const { id } = await params;
    let shop = getShop(id);
    if (!shop) {
        notFound();
    }

    const sanitizedHTML = purify.sanitize(shop.content);

    return (<div className="shopcontent-main-container">
        <div className="shopcontent-container">
            <h1 className="shopcontent-title">{shop.title}</h1>
            <time className="shopcontent-date">{shop.date}</time>

            {/* Display the shop article content with sanitized HTML */}
            <article className="shopcontent-content" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}>
            </article>

            {/* Display the article image if available */}
            {
                shop.img && (
                    <Image
                        src={shop.img}
                        alt={"Article image"}
                        layout="responsive"
                        width={16}
                        height={9}
                        className="shopcontent-main-img"
                    ></Image>
                )
            }
        </div>
    </div>)
}

export default ShopContent;