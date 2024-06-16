"use client"
import { useState, useEffect } from "react"
import { getOrdersByEmail } from "@/api/api"
import CustomerOrderDetails from "@/components/build/CustomerOrderDetails"

export default function OrderUser({ params }) {
    const { slug } = params
    const [orders, setOrders] = useState([])
    const user = JSON.parse(sessionStorage.getItem('user'));
    const { email } = user;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOrdersByEmail({ email: email })
                setOrders(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [email])

    return (
        <div className="flex flex-col items-center justify-center py-10 gap-10">
            <h1 className="text-2xl font-bold text-zinc-200">{slug == "active" ? "Active Orders" : "Orders history"}</h1>
            <div className="w-full flex flex-col gap-10">
                {orders.map((order) => (
                    <CustomerOrderDetails key={order.id} order={order} type={slug} />
                ))}
            </div>
        </div>
    )
}