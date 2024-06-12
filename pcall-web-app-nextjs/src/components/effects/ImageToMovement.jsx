"use client"
import { useRef } from 'react';

function ImageToMovement({ imageSrc, gifSrc }) {
    const imgRef = useRef(null);

    const handleMouseEnter = () => {
        imgRef.current.src = gifSrc;
    };

    const handleMouseLeave = () => {
        imgRef.current.src = imageSrc;
    };

    return (
        <img
            ref={imgRef}
            src={imageSrc}
            alt="Image to GIF"
            className="active:scale-95 transition-all duration-300 ease-in-out w-full lg:h-full h-[200px] object-cover rounded-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}

export default ImageToMovement;