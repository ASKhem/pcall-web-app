"use client"
import { useState } from 'react';
import Link from 'next/link';
import { loginUser, fetchUserInfo } from '@/utils/authUtils';
import { useRouter } from 'next/navigation';

function Login() {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { accessToken, user } = await loginUser(username, password);
            await fetchUserInfo(accessToken);
            console.log(user);
            if (user.rol === 'ROLE_ADMIN') {
                router.push('/admin/home');
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            } else {
                router.back();
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            }
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
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
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
        </div>
    );
}

export default Login;