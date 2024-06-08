"use client"
import { fetchEntity, updateEntity } from "@/api/api"
import { useEffect, useState } from "react"
import { endpoints } from "@/api/endpoints"

export default function UserPage({ params }) {
    const [user, setUser] = useState({
        id: '',
        username: '',
        email: '',
        password: '',
        profileUrl: '',
        rol: ''
    });
    const { slug } = params;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEntity({ entity: "users", request: "get/" + slug });
                setUser(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [slug]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos actualizados:', user);
        try {
            await updateEntity({ entity: "users", id: user.id, data: user });
            alert('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user');
        }
    }

    const roles = ['ADMIN', 'USER'];

    return (
        <div className="w-11/12 flex flex-col items-center justify-center">
            <div className="w-full bg-zinc-200 p-10 flex items-center justify-center gap-10 h-[73vh]">
                <img src={`${user.profileUrl}`} alt={user.username} className="w-96 h-96 rounded-xl" />
                <form onSubmit={handleSubmit} className="grid grid-cols-2 items-center justify-center gap-5">
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Username:</p>
                        <input type="text" name="username" value={user.username} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Email:</p>
                        <input type="email" name="email" value={user.email} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <button type="submit" className="col-span-2 bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
                </form>
            </div>
        </div>
    )
}