/***************************************************************
  * @file shop.js
  * @description
  * "Shop" page for the Red Light Distortion website.
  *
  * @dependencies
  *
  * @usage
  *
  * @author Yohann Delacroix
 ***************************************************************/

import "@/styles/shop.css";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import ShoppingComponent from "./components/ShoppingComponent";
import Link from "next/link";
import { staticShop } from "@/api/staticShop";

export const metadata = {
    title: "Red Light Distortion - Shop",
    description: "Explore the shop of Red Light Distortion. Purchase derived products or music",
    keywords: "Red Light Distortion, shop, band, live performances, backstage, music, electronic metal band, French band",
    openGraph: {
        title: "Red Light Distortion - Shop",
        description: "Browse through the official shop of Red Light Distortion. Discover what you can keep with you from the band.",
        url: "https://www.redlightdistortion.netlify.app/shop",
        images: [
            {
                url: "https://www.redlightdistortion.netlify.app/images/galery/306269907_794345211858007_7240273007052242851_n.jpg",
                width: 1200,
                height: 630,
                alt: "Photo of Red Light Distortion on stage",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Red Light Distortion - Photo Gallery",
        description: "Discover Red Light Distortion in pictures. See the band performing live and behind the scenes.",
        images: ["https://www.redlightdistortion.netlify.app/images/galery/306269907_794345211858007_7240273007052242851_n.jpg"],
    },
};

function Shop() {
    return (
        <div className="shop-container">
            <TitleComponent titleContent="Shop" />
            <section className="shop-list">
                {
                    staticShop.map((shop, index) => (
                        <Link href={`/shop/${shop.id}`} key={`${shop.title}-${index}`}><ShoppingComponent shopContent={shop} /></Link>
                    ))
                }
            </section>
        </div>
    )
}

export default Shop;
