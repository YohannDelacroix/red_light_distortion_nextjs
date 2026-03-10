/**
 * SoundCloud player Component
 */

"use client"



const SoundCloudPlayerComponent = ({ url }) => {
    const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
        url
    )}`;

    return (
        <div className="soundcloud-player">
            <iframe
                width="100%"
                height="166"
                allow="autoplay"
                src={embedUrl}
            />
        </div>
    );

}

export default SoundCloudPlayerComponent