/**
 * Home Page Component
 * 
 * This component is responsible for rendering the main content of the homepage. 
 * It organizes the following sections:
 * 1. Video section (embedded YouTube video)
 * 2. Newsletter subscription form
 * 3. Tour dates (dynamic or static data based on the current configuration)
 * 4. News (latest articles from the blog)
 * 5. Photos (photo gallery)
 * 6. Logo (branding image)
 * 
 * 
 * Each section is implemented as a separate component, imported here:
 * - HomeVideoSection: Handles video embedding.
 * - HomeNewsletterSection: Handles the newsletter form.
 * - HomeTourSection: Displays upcoming tour dates.
 * - HomeNewsSection: Shows the latest news articles.
 * - HomePhotosSection: Displays a photo gallery.
 * 
 */

import Image from "next/image"
import "@/styles/home.css"
import "@/styles/newsletter.css";
import "@/styles/photos.css";
import "@/styles/tour.css";
import HomeNewsletterSection from "./components/Home/HomeNewsletterSection";
import HomeVideoSection from "./components/Home/HomeVideoSection";
import HomeTourSection from "./components/Home/HomeTourSection";
import HomeNewsSection from "./components/Home/HomeNewsSection";
import HomePhotosSection from "./components/Home/HomePhotosSection";

export default function Home() {
    return (
        <main className="home">
            {/* Video Section */}
            <HomeVideoSection />

            {/* Newsletter Section */}
            <HomeNewsletterSection />

            {/* Tour Dates Section */}
            <HomeTourSection />

            {/* News Section */}
            <HomeNewsSection />

            {/* Photos Section */}
            <HomePhotosSection />

            {/* Branding Logo Section */}
            <section className="home-logo">
                <Image
                    src="/images/header/RLDLogoFondNoir.jpg"
                    alt="Red Light Distortion Logo"
                    width={389}
                    height={153}
                    layout="responsive"
                    className="logo-img"></Image>
            </section>
        </main>
    );
}
