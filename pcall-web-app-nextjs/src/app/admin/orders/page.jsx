"use client"
import { fetchEntity } from "@/api/api"
import { useState, useEffect } from "react"
import FilterInput from "@/components/admin/table/FilterInput"
import Pagination from "@/components/admin/table/Pagination"
import TableHeader from "@/components/admin/table/TableHeader"
import TableRow from "@/components/admin/table/TableRow"
import { deleteEntity, setDelivered } from "@/api/api"

export default function OrdersList({ params }) {
    const { slug } = params
    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7
    const [filters, setFilters] = useState({
        id: '', user: '', price: '', deliveryDate: '', phone: '', address: '', city: '', state: '', zip: '', country: '', delivered: ''
    })

    const handleSetDelivered = async (id) => {
        try {
            await setDelivered({ id: id });
            setTableData(await fetchEntity({ entity: "orders", request: "list" }));
        } catch (error) {
            console.error('Error setting delivered:', error);
        }
    };


    const headers = [
        { label: 'ID', span: 1 },
        { label: 'User', span: 1 },
        { label: 'Price', span: 1 },
        { label: 'Delivery Date', span: 1 },
        { label: 'Phone', span: 1 },
        { label: 'Address', span: 2 },
        { label: 'Country', span: 1 },
        { label: 'Delivered', span: 1 },
        { label: 'Actions', span: 2 },
    ];

    const columns = [
        { field: 'id', span: 1 },
        { field: 'user', span: 1, type: 'text' },
        { field: 'price', span: 1, type: 'text' },
        { field: 'deliveryDate', span: 1, type: 'text' },
        { field: 'phone', span: 1, type: 'text' },
        { field: 'address', span: 2, type: 'text' },
        { field: 'country', span: 1, type: 'text' },
        { field: 'delivered', span: 1, type: 'text' }
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEntity({ entity: "orders", request: "list" })
                setTableData(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const applyFilters = (data) => {
        return data.filter(item => {
            return Object.keys(filters).every(key => {
                if (!filters[key]) return true;
                if (key === 'price') {
                    return item[key] === parseFloat(filters[key]);
                }
                return item[key].toLowerCase().includes(filters[key].toLowerCase());
            });
        });
    };

    const filteredData = applyFilters(tableData)
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    const totalPages = Math.ceil(filteredData.length / itemsPerPage)

    return (
        <div className="w-11/12 flex flex-col items-center justify-start min-h-screen h-full py-10">
            <div className="w-full flex mb-4 justify-end relative z-10">
                <details className="w-1/12">
                    <summary className="cursor-pointer p-2 border rounded bg-gray-100 text-gray-700">Filters</summary>
                    <div className="w-2/12 grid grid-cols-1 justify-center mt-2 gap-4 p-4 bg-white border rounded shadow-md absolute right-4 top-16">
                        {Object.keys(filters).map(key => (
                            <FilterInput
                                key={key}
                                type={key === 'price' ? 'number' : 'text'}
                                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                value={filters[key]}
                                onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                            />
                        ))}
                    </div>
                </details>
            </div>
            <div className="min-w-[1000px] flex flex-col items-center justify-start min-h-screen h-full">
                <div className="divide-gray-200 w-full">
                    <TableHeader headers={headers} />
                    <div className="bg-white divide-y divide-gray-200 w-full">
                        {filteredData.length > 0 ? (
                            currentItems.map(row => (
                                <TableRow key={row.id} row={row} columns={columns} deleteEntity={deleteEntity} refreshTable={fetchEntity} entity={"orders"} setDelivered={handleSetDelivered} />
                            ))
                        ) : (
                            <div className="w-full text-center py-4">No data available</div>
                        )}
                    </div>
                </div>
                {filteredData.length > 0 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                )}
            </div>
        </div>
    )
}