"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logout from '@/components/user/Logout';

export default function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    console.log(user);
    return (
        <header className="fixed z-20 t-0 flex w-full h-16 bg-custom-blue grid-rows-1 items-center justify-between px-[5vw] text-zinc-200 backdrop-opacity-60 border-b border-zinc-800">
            <div className="h-full flex items-center justify-center gap-16">
                <Link href="/"><img src="/img/brand/pcallLogo.svg" className="h-16 p-1" alt="Logo" /></Link>
                <nav className="flex">
                    <ul className="flex gap-5 px-2 font-bold">
                        <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/admin/home">AdminHome</Link></li>
                        <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/admin/users">Users</Link></li>
                        <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/admin/components">Components</Link></li>
                        <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/admin/orders">Orders</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="h-full flex items-center justify-center gap-3">
                {
                    user && (
                        <div className="flex items-center gap-2">
                            <p className="text-sm">{user.name}</p>
                            <img src={user.profileUrl} alt="User profile" className="w-10 h-10 rounded-full" />
                        </div>
                    )
                }
                <Logout />
            </div>
        </header>
    );
}