"use client"
import React, { useState } from 'react';

const componentsList = ["Case", "Motherboard", "CPU", "GPU", "RAM", "NVMe", "Hard_Drive", "CPUCooling", "Power_Supply", "Cooling_Fan", "Network_Card", "Sound_Card"];

function Gallery({ selectCategory, componentsInfo }) {
    const [selectedItem, setSelectedItem] = useState("Case");

    const items = [
        { name: "Case", imgSrc: "/img/galleryCards/caseOp.png", category: "Case" },
        { name: "Motherboard", imgSrc: "/img/galleryCards/motherboardOp.png", category: "Motherboard" },
        { name: "Processor", imgSrc: "/img/galleryCards/processorOp.png", category: "CPU" },
        { name: "Graphic Card", imgSrc: "/img/galleryCards/graphicCardOp.png", category: "GPU" },
        { name: "RAM", imgSrc: "/img/galleryCards/ramOp.png", category: "RAM" },
        { name: "NVMe memory", imgSrc: "/img/galleryCards/nvmeOp.png", category: "NVMe" },
        { name: "Hard Drive", imgSrc: "/img/galleryCards/hardDriveOp.png", category: "Hard_Drive" },
        { name: "CPU Cooling", imgSrc: "/img/galleryCards/cpuCoolingOp.png", category: "CPUCooling" },
        { name: "Power Supply", imgSrc: "/img/galleryCards/powerSupplyOp.png", category: "Power_Supply" },
        { name: "Cooling Fan", imgSrc: "/img/galleryCards/coolingFanOp.png", category: "Cooling_Fan" },
        { name: "Network Card", imgSrc: "/img/galleryCards/networkCardOp.png", category: "Network_Card" },
        { name: "Sound Card", imgSrc: "/img/galleryCards/soundCardOp.png", category: "Sound_Card" },
    ];

    return (
        <ul className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-5">
            {items.map((item, index) => (
                <li key={index}>
                    <GalleryCard
                        {...item}
                        selected={selectedItem === item.name}
                        onItemClick={() => {
                            setSelectedItem(item.name);
                            selectCategory(item.category);
                        }}
                        componentInfo={componentsInfo[componentsList[index]]}
                    />
                </li>
            ))}
        </ul>
    );
}

function GalleryCard({ name, imgSrc, selected, onItemClick, componentInfo }) {
    return (
        <div
            className={`h-28 relative w-full overflow-hidden shadow-lg shadow-black drop-shadow-sm rounded-xl border-2 ${selected ? "border-orange-600" : "border-zinc-800"}`}
            onClick={onItemClick}
        >
            <img src={imgSrc} alt={name} className="absolute w-full h-full inset-0 object-cover text-sm" />
            <div className={`absolute inset-0 w-full h-full bg-black transition duration-500 backdrop-filter ${selected || componentInfo ? "bg-opacity-20 backdrop-blur" : "bg-opacity-0"}`} />
            <div className="absolute inset-x-5 text-white">
                <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                {componentInfo && (
                    <div>
                        <p className="text-sm">{componentInfo.brand} {componentInfo.model}</p>
                        <p className="text-sm">{componentInfo.price}€</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Gallery;
