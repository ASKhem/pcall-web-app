import React, { useState } from 'react';
import Link from 'next/link';
import endpoints from '@/api/endpoints';

export default function TableRow({ row, columns, deleteEntity, entity }) {
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteEntity({ entity: entity, id: row.id });
            window.location.href = `/admin/${entity}`;
        } catch (error) {
            console.error('Error deleting entity:', error);
        } finally {
            setConfirmDelete(false);
        }
    };

    return (
        <div className="grid grid-cols-12 gap-5 h-20" key={row.id}>
            {columns.map((col, index) => {
                return (
                    <div key={index} className={`col-span-${col.span} flex items-center justify-center`}>
                        {col.type === 'image' ? (
                            entity === "users" ? (
                                <img src={`${row[col.field]}`} alt={row[col.altField]} className="w-16 h-16 rounded-full" />
                            ) : (
                                <img src={`${col.basePath}/${row[col.field]}.png`} alt={row[col.altField]} className="w-16 h-16" />
                            )
                        ) : (
                            row[col.field]
                        )}
                    </div>
                );
            })}
            <div className="col-span-2 flex items-center justify-center gap-5">
                {confirmDelete ? (
                    <>
                        <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 active:scale-95" onClick={handleDelete}>Aceptar</button>
                        <button className="bg-gray-600 text-white px-4 py-1 rounded-md hover:bg-gray-700 active:scale-95" onClick={() => setConfirmDelete(false)}>Cancelar</button>
                    </>
                ) : (
                    <>
                        <Link href={`/admin/${entity}/edit/${row.id}`}>
                            <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 active:scale-95">Edit</button>
                        </Link>
                        <button className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 active:scale-95" onClick={() => setConfirmDelete(true)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
}