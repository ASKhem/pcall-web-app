import React from 'react';

export default function TableHeader({ headers }) {
    return (
        <div className="bg-gray-50 grid grid-cols-12 gap-5 items-center justify-center">
            {headers.map((header, index) => (
                <div key={index} className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase col-span-${header.span} items-center justify-center`}>
                    <p className="text-center">{header.label}</p>
                </div>
            ))}
        </div>
    );
}