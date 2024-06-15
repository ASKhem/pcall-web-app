import { useState } from 'react';
import Link from 'next/link';
import { deleteUser } from '@/api/api';
import Logout from '@/components/user/Logout';

export default function UserMenu({ user }) {
    const [showMenu, setShowMenu] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deleteInput, setDeleteInput] = useState("");

    const handleDeleteUser = async () => {
        if (deleteInput === "delete") {
            await deleteUser();
            setConfirmDelete(false);
            setDeleteInput("");
            sessionStorage.removeItem("user");
            window.location.href = "/";
        }
    };

    return (
        <div className="relative">
            <img
                src={user.profileUrl}
                alt="User profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
                <div className="absolute right-0 p-2 mt-2 w-48 bg-white rounded-md shadow-lg z-50 flex flex-col gap-2">
                    <Link href="/user/order/list" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Order history</Link>
                    <button onClick={() => setConfirmDelete(true)} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Delete Account</button>
                    {confirmDelete && (
                        <div className="flex flex-col gap-2 mt-2">
                            <input
                                type="text"
                                placeholder="Type 'delete'"
                                value={deleteInput}
                                onChange={(e) => setDeleteInput(e.target.value)}
                                className="px-4 py-2 border rounded-md"
                            />
                            <div className="flex items-center justify-center gap-2">
                                <button onClick={handleDeleteUser} className="block w-full text-left px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">Confirm</button>
                                <button onClick={() => setConfirmDelete(false)} className="block w-full text-left px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md">Cancel</button>
                            </div>
                        </div>
                    )}
                    <div className="flex items-center justify-center">
                        <Logout className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 ml-4" />
                    </div>
                </div>
            )}
        </div>
    );
}