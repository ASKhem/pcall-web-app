import React from 'react';

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
    return (
        <div className="flex justify-center items-center mt-4 gap-2">
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
                Prev
            </button>
            <span className="text-lg flex items-center justify-center">
                <input
                    type="number"
                    value={currentPage}
                    onChange={(e) => {
                        const page = Number(e.target.value);
                        if (page > 0 && page <= totalPages) setCurrentPage(page);
                    }}
                    className="w-10 text-center mx-2 bg-transparent text-zinc-200"
                />
                <p className="text-zinc-200">/ {totalPages}</p>
            </span>
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}