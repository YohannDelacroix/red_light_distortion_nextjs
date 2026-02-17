/**
 * 
 * @description NewsContent component to display a dynamic news article.
 * This component retrieves a news article based on its ID through the dynamic route.
 * The content of the news article is sanitized using DOMPurify to avoid XSS vulnerabilities.
 * Static data is generated through the `generateStaticParams` function.
 * 
 * @author Yohann Delacroix
 */

import "@/styles/newsContent.css";
import { getNews, staticNews } from "@/api/staticNews";
import { notFound } from "next/navigation";
import Image from "next/image";
import { JSDOM } from "jsdom";
import DOMPurify from 'dompurify';

// Configure DOMPurify by creating a virtual window to avoid errors in the Node environment
const window = new JSDOM("").window;
const purify = DOMPurify(window);


/**
 * This function generates dynamic parameters for each news article.
 * It uses a static list of articles to return the ID for each article.
 * 
 * @returns {Array} - List of dynamic parameters for each article
 */
export async function generateStaticParams() {
    // Simulate fetching static articles
    const articles = staticNews;

    return articles.map((article) => ({
        id: article.id.toString(), 
    }));
}

/**
 * Main component to display the content of a news article.
 * 
 * @param {Object} params - Dynamic parameters containing the news article's ID to display.
 * @returns {JSX.Element}
 */
async function NewsContent({ params }) {
    const { id } = await params;
    let news = getNews(id);
    if (!news) {
        notFound();
    }

    const sanitizedHTML = purify.sanitize(news.content);

    return (<div className="newscontent-main-container">
        <div className="newscontent-container">
            <h1 className="newscontent-title">{news.title}</h1>
            <time className="newscontent-date">{news.date}</time>

            {/* Display the news article content with sanitized HTML */}
            <article className="newscontent-content" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}>
            </article>

            {/* Display the article image if available */}
            {
                news.img && (
                    <Image
                        src={news.img}
                        alt={"Article image"}
                        layout="responsive"
                        width={16}
                        height={9}
                        className="newscontent-main-img"
                    ></Image>
                )
            }
        </div>
    </div>)
}

export default NewsContent;