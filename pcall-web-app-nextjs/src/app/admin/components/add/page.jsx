"use client"
import React, { useState } from 'react';
import { createEntity } from '@/api/api';

const brands = [
    'Asus', 'MSI', 'Gigabyte', 'AMD', 'Intel', 'Samsung', 'WesternDigital',
    'Kingston', 'Seagate', 'Zotac', 'Corsair', 'NZXT', 'CoolerMaster',
    'Creative', 'BeQuiet', 'Seasonic', 'Noctua', 'DeepCool'
];

const categories = [
    'CPU', 'GPU', 'RAM', 'Motherboard', 'Hard_Drive', 'NVMe', 'Power_Supply',
    'Case', 'Cooling', 'Network_Card', 'Sound_Card'
];

const states = ['NEW', 'SECONDHAND'];

export default function CreateComponent() {
    const [formData, setFormData] = useState({
        category: '',
        brand: '',
        model: '',
        details: '',
        state: '',
        price: '',
        releaseYear: '',
        stock: '',
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createEntity({ entity: 'components', data: formData });
            alert('Component created successfully');

        } catch (error) {
            console.error('Error creating component:', error.response || error.message || error);
            alert('Failed to create component');
        }
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-start pt-20">
            <div className="w-11/12 bg-zinc-200 p-10 flex items-center justify-center gap-10 h-[73vh]">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 items-center justify-center gap-5">
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Category:</p>
                        <select name="category" value={formData.category} onChange={handleChange} className="py-2 w-48 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Brand:</p>
                        <select name="brand" value={formData.brand} onChange={handleChange} className="py-2 w-48 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <option value="">Select Brand</option>
                            {brands.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Model:</p>
                        <input type="text" name="model" value={formData.model} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Details:</p>
                        <input type="text" name="details" value={formData.details} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">State:</p>
                        <select name="state" value={formData.state} onChange={handleChange} className="py-2 w-48 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Price:</p>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Release Year:</p>
                        <input type="number" name="releaseYear" value={formData.releaseYear} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <label className="flex items-center justify-start gap-2">
                        <p className="w-20 text-left">Stock:</p>
                        <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="p-1 rounded-md border-2 border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </label>
                    <button type="submit" className="col-span-2 bg-blue-500 text-white px-4 py-2 rounded-md">Add Component</button>
                </form>
            </div>
        </div>
    )
}