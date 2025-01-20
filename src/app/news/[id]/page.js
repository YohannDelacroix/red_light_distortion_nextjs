import "@/styles/newsContent.css";
import { getNews, newsTable } from "@/api/dataNews";
import { notFound } from "next/navigation";
import Image from "next/image";
import { JSDOM } from "jsdom";
import DOMPurify from 'dompurify';

// Configure DOMPurify in order to work with JSDOM
const window = new JSDOM("").window;
const purify = DOMPurify(window);

export async function generateStaticParams() {
    //const res = await fetch("url/");
    //const articles = await res.json();

    const articles = newsTable;

    //Return dynamics parameters for each article of the news list
    return articles.map((article) => ({
        id: article.id.toString(), //Road dynamic parameter
    }));
}

function NewsContent({params}) {
    let news = getNews(params.id);
    if(!news){
        notFound();
    }

    const sanitizedHTML = purify.sanitize(news.content);

    return (<div className="newscontent-main-container">
        <div className="newscontent-container">
            

            <h1 className="newscontent-title">{news.title}</h1>
            <h6>{news.date}</h6>

            <div className="newscontent-content" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}>
            </div>

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