"use client"
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { loginUser, fetchUserInfo } from '@/utils/authUtils';

function Register() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9090/api/auth/signup', {
                email,
                userName,
                password,
            });
            console.log('Registration successful', response.data);
            handleAutoLogin(e);
        } catch (error) {
            console.error('Error registering', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                setError(error.response.data.message || 'Registration failed');
            } else {
                setError('Registration failed');
            }
        }
    };

    const handleAutoLogin = async (e) => {
        e.preventDefault();
        try {
            const { accessToken, user } = await loginUser(userName, password);
            await fetchUserInfo(accessToken);
            window.location.href = '/';
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-10/12 flex items-center justify-center text-custom-blue">
            <section className="flex w-[30rem] flex-col gap-12">
                <div className="text-center text-5xl font-bold">Sign Up</div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
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
                <button type="submit" className="transform rounded-sm bg-custom-blue py-2 text-zinc-200 font-bold duration-300 hover:text-orange-500">SIGN UP</button>
                <a href="#" className="transform text-center font-semibold text-custom-blue duration-300 hover:text-orange-600">FORGOT PASSWORD?</a>
                <p className="text-center text-lg">
                    Already have an account?
                    <Link href="/auth/login" className="font-medium text-orange-600 underline-offset-4 hover:underline"> Log In</Link>
                </p>
            </section>
        </form>
    );
}

export default Register;