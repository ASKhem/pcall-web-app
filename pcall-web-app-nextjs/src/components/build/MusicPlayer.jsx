"use client"
import './musicPlayer.css'
import { FaPlay, FaStop } from "react-icons/fa6";
import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { FaDotCircle } from "react-icons/fa";
import { useState, useRef } from 'react';
import { FaRegCircle } from "react-icons/fa6";

const songs = [
    { name: "Rainny Day", musicUrl: "/music/lofiNight.mp3", coverImg: "/img/musicPlayer/lofiNightCover.png" },
    { name: "Cloudy Day", musicUrl: "/music/lofiCloudy.mp3", coverImg: "/img/musicPlayer/lofiCloudyCover.png" },
    { name: "Sunny Day", musicUrl: "/music/lofiSunny.mp3", coverImg: "/img/musicPlayer/lofiSunnyCover.png" },
    { name: "jazz Vibes", musicUrl: "/music/jazzVibes.mp3", coverImg: "/img/musicPlayer/jazzVibesCover.png" }
]

export default function MusicPlayer() {
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [active, setActive] = useState(false)
    const audioRef = useRef(null);

    const nextSong = (play = false) => {
        const currentIndex = songs.findIndex(song => song === currentSong);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentSong(songs[nextIndex]);
        setActive(play);
        if (play) playMusic();
    }

    const prevSong = () => {
        const currentIndex = songs.findIndex(song => song === currentSong);
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrentSong(songs[prevIndex]);
        setActive(false);
        stopMusic();
    }

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => console.error('Autoplay prevented:', error));
            setTimeout(() => audioRef.current?.play(), 10);
        }
    }

    const stopMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }

    const togglePlay = () => {
        setActive(!active);
        active ? stopMusic() : playMusic();
    }

    return (
        <div className="lg:w-96 w-full h-24 lg:h-20 bg-zinc-950  transition-all duration-300 text-lg rounded-xl flex items-center justify-between px-2 lg:mx-3 text-zinc-300 border-2 border-zinc-800">
            <div className="relative w-14 h-14">
                <img src={currentSong.coverImg} alt="mc" className={`w-14 h-14 circle text-sm rounded-full border-4 border-zinc-400  bg-black ${active ? 'animate-spin-slow' : ''}`} />
                <FaDotCircle className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zinc-400 opacity-75 ${active ? 'animate-pulse' : ''}`} />
                <audio ref={audioRef} src={currentSong.musicUrl} onEnded={() => nextSong(true)} />
            </div>

            <div className="overflow-hidden lg:w-32 w-1/3 h-6 whitespace-nowrap">
                <div className={`inline-block ${active ? 'animate-marquee' : ''}`}>
                    {currentSong.name}
                </div>
            </div>
            <div className="lg:w-32 w-1/3 h-6 flex lg:text-2xl text-xl items-center justify-center gap-3">
                <IoPlayBack onClick={prevSong} />
                {active ? (
                    <FaStop onClick={togglePlay} className="cursor-pointer" />
                ) : (
                    <FaPlay onClick={togglePlay} className="cursor-pointer" />
                )}
                <IoPlayForward onClick={() => nextSong()} />
            </div>
        </div>
    )
}
