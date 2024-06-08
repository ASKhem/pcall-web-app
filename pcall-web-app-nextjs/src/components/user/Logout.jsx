"use client";
import { IoLogOutSharp } from "react-icons/io5";

export default function Logout() {

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('accessToken');
        window.location.href = '/';
    };

    return (
        <button onClick={handleLogout} className=" text-3xl text-white hover:text-red-500">
            <IoLogOutSharp />
        </button>
    );
}

