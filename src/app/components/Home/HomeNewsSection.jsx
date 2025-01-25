/**
 * HomeNewsSection Component
 * 
 * This component displays a section on the homepage showing the latest news articles.
 * Currently, the news articles are fetched from a static source (`staticNews`).
 * In the future, this component can be enhanced to dynamically fetch news from an API or database.
 * 
 * Structure:
 * - Title: A dynamic title rendered using the TitleComponent (level 2 heading).
 * - News List: A list of the latest news articles, with a limit of 4 items shown.
 * - Link: A "More News" button that redirects to the full news page.
 * 
 * Data Handling:
 * - Currently, the component uses a static array (`staticNews`) for news articles.
 * - This static data is rendered on the page until a dynamic solution (API or database integration) is implemented.
 * 
 * Dependencies:
 * - `TitleComponent`: To render the section title.
 * - `NewsComponent`: To render individual news articles.
 * - `Link`: For navigation to the full news page.
 * 
 * Note: The dynamic loading of news content is planned but currently not implemented. 
 *       The component is using static data for now, and will be updated once 
 *       the news route is integrated with the database or API.
 */

import React from 'react'
import Link from 'next/link'
import TitleComponent from '../TitleComponent/TitleComponent'
import NewsComponent from '@/app/news/components/NewsComponent'
import { staticNews } from '@/api/staticNews'

const HomeNewsSection = () => {
    // Static data for news articles
    let news = [...staticNews];

    return (
        <section className="home-news" aria-labelledby="news-section-title">
            {/* Title Section */}
            <TitleComponent titleContent="News" level={2} titleId="news-section-title" />

            {/* News List Section */}
            <div className="news-list">
                {
                    news.slice(0, 4).map((news, index) => (
                        <Link key={`${news.title}-${index}`} href={`/news/${news.id}`}>
                            <NewsComponent newsContent={news} />
                        </Link>
                    ))
                }
            </div>

            {/* Link to Full News Page */}
            <Link className="home-link" href="/news"><button className="home-button">More News</button></Link>
        </section>
    )
}

export default HomeNewsSection