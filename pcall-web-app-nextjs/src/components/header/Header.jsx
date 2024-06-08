"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";
import Logout from '@/components/user/Logout';
import HamburguerMenu from '@/components/header/HamburguerMenu';
import AdminHeader from '@/components/header/AdminHeader';

export default function Header() {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                console.log(parsedUser);
                if (parsedUser.rol === "ROLE_ADMIN") {
                    setIsAdmin(true);
                }
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
    }, []);

    const categories = ["build", "recycle", "gallery", "about"];

    return (
        <>
            {isAdmin ? <AdminHeader /> :
                <header className="fixed z-20 t-0 flex w-full h-16 bg-custom-blue grid-rows-1 items-center justify-between px-[5vw] text-zinc-200 backdrop-opacity-60 border-b border-zinc-800">
                    <div className="h-full flex items-center justify-center gap-16">
                        <Link href="/"><img src="/img/brand/pcallLogo.svg" className="h-16 p-1" alt="Logo" /></Link>
                        <nav className="lg:flex hidden">
                            <ul className="flex gap-5 px-2 font-bold">
                                <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/build">Build Now</Link></li>
                                <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/">Recycle</Link></li>
                                <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/">Gallery</Link></li>
                                <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/">About</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="h-full lg:flex hidden items-center justify-center gap-3">
                        <Link href="/"><IoHome className="text-[26px] transition-colors duration-200 hover:text-orange-500 cursor-pointer" /></Link>
                        <FaRegQuestionCircle className="text-2xl transition-colors duration-200 hover:text-orange-500 cursor-pointer" />
                        <div>
                            {user && <img src={user.profileUrl} alt="User profile" className="w-10 h-10 rounded-full" />}
                            {
                                !user && (
                                    <div className="flex gap-5">
                                        <Link href="/auth/login" className="text-black font-bold transition-colors duration-200 bg-zinc-200 py-1 px-3 rounded-lg hover:bg-zinc-100 active:scale-95">Log In</Link>
                                        <Link href="/auth/register" className="text-zinc-200 font-bold transition-colors duration-200 hover:text-zinc-200 hover:bg-orange-600  bg-orange-700 py-1 px-3 rounded-lg active:scale-95">Sign Up</Link>
                                    </div>
                                )
                            }
                            {
                                user && (
                                    <Logout />
                                )
                            }
                        </div>
                    </div>
                    <HamburguerMenu categories={categories} />
                </header>
            }
        </>
    );
}