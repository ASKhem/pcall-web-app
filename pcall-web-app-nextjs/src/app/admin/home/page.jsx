import AdminPanel from "@/components/admin/AdminPanel";
import { FaSquare } from "react-icons/fa";

export default function AdminPage() {
    return (
        <div className="w-11/12 py-5 gap-10 flex flex-col ">
            <div className="text-zinc-200 flex flex-col items-center justify-center w-full gap-5 border-b border-b-zinc-200 font-bold pb-5">
                <div className="flex items-center w-full gap-5 text-5xl ">
                    <FaSquare />
                    <h2 className="text-3xl ">Admin Panel</h2>
                </div>
            </div>
            <AdminPanel texts={["Users", "Orders", "Components", "Money"]} img="/img/admin/adminPanel.png" />
        </div>
    )
}