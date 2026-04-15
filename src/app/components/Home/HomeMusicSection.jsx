/**
 * HomeMusicSection Component
 */

import React from 'react'
import songList from "@/../data/soundTrack.json"
import SoundCloudPlayerComponent from '@/app/music/components/SoundCloudPlayerComponent';

const HomeMusicSection = ({  }) => {
    const song = songList.songs[1];

    return (
        <section className="home-song">
            <SoundCloudPlayerComponent
                        key={song.id}
                        url={song.soundCloudUrl}
                    />
        </section>
    )
}

export default HomeMusicSection