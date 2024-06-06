"use client";

export default function Logout() {

    const handleLogout = () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('accessToken');
        window.location.href = '/';
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600">Logout</button>
    );
}

