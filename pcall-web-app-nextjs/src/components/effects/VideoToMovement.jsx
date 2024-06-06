"use client"
import { useRef, useEffect } from 'react';

function VideoToMovement({ videoSrc, text, type }) {
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
        <div className="w-full gap-5 flex flex-col justify-center lg:py-5 py-2">
            <p className={`w-full flex items-center justify-center ${type ? "h-[50px]" : "h-[100px]"}`}>{text}</p>
            <video
                ref={videoRef}
                src={videoSrc}
                muted
                className={`active:scale-95 transition-all duration-300 ease-in-out w-full object-cover rounded-xl`}
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
