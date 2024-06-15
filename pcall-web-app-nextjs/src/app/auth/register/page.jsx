"use client"
import { useState, useCallback } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { loginUser, fetchUserInfo } from '@/utils/authUtils';

function Register() {
    const [formData, setFormData] = useState({ email: '', userName: '', password: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:9090/api/auth/signup', formData);
            handleAutoLogin();
        } catch (error) {
            console.error('Error registering', error);
            setError(error.response?.data?.message || 'Registration failed');
        }
    };

    const handleAutoLogin = useCallback(async () => {
        try {
            const { accessToken } = await loginUser(formData.userName, formData.password);
            await fetchUserInfo(accessToken);
            window.location.href = '/';
        } catch (error) {
            setError(error.message);
        }
    }, [formData.userName, formData.password]);

    return (
        <form onSubmit={handleSubmit} className="lg:w-10/12 w-full flex items-center justify-center text-custom-blue">
            <section className="flex lg:w-[30rem] w-[300px] flex-col gap-12 justify-center">
                <div className="text-center text-5xl font-bold">Sign Up</div>
                {error && <p className="text-red-500">{error}</p>}
                {['email', 'userName', 'password'].map((field) => (
                    <div key={field} className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                        <input
                            type={field === 'password' ? 'password' : 'text'}
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
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