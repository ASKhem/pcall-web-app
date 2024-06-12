"use client"
import { fetchEntity } from "@/api/api"
import { useEffect, useState } from "react"
import { endpoints } from "@/api/endpoints"
import { updateEntity } from "@/api/api"
import { useRouter } from "next/navigation"

export default function Articlepage({ params }) {
    console.log(endpoints)
    const router = useRouter()
    const [component, setComponent] = useState({
        id: '',
        brand: '',
        category: '',
        model: '',
        details: '',
        state: '',
        price: '',
        releaseYear: '',
        stock: '',
        image: ''
    })
    const { slug } = params

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEntity({ entity: "components", request: "get/" + slug })
                setComponent(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [slug])

    const handleChange = (e) => {
        const { name, value } = e.target
        setComponent(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Datos actualizados:', component)
        updateEntity({ entity: "components", id: component.id, data: component })
        router.push('/admin/components')
    }

    const brands = ['Asus', 'MSI', 'Gigabyte', 'AMD', 'Intel', 'Samsung', 'WesternDigital', 'Kingston', 'Seagate', 'Zotac', 'Corsair', 'NZXT', 'CoolerMaster', 'Creative', 'BeQuiet', 'Seasonic', 'Noctua', 'DeepCool']
    const categories = ['CPU', 'GPU', 'RAM', 'Motherboard', 'Hard_Drive', 'NVMe', 'Power_Supply', 'Case', 'Cooling', 'Network_Card', 'Sound_Card']
    const states = ['NEW', 'SECONDHAND']

    return (
        <div className="w-11/12 flex flex-col items-center justify-center">
            <div className="w-full bg-zinc-200 p-10  flex items-center justify-center gap-10  h-[73vh]">
                <img src={`${endpoints.images}/components/${component.image}.png`} alt={component.brand} className="w-96 h-96 rounded-xl" />
                <form onSubmit={handleSubmit} className="grid grid-cols-2 items-center justify-center gap-5">
                    <label className="items-center justify-start gap-2 hidden">
                        <p className="w-20 text-left">Image:</p>
                        <input type="text" name="image" value={component.image} onChange={handleChange} />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Brand:</p>
                        <select name="brand" value={component.brand} onChange={handleChange} className="py-2 w-48 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                            {brands.map((brand) => (
                                <option value={brand} key={brand}>{brand}</option>
                            ))}
                        </select>
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Category:</p>
                        <select name="category" value={component.category} onChange={handleChange} className="py-2 w-48 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                            {categories.map((category) => (
                                <option value={category} key={category}>{category}</option>
                            ))}
                        </select>
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Model:</p>
                        <input type="text" name="model" value={component.model} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Details:</p>
                        <input type="text" name="details" value={component.details} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">State:</p>
                        <select name="state" value={component.state} onChange={handleChange} className="py-2 w-48 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                            {states.map((state) => (
                                <option value={state} key={state}>{state}</option>
                            ))}
                        </select>
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Price:</p>
                        <input type="number" name="price" value={component.price} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Release Year:</p>
                        <input type="number" name="releaseYear" value={component.releaseYear} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Stock:</p>
                        <input type="number" name="stock" value={component.stock} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <button type="submit" className="col-span-2 bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
                </form>
            </div>
        </div>
    )
}