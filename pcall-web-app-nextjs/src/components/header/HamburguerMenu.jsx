"use client"
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect, useCallback } from "react";
import { IoHome } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import Logout from '@/components/user/Logout';

import Link from "next/link";

function HamburguerMenu({ categories, user }) {
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
                    className="absolute top-14 right-0 w-full h-[40vh] bg-presloviny-blue mt-2 bg-slate-950 flex flex-col transition-all duration-300 ease-in-out opacity-100 translate-x-0 gap-10 p-10"
                    onMouseLeave={toggleMenu}
                >
                    <ul className="flex flex-col gap-5">
                        <div className="flex gap-5 border-b border-zinc-200 pb-5 justify-between items-center">
                            {
                                user && (
                                    <div className="flex gap-5">
                                        <Link href="/user/order" className="text-sm text-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center"><FaShoppingBasket className="text-2xl" /></Link>
                                        <Logout />
                                    </div>
                                )
                            }
                            {

                                !user && (
                                    <div className="flex gap-5">
                                        <Link href="/auth/login" className="text-sm text-black font-bold transition-colors duration-200 bg-zinc-200 py-1 px-3 rounded-lg hover:bg-zinc-100 active:scale-95 flex items-center justify-center" onClick={toggleMenu}>Log In</Link>
                                        <Link href="/auth/register" className="text-sm text-zinc-200 font-bold transition-colors duration-200 hover:text-zinc-200 hover:bg-orange-600  bg-orange-700 py-1 px-3 rounded-lg active:scale-95 flex items-center justify-center" onClick={toggleMenu}>Sign Up</Link>
                                    </div>

                                )
                            }
                            <Link href="/">
                                <li className="cursor-pointer text-xl text-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center">
                                    <IoHome className="text-2xl" />
                                </li>
                            </Link>
                        </div>

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