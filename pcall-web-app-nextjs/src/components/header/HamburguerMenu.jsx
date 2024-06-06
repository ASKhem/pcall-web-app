"use client"
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

function HamburguerMenu({ categories }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isOpen);
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    const categoriesToUpperCase = categories.map(category =>
        category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    );

    return (
        <div className="lg:hidden flex">
            <div className="text-white cursor-pointer hover:text-orange-600 transition-all duration-200">
                {isOpen ? (
                    <RxCross2 onClick={toggleMenu} className="text-4xl" />
                ) : (
                    <HiMenuAlt4 onClick={toggleMenu} className="text-4xl" />
                )}
            </div>

            {isOpen && (
                <div
                    className="absolute top-14 right-0 w-full h-[40vh] bg-presloviny-blue mt-2 bg-slate-950 rounded-2xl flex flex-col transition-all duration-300 ease-in-out opacity-100 translate-x-0 gap-10 p-10"
                    onMouseLeave={toggleMenu}
                >
                    <ul className="flex flex-col gap-5">
                        <Link href="/">
                            <li className="cursor-pointer text-xl text-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center gap-5 border-b border-zinc-200 dark:border-zinc-500 pb-5">
                                <span className="w-24">Home</span>
                            </li>
                        </Link>
                        <div className="grid grid-cols-2 gap-3">
                            {categoriesToUpperCase.map((category, index) => (
                                <Link href={`/${categories[index]}`} key={category}>
                                    <li
                                        className="cursor-pointer text-xl text-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center gap-5"
                                        onClick={toggleMenu}
                                    >
                                        <span className="w-24">{category}</span>
                                    </li>
                                </Link>
                            ))}
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HamburguerMenu;