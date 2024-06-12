"use client"
import AuthProtectedRoute from '@/components/auth/AuthProtectedRoute';
export default function UsersLayout({ children }) {
    return (
        <AuthProtectedRoute requiredRole="ROLE_USER">
            <div className="w-full min-h-screen flex items-start justify-center bg-gradient-to-bl from-black via-zinc-950 to-zinc-800">
                {children}
            </div>
        </AuthProtectedRoute>
    )
}
