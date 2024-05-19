"use client"
import { useRef, useEffect } from 'react';

function VideoToMovement({ videoSrc, text }, ref) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleEnded = () => {
            video.currentTime = 0;
        };

        video?.addEventListener('ended', handleEnded);

        return () => {
            video?.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <div className ="w-11/12 gap-5 flex flex-col justify-center lg:py-5 py-2">
            <p className="w-11/12 lg:text-base text-sm">{text}</p>
            <video
                ref={videoRef}
                src={videoSrc}
                muted
                className="active:scale-95 transition-all duration-300 ease-in-out w-full lg:h-11/12 object-cover rounded-xl"
                onMouseMove={() => videoRef.current?.play()}
                onMouseLeave={() => {
                    videoRef.current?.pause();
                    videoRef.current.currentTime = 0;
                }}
            ></video>
            
        </div>

    );
}

export default VideoToMovement;
