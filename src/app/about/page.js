/**
 * @fileoverview About Page for Red Light Distortion
 * @description This page contains the biography of the band members (Walrus and Thrash X) as well as the story of the band. 
 * It also includes metadata for SEO optimization and social media sharing. 
 * @version 1.0
 * @author Yohann Delacroix
 * @see {@link https://redlightdistortion.netlify.app/about} for the live version of the page.
 */

import "@/styles/about.css";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import Image from "next/image";

/**
 * Metadata for the "About" page, including SEO information and social media sharing configurations.
 * These details help optimize the page for search engines and improve visibility on social media platforms (Facebook, Twitter, etc.).
 */
export const metadata = {
    title: "About - Red Light Distortion",
    description: "Learn more about Red Light Distortion, the French electronic metal band. Discover the band's story, members, and journey through music.",
    keywords: "Red Light Distortion, about the band, electronic metal, band biography, French band, music history, band members, Red Light Distortion story",
    openGraph: {
        title: "About - Red Light Distortion",
        description: "Discover the story behind Red Light Distortion, the electronic metal band from France. Meet the members and explore their journey in music.",
        url: "https://www.redlightdistortion.com/about", 
        images: [
            {
                url: "/images/galery/306269907_794345211858007_7240273007052242851_n.jpg", 
                width: 1200,
                height: 630,
                alt: "Red Light Distortion Band",
            },
        ],
        type: "website", 
    },
    twitter: {
        card: "summary_large_image",
        title: "About - Red Light Distortion",
        description: "Explore the story and journey of Red Light Distortion, the French electronic metal band. Meet the members and discover their musical path.",
        images: ["/images/galery/306269907_794345211858007_7240273007052242851_n.jpg"],
    },
};

/**
 * About page component that displays the biographies of the band members and the band's story.
 * This page includes images and text content describing the origins of Red Light Distortion.
 */
function About() {
    return (
        <main className="about-container">
            <TitleComponent titleContent="About" level="2" />

            {/* Main section containing the biography of the band members */}
            <section className="about-biography">

                {/* Biography of Roman (Walrus) */}
                <article className="about-member-biography-left">
                    <Image
                        src="/images/about/roman.jpg"
                        alt="Walrus picture"
                        width={1600}
                        height={1295}
                        className="about-img-roman"
                        title="image of Walrus"></Image>
                    <h3>Walrus</h3>
                    <h4 className="about-title-right">Roman Krukowski</h4>
                    <h5>Guitarist</h5>
                    <p>
                        Roman was 15 when the shock happenned.
                    </p>
                    <p>
                        He was already listen to metal since he was 10, but it is with the discover of electro and especially with the videoclip «Wizard»
                        by Martin Garrix that the seed of passion was planted. <br />
                        Since that time he never looked back.</p>
                    <p>
                        Starting to learn how to mix, he gave up the mixing to focus on his heart’s instrument, the guitar.
                        When his fingers touched the neck, he immediately knew what he wanted to be : a musician.
                    </p>
                    <p>
                        So, he begins to devote his time and his own energy to music,
                        drawing inspiration from accomplished musicians like Dave Mustaine or Joe Duplantier.
                        Since, the more the sands of time was running out,
                        the more his passion and devotion increased.
                    </p>
                </article>

                {/* Biography of Thrash X */}
                <article className="about-member-biography-right">
                    <Image src="/images/about/x.jpg"
                        alt="X picture"
                        width={1000}
                        height={1500}
                        className="about-img-x"
                        title="image of X">
                    </Image>
                    <h3>X</h3>
                    <h4 className="about-title-left">Thrash X</h4>


                    <h5>Guitarist, Singer</h5>
                    <p>
                        At 17, Thrash X was a mere student who spent his time playing guitar.
                    </p>
                    <p>
                        During a metal show, he is invited to perform a song with the band, he realises that the stage is a place where he loves to be.
                        He decides to stop his studies to devote himself entirely to music.</p>
                    <p>
                        Afterward, he takes singing lessons with Saturne Mezzasalma. She gives him the will to sing and he learns everything from her.
                    </p>
                    <p>
                        In 2017, he lost a loved one, and begins to ask himself on what will be the future, what is really important for him..
                        And during these dark times he composes the first Red Light Distortion's sound.
                        He realises the most important thing before death takes life is to play music.
                    </p>
                </article>

                {/* Biography of the band and its origin story */}
                <article className="about-band-biography" >
                    <h3>The Red Story</h3>
                    <p>
                        At the beginning, Thrash X was a guitar teacher and gave guitar lessons to Roman.
                        They become friends and decide to create Red Light Distortion.
                        The two friends start to search for a drummer and a bassist to fill a Heavy Metal line-up.</p>
                    <p>
                        One, and another one, and another again, but at the end still no one fits.<br />
                        And one day, suddenly, they thought : "Why searching for musicians if we have a good sound playing in duo ?"</p>
                    <p>
                        Following this realization came the idea to fill the rythmic section with electronic sounds.
                        After several weeks of hard word the new Red Light Electronic Distortion is ready.
                        To X and Walrus, this is a success, the sounds fits perfectly together and the energy is strongly waving.
                    </p>
                    <p>
                        Red Light Distortion is ready to put their foot on stage.
                        The audience is about to discover the new Electronic Heavy Metal.
                    </p>
                </article>
            </section>
        </main>
    )
}

export default About;
