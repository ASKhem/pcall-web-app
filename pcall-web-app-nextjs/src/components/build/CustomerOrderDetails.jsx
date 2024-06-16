import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";
import { IoLeafSharp } from "react-icons/io5";

const CustomerOrderDetails = ({ order, type }) => {
    const { user, pc, price, deliveryDate, phone, address, city, state, zip, country, delivered } = order;

    const [showFullDetails, setShowFullDetails] = useState(false);
    const [usedSecondHandComponents, setUsedSecondHandComponents] = useState(false);
    console.log(pc)
    useEffect(() => {
        setUsedSecondHandComponents(pc.some(component => component.state == "SECONDHAND"));
    }, [pc]);

    const handleToggleDetails = () => {
        setShowFullDetails(!showFullDetails);
    };

    return (
        <div className={`order-details bg-white p-4 rounded-lg shadow-md max-w-md mx-auto ${type == 'active' && delivered == true ? 'hidden' : ''} ${usedSecondHandComponents ? 'border-2 border-green-500' : ''}`}>
            <div className="border-b pb-2 mb-2">
                <h2 className="text-xl font-bold">Order ID: {order.id}</h2>
                <h3 className="text-lg">Customer: {user.username} ({user.email})</h3>
            </div>
            <div className="border-b pb-2 mb-2">
                <p className="text-sm"><strong>Delivery Date:</strong> {deliveryDate}</p>
                <p className="text-sm flex items-center gap-3"><FaPhone className="text-sm ml-2" /> {phone}</p>
                <p className="text-sm"><strong>Address:</strong> {address}, {city}, {state}, {zip}, {country}</p>
                <p className="text-sm flex items-center">
                    <strong>Delivered:</strong>
                    {delivered ? (
                        <FaCheckCircle className="text-green-500 ml-2" />
                    ) : (
                        <FaTimesCircle className="text-red-500 ml-2" />
                    )}
                </p>
            </div>
            {showFullDetails && (
                <>
                    <div className="border-b pb-2 mb-2">
                        <h4 className="text-lg font-semibold">PC Components:</h4>
                        <ul className="list-disc pl-5">
                            {pc.map(component => (
                                <li key={component.id} className="text-sm">
                                    {component.category}: {component.brand} {component.model} - {component.price}€
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-2">
                        <p className="text-lg font-bold">Total Price: {price}€</p>
                    </div>
                </>
            )}
            <button
                onClick={handleToggleDetails}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                {showFullDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {usedSecondHandComponents && <div className="flex items-center justify-center gap-2 mt-5"><IoLeafSharp className="text-green-500" /><p className="text-sm">Thanks for helping us to keep the planet green!</p></div>}
        </div>
    );
}

export default CustomerOrderDetails;