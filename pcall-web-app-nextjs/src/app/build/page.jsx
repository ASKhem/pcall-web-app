"use client"
import { FaSquare } from "react-icons/fa6";
import GalleryComponent from "@/components/build/GalleryComponent";
import MusicPlayer from "@/components/build/MusicPlayer";
import ComponentsCategory from "@/components/build/ComponentsCategory"
import { useState } from "react";
import OrderSummary from "@/components/build/OrderSummary";
import OrderDetails from "@/components/build/OrderDetails";


function findFormComponentByCategory(category, computerForm) {
    for (const key in computerForm) {
        if (key === category) {
            return computerForm[key];
        }
    }
    return null;
}

function totalPrice(computerForm) {
    let total = 0;
    for (const key in computerForm) {
        if (computerForm[key] && computerForm[key].price) {
            total += computerForm[key].price;
        }
    }
    return total.toFixed(2);
}

function progressBar(computerForm) {
    let total = 0;
    for (const key in computerForm) {
        if (computerForm[key]) {
            total += 1;
        }
    }
    return total;

}

function BuildNewPcPage() {
    const [category, setCategory] = useState("Case");
    const [computerForm, setComputerForm] = useState({
        "Case": null,
        "Motherboard": null,
        "CPU": null,
        "GPU": null,
        "RAM": null,
        "NVMe": null,
        "Hard_Drive": null,
        "CPUCooling": null,
        "Power_Supply": null,
        "Cooling_Fan": null,
        "Network_Card": null,
        "Sound_Card": null,
        "Total": 0
    });
    const [showDetailsForm, setShowDetailsForm] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [showFullOrder, setShowFullOrder] = useState(false);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

    let total = totalPrice(computerForm);
    let component = findFormComponentByCategory(category, computerForm);

    function handleCategory(newCategory) {
        setCategory(newCategory);
    }

    function handleComponent(component) {
        setComputerForm({
            ...computerForm,
            [category]: component
        });
    }

    const handleSubmit = async () => {
        const newOrderDto = {
            user: user, // Assuming user is fetched from context or state
            componentsId: Object.values(computerForm).map(component => component.id),
            price: total,
            deliveryDate: new Date().toISOString().split('T')[0],
            phone,
            address,
            city,
            state,
            zip,
            country
        };
        try {
            const response = await axios.post('http://localhost:9090/api/orders/add', newOrderDto, {
                headers: {
                    'Authorization': `Bearer ${token}` // Assuming token is fetched from context or state
                }
            });
            console.log('Order created successfully', response.data);
        } catch (error) {
            console.error('Error creating order', error);
        }
    };

    const selectedComponentsCount = Object.values(computerForm).filter(component => component !== null).length - 1;
    const allComponentsSelected = selectedComponentsCount === 12;


    return (
        <div className="w-full justify-center items-center flex flex-col gap-4 bg-gradient-to-bl from-black via-zinc-950 to-zinc-800">
            {!(showSummary || showDetailsForm || showFullOrder) && (
                <>
                    <div className="relative w-full min-h-screen p-4 flex flex-col items-center justify-center text-zinc-200">
                        <img src="/img/backgrounds/build-background.png" alt="Imagen fondo build" className=" w-full h-full object-cover absolute" />
                        <div className="lg:w-11/12 w-full flex flex-col items-center justify-left text-xl  gap-2  z-10">
                            <div className="flex w-full h-fit pb-2 ">
                                <div className="flex w-full  items-center">
                                    <FaSquare /><h1 className="text-xl  text-center font-bold">Build your PC</h1>
                                </div>
                            </div>
                            <div className="w-full flex items-start">
                                <MusicPlayer />
                            </div>
                            <div className="w-full flex flex-col items-center justify-center gap-1">
                                <GalleryComponent selectCategory={handleCategory} component={component} pcForm={computerForm} />
                                <div className="w-full flex flex-col sm:flex-row items-center justify-start p-2 gap-2 sm:gap-5">
                                    <div className="w-full sm:w-[45%] h-full hidden sm:flex items-center justify-center">
                                    </div>
                                    <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-5">
                                        <span className="w-full sm:w-80 h-12 text-lg sm:text-xl font-bold flex items-center justify-center p-2 border-b-2 border-zinc-300">
                                            {total}€
                                        </span>
                                        <button
                                            className={`w-full sm:w-56 h-12 border-2 border-zinc-800 shadow-md rounded-xl font-bold flex items-center justify-center p-2 active:scale-95 transition-all duration-300 ${allComponentsSelected ? 'bg-orange-500 text-zinc-200 hover:bg-zinc-200 hover:text-custom-blue text-xl' : 'bg-gray-500 text-gray-300 cursor-not-allowed text-sm '}`}
                                            onClick={() => setShowSummary(true)}
                                            disabled={!allComponentsSelected}
                                        >
                                            {allComponentsSelected ? 'Build' : `${selectedComponentsCount}/12 components selected`}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-fit flex items-center justify-center py-32">
                        <ComponentsCategory category={category} addComponent={handleComponent} />
                    </div>
                </>
            )}
            {(showSummary) && !showFullOrder && (
                <div className="absolute flex flex-col items-center justify-center gap-4 z-10 bg-zinc-200 top-0 left-0 w-full min-h-screen">
                    {showSummary && !showDetailsForm && (
                        <OrderSummary
                            computerForm={computerForm}
                            total={total}
                            phone={phone}
                            setPhone={setPhone}
                            address={address}
                            setAddress={setAddress}
                            city={city}
                            setCity={setCity}
                            state={state}
                            setState={setState}
                            zip={zip}
                            setZip={setZip}
                            country={country}
                            setCountry={setCountry}
                            onConfirm={() => {
                                setShowFullOrder(true);
                                setShowSummary(false);
                            }}
                            onCancel={() => setShowSummary(false)}
                        />
                    )}
                </div>
            )}
            {showFullOrder && (
                <div className="absolute flex flex-col items-center justify-center gap-4 z-10 bg-zinc-200 top-0 left-0 w-full min-h-screen">
                    <OrderDetails
                        computerForm={computerForm}
                        total={total}
                        phone={phone}
                        address={address}
                        city={city}
                        state={state}
                        zip={zip}
                        country={country}
                        onSubmit={handleSubmit}
                    />
                </div>
            )}
        </div>
    );
}

export default BuildNewPcPage;