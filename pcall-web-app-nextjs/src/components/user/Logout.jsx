"use client";

export default function Logout() {

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('accessToken');
        window.location.href = '/';
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-sm">
            Logout
        </button>
    );
}

