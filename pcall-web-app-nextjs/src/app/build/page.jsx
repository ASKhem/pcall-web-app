"use client"
import { FaSquare } from "react-icons/fa6";
import GalleryComponent from "@/components/build/GalleryComponent";
import MusicPlayer from "@/components/build/MusicPlayer";
import ComponentsCategory from "@/components/build/ComponentsCategory"
import { useState } from "react";

function findFormComponentByCategory(category, computerForm) {
    for (const key in computerForm) {
        if (key === category) {
            return computerForm[key];
        }
    }
    return null;
}

function totalPrice(computerForm) {
    let total = 0;
    for (const key in computerForm) {
        if (computerForm[key] && computerForm[key].price) {
            total += computerForm[key].price;
        }
    }
    return total.toFixed(2);
}

function progressBar(computerForm) {
    let total = 0;
    for (const key in computerForm) {
        if (computerForm[key]) {
            total += 1;
        }
    }
    return total;

}

function BuildNewPcPage() {
    const [category, setCategory] = useState("Case")
    const [computerForm, setComputerForm] = useState({
        "Case": null,
        "Motherboard": null,
        "CPU": null,
        "GPU": null,
        "RAM": null,
        "NVMe": null,
        "Hard_Drive": null,
        "CPUCooling": null,
        "Power_Supply": null,
        "Cooling_Fan": null,
        "Network_Card": null,
        "Sound_Card": null,
        "Total": 0
    });

    let total = totalPrice(computerForm);
    let progress = progressBar(computerForm);

    let component = findFormComponentByCategory(category, computerForm);


    function handleCategory(newCategory) {
        setCategory(newCategory);
    }

    function handleComponent(component) {
        setComputerForm({
            ...computerForm,
            [category]: component
        });
    }

    return (
        <div className="w-full justify-center items-center flex flex-col gap-4 sm:gap-10">
            <div className="relative w-full min-h-screen p-4 sm:p-10 bg-gradient-to-bl from-black via-zinc-950 to-zinc-800 flex flex-col items-center justify-center text-zinc-200">
                <img src="/img/backgrounds/build-background.svg" alt="Imagen fondo build" className="text-sm w-full h-full object-cover absolute" />
                <div className="w-full sm:w-11/12 flex flex-col items-center justify-left text-xl sm:text-5xl gap-2 sm:gap-5 z-10">
                    <div className="flex w-full h-fit pb-2 sm:pb-3">
                        <div className="flex w-full sm:w-5/12 items-center">
                            <FaSquare /><h1 className="text-xl sm:text-4xl text-center font-bold">Build your PC</h1>
                        </div>
                    </div>
                    <div className="w-full flex items-start">
                        <MusicPlayer />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-1">
                        <GalleryComponent selectCategory={handleCategory} component={component} pcForm={computerForm} />
                        <div className="w-full flex flex-col sm:flex-row items-center justify-start p-2 gap-2 sm:gap-5">
                            <div className="w-full sm:w-[45%] h-full hidden sm:flex items-center justify-center">
                            </div>
                            <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-5">
                                <span className="w-full sm:w-80 h-12 text-lg sm:text-xl font-bold flex items-center justify-center p-2 border-b-2 border-zinc-300">
                                    {total}€
                                </span>
                                <button className="w-full sm:w-56 h-12 border-2 border-zinc-800 shadow-md text-lg sm:text-xl rounded-xl bg-orange-500 font-bold text-zinc-200 flex items-center justify-center p-2 active:scale-95 transition-all duration-300 hover:bg-zinc-200 hover:text-custom-blue">
                                    Build
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full sm:w-11/12 min-h-48 sm:min-h-96 h-fit flex items-center justify-center border-t-2 border-custom-blue py-8 sm:py-14">
                <ComponentsCategory category={category} addComponent={handleComponent} />
            </div>
        </div>
    )
}

export default BuildNewPcPage;