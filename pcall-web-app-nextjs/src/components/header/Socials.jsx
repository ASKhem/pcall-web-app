"use client";
import { useState } from "react";

const socialsData = [
    { href: "#", src: "/img/header/socials-panel/facebook.png", alt: "facebook" },
    { href: "#", src: "/img/header/socials-panel/instagram.png", alt: "instagram" },
    { href: "#", src: "/img/header/socials-panel/whatsapp.png", alt: "whatsapp" },
    { href: "#", src: "/img/header/socials-panel/youtube.png", alt: "youtube" },
    { href: "#", src: "/img/header/socials-panel/x.png", alt: "x" },
    { href: "#", src: "/img/header/socials-panel/phone.png", alt: "phone" },
];
export default function Socials() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <aside
            className="lg:flex hidden justify-start items-center w-24 h-96 cursor-pointer fixed border-l-0 z-10 left-0 top-1/4 transition-transform duration-500 ease-in-out hover:translate-x-0 translate-x-[-68%]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between py-5 px-1 items-center flex-col rounded-r-lg bg-custom-blue border border-gray-700 h-full gap-1 w-16">
                {socialsData.map(({ href, src, alt }) => (
                    <a key={alt} href={href} className="flex items-center justify-center w-full h-12 cursor-pointer">
                        <img src={src} alt={alt} className="w-8 h-8 filter brightness-120" />
                    </a>
                ))}
            </div>
            <div
                className={`h-56 w-6 flex justify-center items-center flex-col bg-custom-blue border border-gray-800 border-l-0 rounded-r-lg ${
                    isHovered ? 'hidden' : ''
                }`}
            >
                <a className="text-white flex justify-center items-center w-full h-full">
                    S<br />O<br />C<br />I<br />A<br />L<br />S
                </a>
            </div>
        </aside>
    );
}