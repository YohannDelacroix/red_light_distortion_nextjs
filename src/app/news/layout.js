import "@/styles/news.css"
import TitleComponent from "../components/TitleComponent/TitleComponent";
import NewsComponent from "./components/NewsComponent";
import Link from "next/link";
import { staticNews } from "@/api/staticNews";

export const metadata = {
    title: "Red Light Distortion - Latest News",
    description: "Stay updated with the latest news about Red Light Distortion. Discover announcements, upcoming events, and exclusive updates from the band.",
    keywords: "Red Light Distortion, band news, latest updates, announcements, events, music news, electronic metal band, French band",
    openGraph: {
        title: "Red Light Distortion - Latest News",
        description: "Discover all the latest updates, announcements, and news from Red Light Distortion.",
        url: "https://www.redlightdistortion.com/news", 
        images: [
            {
                url: "/images/header/RLDLogoFondNoir.jpg",
                width: 1200,
                height: 630,
                alt: "Latest news about Red Light Distortion",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Red Light Distortion - Latest News",
        description: "Stay informed with the latest news and updates about Red Light Distortion.",
        images: ["/images/header/RLDLogoFondNoir.jpg"],
    },
};

export default function NewsLayout({ children }) {
    return (
        <div className="news-container">
            {children}
            <div className="news-bottom">
                <TitleComponent titleContent="News" />

                <div className="news-list">
                    {
                        staticNews.map((news, index) => (
                            <Link href={`/news/${news.id}`} key={`${news.title}-${index}`}><NewsComponent  newsContent={news} /></Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
