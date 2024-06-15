"use client"
import React, { useState, useEffect } from 'react';
import BuildPcCard from "./BuildPcCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

async function loadComponentsData(category) {
    try {
        const res = await fetch(`http://localhost:9090/admin/components/list/${category}`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('An error occurred while getting the data:', error);
        return null;
    }
}

function ComponentsCategory({ category, addComponent }) {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ brand: '', state: '' });
    const itemsPerPage = 8;

    useEffect(() => {
        loadComponentsData(category).then(setData);
    }, [category]);

    function handleComponent(component) {
        addComponent(component);
    }

    function handleNextPage() {
        if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    function handlePrevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handleFilterChange(e) {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
        setCurrentPage(1);
    }

    if (data === null) {
        return (
            <div className="flex items-center justify-center gap-5 text-zinc-200">
                <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-zinc-700" />
                <p className="text-lg">Loading data ...</p>
            </div>
        )
    }

    const filteredData = data.filter(component => {
        return (
            (filters.brand === '' || component.brand === filters.brand) &&
            (filters.state === '' || component.state === filters.state)
        );
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
    const brands = data ? [...new Set(data.map(component => component.brand))] : [];
    const states = data ? [...new Set(data.map(component => component.state))] : [];

    const restartPage = () => {
        setCurrentPage(1);
        setFilters({ brand: '', state: '' });
    }

    return (
        <div className="flex flex-col items-center gap-10 min-h-screen" id="components">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-2">
                <div className="lg:hidden flex justify-center items-center w-full mb-4 gap-5">
                    <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-1 bg-gray-300 rounded disabled:opacity-50">
                        Prev
                    </button>
                    <span className="text-lg text-zinc-200"> {currentPage}/{Math.ceil(filteredData.length / itemsPerPage)}</span>
                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)} className="px-4 py-1 bg-gray-300 rounded disabled:opacity-50">
                        Next
                    </button>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-center w-full mb-4 gap-5">
                    <select name="brand" value={filters.brand} onChange={handleFilterChange} className="px-4 py-2 bg-gray-300 rounded w-48">
                        {brands.map((brand, index) => {
                            return <option key={index} value={brand}>{brand}</option>
                        })}
                    </select>
                    <select name="state" value={filters.state} onChange={handleFilterChange} className="px-4 py-2 bg-gray-300 rounded w-48">
                        {states.map((state, index) => {
                            return <option key={index} value={state}>{state}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="lg:flex hidden px-4 py-4 bg-gray-300 rounded disabled:opacity-50">
                    <IoIosArrowBack />
                </button>
                <div className="lg:w-10/12 w-full justify-center items-center grid lg:grid-cols-4 grid-cols-1 grid-rows-auto lg:gap-10 gap-5 " onClick={restartPage}>
                    {selectedData.map((component) => {
                        return (
                            <div key={component.id} className="flex justify-center items-center" onClick={() => handleComponent(component)}>
                                <BuildPcCard data={component} />
                            </div>
                        );
                    })}
                </div>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)} className="lg:flex hidden px-4 py-4 bg-gray-300 rounded disabled:opacity-50">
                    <IoIosArrowForward />
                </button>
            </div>

        </div>
    )
}

export default ComponentsCategory;