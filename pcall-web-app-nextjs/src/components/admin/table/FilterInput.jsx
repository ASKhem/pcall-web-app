import React from 'react';

export default function FilterInput({ key, type, placeholder, value, onChange }) {
    return (
        <input
            key={key}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="mx-2 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
    );
}