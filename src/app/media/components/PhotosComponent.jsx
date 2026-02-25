"use client"
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react'
import { FaPlay } from "react-icons/fa";
import "@/styles/photos.css"
import TitleComponent from '@/app/components/TitleComponent/TitleComponent';
import imagesSrc from "@/../data/imageList.json"

/**
 * 
 * Photo component
 * Display the photo gallery
 * 
 */


const PhotosComponent = () => {
    return (<div>
        <TitleComponent titleContent="Photos" />
        <section className="photo-gallery">
            {
                imagesSrc.map((image, index) => {
                    return (
                        <figure className="photo-gallery-img-container" key={image}>
                            <a href={image}>
                                <Image
                                    src={image}
                                    alt={`Photo from the first shooting of Red Light Distortion : #${index + 1}`}
                                    layout="responsive"
                                    width={16}
                                    height={9}
                                    className="photo-gallery-img"
                                ></Image>
                            </a>
                        </figure>)
                }
                )
            }
        </section>
    </div>)
}

export default PhotosComponent;