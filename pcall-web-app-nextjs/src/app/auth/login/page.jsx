"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginUser, fetchUserInfo } from '@/utils/authUtils';

function Login() {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { accessToken, user } = await loginUser(emailOrUsername, password);
            setUserInfo(user);
            await fetchUserInfo(accessToken);
            window.location.href = '/';
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-10/12 flex items-center justify-center text-custom-blue">
                <section className="flex w-[30rem] flex-col gap-12">
                    <div className="text-center lg:text-5xl text-3xl font-bold">Log In</div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            value={emailOrUsername}
                            onChange={(e) => setEmailOrUsername(e.target.value)}
                        />
                    </div>

                    <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="transform rounded-sm bg-custom-blue py-2 text-zinc-200 font-bold duration-300 hover:text-orange-500">LOG IN</button>

                    <a href="#" className="transform text-center font-semibold text-custom-blue duration-300 hover:text-orange-500">FORGOT PASSWORD?</a>

                    <p className="text-center text-lg">
                        No account?
                        <Link href="/auth/register" className="font-medium text-orange-600 underline-offset-4 hover:underline"> Create One</Link>
                    </p>
                </section>
            </form>

            {userInfo && (
                <div className="user-info">
                    <h2>User Information</h2>
                    <p>Username: {userInfo.username}</p>
                    <p>Email: {userInfo.email}</p>
                    {/* Render other user info as needed */}
                </div>
            )}
        </div>
    );
}

export default Login;