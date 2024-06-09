import React from 'react';
import { endpoints } from '@/api/endpoints';

const OrderDetails = ({ computerForm, total, phone, address, city, state, zip, country, onSubmit }) => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const { name, email } = user;
    const imageUrl = `${endpoints.images}/components/`;
    const time = new Date().toLocaleString();
    return (
        <div className="w-full flex flex-col items-center justify-start pt-16 min-h-screen">
            <div className="w-11/12 flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order Summary</h1>
                <p className="text-sm text-gray-500">{time}</p>
            </div>
            <div className="w-11/12 mt-10 flex flex-col xl:flex-row justify-center items-stretch xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                        <div className="mt-4 md:mt-6 flex flex-col justify-start items-start w-full">
                            <div className="w-full flex flex-col gap-2 max-h-96 overflow-y-auto">
                                {Object.keys(computerForm).slice(0, -1).map((key) => (
                                    computerForm[key] && (
                                        <div key={key} className="p-2 border w-full flex items-center justify-start gap-2">
                                            <img src={`${imageUrl}${computerForm[key].image}.png`} alt={computerForm[key].brand} className="w-24 h-24 object-cover" />
                                            <p>{key}: {computerForm[key].brand} {computerForm[key].model} - {computerForm[key].price}€</p>
                                        </div>
                                    )
                                ))}
                            </div>
                            <div className="flex lg:flex-row flex-col w-full justify-between gap-5 mt-4">
                                <div className="w-1/2 flex flex-col justify-between border-b border-gray-200 py-2">
                                    <div className="flex flex-col w-full border-b border-gray-200 py-2">
                                        <span className="text-sm flex w-full justify-between"><p>Subtotal:</p><p>{parseFloat(total).toFixed(2)}€</p></span>
                                        <span className="text-sm flex w-full justify-between"><p>Services:</p><p>{(parseFloat(total) * 0.05).toFixed(2)}€</p></span>
                                        <span className="text-sm flex w-full justify-between"><p>Tax:</p><p>{((parseFloat(total) + (parseFloat(total) * 0.05)) * 0.2).toFixed(2)}€</p></span>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <span className="font-semibold">Total:</span>
                                        <span>{(parseFloat(total) + (parseFloat(total) * 0.05) + ((parseFloat(total) + (parseFloat(total) * 0.05)) * 0.2)).toFixed(2)}€</span>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center justify-center">
                                    <button onClick={onSubmit} className="w-full sm:w-56 h-12 border-2 border-gray-800 shadow-md rounded-xl font-bold flex items-center justify-center p-2 active:scale-95 transition-all duration-300 bg-orange-500 text-gray-200 hover:bg-gray-200 hover:text-custom-blue">
                                        Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex flex-col justify-start items-start w-full space-y-4">
                        <div className="flex justify-between border-b border-gray-200 py-2 w-full">
                            <span className="font-semibold">Name:</span>
                            <span>{name}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 py-2 w-full">
                            <span className="font-semibold">Email:</span>
                            <span>{email}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 py-2 w-full">
                            <span className="font-semibold">Phone:</span>
                            <span>{phone}</span>
                        </div>
                        <div className="flex flex-col justify-between border-b border-gray-200 py-2 w-full">
                            <span className="font-semibold">Address:</span>
                            <p className="flex flex-col text-sm">
                                <span>{address} {city} </span>
                                <span>{state} {zip} {country}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;