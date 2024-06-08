import React from 'react';

export default function FilterSelect({ key, options, placeholder, value, onChange }) {
    return (
        <select
            key={key}
            value={value}
            onChange={onChange}
            className="mx-2 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}