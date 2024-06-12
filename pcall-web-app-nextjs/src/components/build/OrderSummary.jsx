"use client"
import React, { useState, useEffect } from 'react';
import { endpoints } from '@/api/endpoints';

function OrderSummary({ computerForm, total, onConfirm, onCancel, phone, setPhone, address, setAddress, city, setCity, state, setState, zip, setZip, country, setCountry }) {
    const [isConfirmEnabled, setIsConfirmEnabled] = useState(false);
    const imageUrl = `${endpoints.images}/components/`;

    useEffect(() => {
        const isFormComplete = phone && address && city && state && zip && country && !isNaN(zip);
        setIsConfirmEnabled(isFormComplete);
    }, [phone, address, city, state, zip, country]);

    return (
        <div className="w-full h-full flex items-center justify-center lg:py-10 py-20">
            <div className="w-11/12 flex flex-col lg:flex-row items-center justify-center gap-4">
                <div className="lg:w-8/12 w-full flex flex-col items-center justify-center gap-4">
                    <h2 className="text-2xl font-bold">Order Summary</h2>
                    <div className="w-full grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-2">
                        {Object.keys(computerForm).slice(0, -1).map((key) => (
                            computerForm[key] && (
                                <div key={key} className="p-2 border w-full flex items-center justify-start gap-2">
                                    <img src={`${imageUrl}${computerForm[key].image}.png`} alt={computerForm[key].brand} className="w-24 h-24 object-cover" />
                                    <p>{key}: {computerForm[key].brand} {computerForm[key].model} - {computerForm[key].price}€</p>
                                </div>
                            )
                        ))}
                    </div>
                    <div className="p-2 w-full flex items-center justify-center text-2xl border-b border-zinc-800">
                        <p>Total: {total}€</p>
                    </div>
                </div>
                <div className="w-4/12 min-h-96 h-fit flex flex-col items-center justify-center lg:gap-16 gap-5">
                    <div className="w-full flex flex-col items-center justify-start gap-5">
                        <h2 className="text-2xl font-bold">Order Details</h2>
                        <div className="w-full flex flex-col items-center justify-center gap-5">
                            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-2 border rounded" />
                            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="p-2 border rounded" />
                            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="p-2 border rounded" />
                            <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="p-2 border rounded" />
                            <input type="text" placeholder="Zip" value={zip} onChange={(e) => setZip(e.target.value)} className="p-2 border rounded" />
                            <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} className="p-2 border rounded" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                        <button
                            className={`w-40 h-12 border-2 border-zinc-800 shadow-md text-lg rounded-xl font-bold flex items-center justify-center p-2 active:scale-95 transition-all duration-300 ${isConfirmEnabled ? 'bg-orange-500 text-zinc-200 hover:bg-zinc-200 hover:text-custom-blue' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                            onClick={onConfirm}
                            disabled={!isConfirmEnabled}
                        >
                            Confirm
                        </button>
                        <button
                            className="w-40   h-12 border-2 border-zinc-800 shadow-md text-lg rounded-xl bg-red-500 font-bold text-zinc-200 flex items-center justify-center p-2 active:scale-95 transition-all duration-300 hover:bg-zinc-200 hover:text-custom-blue"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;