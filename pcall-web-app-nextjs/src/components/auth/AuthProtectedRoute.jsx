"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingData from '@/components/effects/LoadingData';

const AuthProtectedRoute = ({ children, requiredRole }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        const storedUser = sessionStorage.getItem('user');
        if (!accessToken || !storedUser) {
            router.push('/auth/login');
            return;
        }

        const user = JSON.parse(storedUser);
        if (requiredRole && user.rol !== requiredRole) {
            router.push('/auth/login');
        } else {
            setUser(user);
        }
    }, [router, requiredRole]);

    if (!user) {
        return <div className="flex items-center justify-center h-[95vh] bg-black">
            <LoadingData />
        </div>;
    }

    return children;
};

export default AuthProtectedRoute;