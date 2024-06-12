"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaSquare } from 'react-icons/fa';
function ImageGallery() {
    const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
    const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
    const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
    const galleryRef = useRef(null);

    const imageGalleryOpen = (event) => {
        setImageGalleryImageIndex(event.target.dataset.index);
        setImageGalleryActiveUrl(event.target.src);
        setImageGalleryOpened(true);
    };

    const imageGalleryClose = () => {
        setImageGalleryOpened(false);
        setTimeout(() => setImageGalleryActiveUrl(null), 300);
    };

    const imageGalleryNext = () => {
        const totalImages = galleryRef.current.childElementCount;
        const newIndex = imageGalleryImageIndex == totalImages ? 1 : parseInt(imageGalleryImageIndex) + 1;
        setImageGalleryImageIndex(newIndex);
        setImageGalleryActiveUrl(galleryRef.current.querySelector(`[data-index='${newIndex}']`).src);
    };

    const imageGalleryPrev = () => {
        const totalImages = galleryRef.current.childElementCount;
        const newIndex = imageGalleryImageIndex == 1 ? totalImages : parseInt(imageGalleryImageIndex) - 1;
        setImageGalleryImageIndex(newIndex);
        setImageGalleryActiveUrl(galleryRef.current.querySelector(`[data-index='${newIndex}']`).src);
    };

    useEffect(() => {
        const imageGalleryPhotos = galleryRef.current.querySelectorAll('img');
        imageGalleryPhotos.forEach((img, index) => {
            img.setAttribute('data-index', index + 1);
        });
    }, []);

    return (
        <div className="w-full min-h-screen py-16 select-none flex-col items-center justify-center flex bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500">
            <div className="w-11/12 text-custom-blue flex flex-col items-center justify-center gap-5 border-b border-b-zinc-200 font-bold pb-5">
                <div className="flex items-center w-full gap-5 text-5xl ">
                    <FaSquare />
                    <h2 className="text-4xl ">Gallery</h2>
                </div>
            </div>
            <section className="w-full h-full select-none flex items-center justify-center">
                <div className="w-11/12 min-h-[80vh] duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                    <ul ref={galleryRef} id="gallery" className="grid grid-cols-2 gap-10 lg:grid-cols-4">
                        <li><img onClick={imageGalleryOpen} src="img/components/galleryImg1.png" className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:scale-105 transition-all duration-300" /></li>
                        <li><img onClick={imageGalleryOpen} src="img/components/galleryImg2.png" className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:scale-105 transition-all duration-300" /></li>
                        <li><img onClick={imageGalleryOpen} src="img/components/galleryImg3.png" className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:scale-105 transition-all duration-300" /></li>
                        <li><img onClick={imageGalleryOpen} src="img/components/galleryImg4.png" className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:scale-105 transition-all duration-300" /></li>
                        <li><img onClick={imageGalleryOpen} src="img/components/galleryImg5.png" className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:scale-105 transition-all duration-300" /></li>
                        <li><img onClick={imageGalleryOpen} src="img/components/galleryImg6.png" className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:scale-105 transition-all duration-300" /></li>
                        <li><img onClick={imageGalleryOpen} src="img/components/galleryImg7.png" className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:scale-105 transition-all duration-300" /></li>
                        <li><img onClick={imageGalleryOpen} src="img/components/galleryImg8.png" className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:scale-105 transition-all duration-300" /></li>
                    </ul>
                </div>
                {imageGalleryOpened && (
                    <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out" onClick={imageGalleryClose}>
                        <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
                            <div onClick={(e) => { e.stopPropagation(); imageGalleryPrev(); }} className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                            <img className="object-contain object-center w-full h-full select-none cursor-zoom-out" src={imageGalleryActiveUrl} alt="" />
                            <div onClick={(e) => { e.stopPropagation(); imageGalleryNext(); }} className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>

    );
}

export default ImageGallery;