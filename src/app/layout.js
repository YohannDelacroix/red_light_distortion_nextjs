import "@/styles/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata = {
    title: "Red Light Distortion - Official Website",
    description: "Discover Red Light Distortion, the electronic metal band from France. Explore our music, tour dates, news, photos, and lyrics. Stay tuned for the latest updates!",
    keywords: "Red Light Distortion, electronic metal, French band, music, tour dates, news, photos, lyrics, official website",
    openGraph: {
        title: "Red Light Distortion - Official Website",
        description: "Welcome to the official website of Red Light Distortion, your source for the latest updates, music, and tours from the French electronic metal band.",
        url: "https://www.redlightdistortion.com",
        images: [
            {
                url: "/images/header/RLDLogoFondNoir.jpg", 
                width: 1200,
                height: 630,
                alt: "Red Light Distortion logo with a dark background",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Red Light Distortion - Official Website",
        description: "Explore the music and journey of Red Light Distortion, the French electronic metal band.",
        images: ["/images/header/RLDLogoFondNoir.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/RLDLogoFondNoir.ico" />
            </head>
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
