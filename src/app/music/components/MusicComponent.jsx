"use client"
import React from 'react'
import "@/styles/music.css"
import TitleComponent from '@/app/components/TitleComponent/TitleComponent';
import SoundCloudPlayerComponent from './SoundCloudPlayerComponent';
import UniverseComponent from './UniverseComponent';
import songList from "@/../data/soundTrack.json"

/**
 * 
 * Music Component
 * 
 */


const MusicComponent = () => {

    return (<div>
        <TitleComponent titleContent="Music" />
        <div className="songList">
            {songList.songs.map((song) => (
                <SoundCloudPlayerComponent
                    key={song.id}
                    url={song.soundCloudUrl}
                />
            ))}
        </div>
        <UniverseComponent />
        
    </div>)
}

export default MusicComponent;