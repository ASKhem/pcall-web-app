"use client"
import BuildPcCard from "./BuildPcCard";
import React, { useState } from 'react';
import { useEffect } from 'react';

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

    useEffect(() => {
        loadComponentsData(category).then(setData);
    }, [category]);

    function handleComponent(component) {
        addComponent(component);
    }

    if (data === null) {
        return (
            <div className="flex items-center justify-center gap-5 text-zinc-200">
                <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-zinc-700" />
                <p className="text-lg">Loading data ...</p>
            </div>
        )

    }

    return (
        <div className="lg:w-11/12 w-full justify-center items-center grid lg:grid-cols-4 grid-cols-1 grid-rows-auto gap-5">
            {data.map((component) => {
                return (
                    <div key={component.id} className="flex justify-center items-center" onClick={() => handleComponent(component)}>
                        <BuildPcCard data={component} />
                    </div>
                );
            })}
        </div>
    )
}

export default ComponentsCategory;