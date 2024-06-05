"use client";

export default function Logout() {
    
    const handleLogout = () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('accessToken');
        window.location.href = '/';
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

