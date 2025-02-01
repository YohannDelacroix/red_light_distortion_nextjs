/**
 * Lyrics Component
 * 
 * @description This component is responsible for displaying the song lyrics of the band Red Light Distortion.
 * It fetches the lyrics data from either a static or dynamic source and displays a list of songs.
 * When a song is selected, its lyrics and description are shown in a section with smooth animations.
 * The component supports responsive resizing, ensuring the lyrics section dynamically adjusts its height
 * based on the content and the screen size.
 *
 * @state {Array} lyrics - Stores the list of songs and their lyrics.
 * @state {Object} song - Stores the currently selected song and its details.
 * @state {string|null} error - Stores error messages in case of a failed data fetch.
 * @state {boolean} loading - Manages the loading state while lyrics are being fetched.
 * @state {boolean} lyricsSection - Toggles the visibility of the lyrics section.
 * @state {AbortController} stopResizing - Manages the abort signal for window resizing events.
 *
 * @function getLyrics - Fetches the lyrics data either from a static source or the server.
 * @function handleDisplayLyrics - Changes the song displayed in the lyrics section.
 * @function displayLyricsSection - Manages the opening/closing of the lyrics section and triggers animation effects.
 * @function resizeWindow - Handles resizing logic for the lyrics section.
 * @function triggerHeightAnimation - Requests an animation to adjust the height of the lyrics section.
 *
 * @dependencies axios - For making API requests to fetch dynamic lyrics data.
 * @dependencies staticLyrics - For accessing static lyrics data.
 * @dependencies ServerError - Component for displaying error state when the fetch fails.
 * @dependencies Loading - Component for displaying loading state while the lyrics are being fetched.
 *
 * @component
 * 
 * @author Yohann Delacroix
 * @date 2022-12
 */

"use client"
import axios from "@/api/axios"
import React from 'react'
import { useState, useEffect } from 'react'
import ServerError from "@/app/components/ServerError/ServerError"
import Loading from "@/app/components/Loading/Loading"
import "@/styles/lyrics.css"
import { staticLyrics } from "@/api/staticLyrics"

const Lyrics = () => {
    const emptySong = { title: "", description: [], lyrics_en: [] };
    const [lyrics, setLyrics] = useState();
    const [song, setSong] = useState(emptySong);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lyricsSection, setLyricsSection] = useState(false)
    const [stopResizing, setStopResizing] = useState(new AbortController());

    useEffect(() => {
        //Get list of lyrics from the server
        const getLyrics = async () => {
            try {
                const isStaticVersion = process.env.NEXT_PUBLIC_STATIC_VERSION === "true";
                if (isStaticVersion) {
                    // Static version
                    setLyrics(staticLyrics)
                } else {
                    // Dynamic version
                    const response = await axios.get('/lyrics')
                    setLyrics(response.data)
                }

                setError(null)
            }
            catch (err) {
                setError(err.message)
                setLyrics(null)
            }
            finally {
                setLoading(false)
            }
        }

        getLyrics();

        if (!lyricsSection) {
            document.getElementById("universe-song").style.maxHeight = `0px`;
            document.getElementById("universe-song").style.minHeight = `0px`;
        }
    }, [lyricsSection])

    //Change the song displayed on screen
    const handleDisplayLyrics = (song) => {
        setLyricsSection(true)
        setSong(emptySong) //Allow the user to go back to the song he closed
        setSong(song)
        displayLyricsSection(true, song)
    }

    //Manage the Lyrics section on screen and the effects
    const displayLyricsSection = (active, currentSong = null) => {
        const elemUniverseSong = document.getElementById("universe-song");

        /* 
            Making the lyrics expanding at the perfect height 
        */

        //1 - Request the browser to play an animation on screen
        const triggerHeightAnimation = () => {
            const callSetHeight = () => {
                setHeight(calcHeight());
            }
            window.requestAnimationFrame(callSetHeight)
        }

        //2 - Calcul the height of the universe-song div
        const calcHeight = () => {
            //Function : return the margins top and bottom from a given block
            const getMargins = (blockElem) => {
                if(!blockElem) return -1;
                let style = blockElem.currentStyle || window.getComputedStyle(blockElem);
                let marginTop = parseInt(style.marginTop, 10);
                let marginBottom = parseInt(style.marginBottom, 10);
                return marginTop + marginBottom;
            }

            //Height of the top section
            let universeSongTopSectionElem = document.getElementById
                ("universe-song-top-section");
            let heightTopSection = universeSongTopSectionElem.offsetHeight + getMargins(universeSongTopSectionElem);

            //Height of the description element
            let descriptionElement = document.getElementById("universe-song-description")
            let descriptionLength = 0;
            for (let child of descriptionElement.children) {
                descriptionLength += child.offsetHeight;
            }

            //Height of the lyrics title
            let universeSongLyricsTitleElem = document.getElementById
                ("universe-song-lyrics-title");
            let heightLyricsTitle = universeSongLyricsTitleElem.offsetHeight + getMargins(universeSongLyricsTitleElem);

            //Height of the lyrics lines
            let heightOneLyric = document.getElementsByClassName("universe-song-lyrics-sentence");
            let lyricsHeight = 0;
            for (let i = 0; i < heightOneLyric.length; i++) {
                lyricsHeight += heightOneLyric[i].offsetHeight;
            }

            //Total height
            const heightValue = lyricsHeight + descriptionLength + heightTopSection + heightLyricsTitle;
            return heightValue;
        }

        //3 - Set the min and max height before the transition animation
        const setHeight = (heightValue) => {
            elemUniverseSong.style.maxHeight = `${heightValue}px`;
            elemUniverseSong.style.minHeight = `${heightValue}px`;
        }

        /*
            Resizing event
        */

        //Prevent to execute the function only one time after the end of resizing
        const afterResize = () => {
            triggerHeightAnimation();
        }

        let timeOutFunctionID;
        //Each time the event window.resize is triggered
        const resizeWindow = () => {
            clearTimeout(timeOutFunctionID);
            timeOutFunctionID = setTimeout(afterResize, 500);
        }

        /* 
            Display the lyrics section or close 
        */

        if (active) {  //When opening a new lyric
            if (document.getElementById("universe-song") == null) {
                console.log("Error : universe-song undeclared = NULL")
            }
            else {
                elemUniverseSong.classList.remove("us-deleteitem");
                elemUniverseSong.classList.add("us-newitem");
                document.getElementById("universe-song-button-close").classList.remove("disappear-animation");

                setTimeout(() => {
                    triggerHeightAnimation();
                }, 0);
                //triggerHeightAnimation(); //Height transition animation

                window.addEventListener("resize", resizeWindow, stopResizing);
            }
        }
        else { //When Closing the lyrics section
            setLyricsSection(false)
            elemUniverseSong.classList.remove("us-newitem");
            elemUniverseSong.classList.add("us-deleteitem");
            document.getElementById("universe-song-button-close").classList.add("disappear-animation");

            //Set the height to 0 and trigger an animation
            const setHeight = () => {
                elemUniverseSong.style.maxHeight = `0px`;
                elemUniverseSong.style.minHeight = `0px`;
            }
            window.requestAnimationFrame(setHeight);

            //Prevent the height to increase when the user resize the screen when there is no song on screen
            stopResizing.abort();
            setStopResizing(new AbortController());

            //Remove the class deleteitem to prevent the song list moving when screen is resized, 500 is the duration of the animation
            setTimeout(() => {
                elemUniverseSong.classList.remove("us-deleteitem");
            }, 500);
        }
    }

    return (
        <>
            {loading && <Loading />}
            {error && <ServerError />}

            <div className="lyrics-container">
                <div id="universe-song" className="universe-song" data-testid="universe-song">
                    <div className="universe-song-content" id="universe-song-content">
                        <div className="universe-song-top-section" id="universe-song-top-section">
                            <h5 className="universe-song-top-section-title">{song.title}</h5>
                            <button id="universe-song-button-close"
                                data-testid="universe-song-button-close"
                                className="universe-song-button-close"
                                onClick={() => displayLyricsSection(false)}>X</button>
                            <div className='universe-song-top-section-line'></div>
                        </div>

                        <div className="universe-song-description" id="universe-song-description">
                            {song.description.map((sentence, index) => (<div key={index}>{sentence}</div>))}
                        </div>

                        <div className="universe-song-lyrics">
                            <h4 id="universe-song-lyrics-title">Lyrics</h4>
                            {song.lyrics_en.map((sentence, index) => (
                                song.lyrics_en.length - 1 === index ?
                                    <div key={index} className="universe-song-lyrics-sentence" data-testid="uslt-last">{sentence}</div>
                                    :
                                    <div key={index} className="universe-song-lyrics-sentence">{sentence}</div>
                            ))}
                        </div>
                    </div>
                </div>

                {
                    //List of songs that the user can select to see the lyrics
                    lyrics && <ul className="universe-songs-list">
                        {lyrics.map((song, index) => {
                            //console.log(song)
                            return (
                                <li key={`${index}+${song.title}`} className="universe-songs-list-item">
                                    <button onClick={() => handleDisplayLyrics(song)}
                                        className="universe-songs-list-item-button"
                                        role="menuitem">{song.title}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        </>
    )
}

export default Lyrics