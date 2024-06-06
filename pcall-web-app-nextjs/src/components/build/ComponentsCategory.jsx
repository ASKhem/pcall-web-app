"use client"
import BuildPcCard from "./BuildPcCard";
import React, { useState, useEffect } from 'react';

async function loadComponentsData(category) {
    try {
        const res = await fetch(`http://localhost:9090/component/list/${category}`);

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
    const itemsPerPage = 5;

    useEffect(() => {
        loadComponentsData(category).then(setData);
    }, [category]);

    function handleComponent(component) {
        addComponent(component);
    }

    function handleNextPage() {
        if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    function handlePrevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    if (data === null) {
        return (
            <div className="flex items-center justify-center gap-5 text-zinc-200">
                <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-zinc-700" />
                <p className="text-lg">Loading data ...</p>
            </div>
        )
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center w-full mb-4 gap-5 ">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-1 bg-gray-300 rounded disabled:opacity-50">
                    Prev
                </button>
                <span className="text-lg text-zinc-200"> {currentPage}/{Math.ceil(data.length / itemsPerPage)}</span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} className="px-4 py-1 bg-gray-300 rounded disabled:opacity-50">
                    Next
                </button>
            </div>
            <div className="lg:w-11/12 w-full justify-center items-center grid lg:grid-cols-5 grid-cols-1 grid-rows-auto gap-5">
                {selectedData.map((component) => {
                    return (
                        <div key={component.id} className="flex justify-center items-center" onClick={() => handleComponent(component)}>
                            <BuildPcCard data={component} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ComponentsCategory