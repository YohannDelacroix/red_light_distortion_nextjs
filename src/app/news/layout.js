import "@/styles/news.css"
import TitleComponent from "../components/TitleComponent";
import NewsComponent from "./components/NewsComponent";
import Link from "next/link";
import { newsTable } from "@/api/dataNews";

export default function NewsLayout({ children }) {
    return (
        <div className="news-container">
            {children}
            <div className="news-bottom">
                <TitleComponent titleContent="News" />

                <div className="news-list">
                    {
                        newsTable.map((news, index) => (
                            <Link href={`/news/${news.id}`} key={`${news.title}-${index}`}><NewsComponent  newsContent={news} /></Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
