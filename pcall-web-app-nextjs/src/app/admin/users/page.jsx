"use client"
import { fetchEntity, deleteEntity } from "@/api/api"
import { useState, useEffect } from "react"
import { endpoints } from "@/api/endpoints"
import FilterInput from "@/components/admin/table/FilterInput"
import FilterSelect from "@/components/admin/table/FilterSelect"
import Pagination from "@/components/admin/table/Pagination"
import TableHeader from "@/components/admin/table/TableHeader"
import TableRow from "@/components/admin/table/TableRow"
import Link from "next/link"

export default function UsersList() {
    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7
    const [filters, setFilters] = useState({
        username: '', email: '', rol: ''
    })

    const headers = [
        { label: 'ID', span: 1 },
        { label: 'Profile', span: 1 },
        { label: 'Username', span: 2 },
        { label: 'Email', span: 2 },
        { label: 'Role', span: 1 },
        { label: 'Actions', span: 2 },
    ];

    const columns = [
        { field: 'id', span: 1 },
        { field: 'profileUrl', span: 1, type: 'image', basePath: `${endpoints.images}/users`, altField: 'username' },
        { field: 'username', span: 2, type: 'text' },
        { field: 'email', span: 2, type: 'text' },
        { field: 'rol', span: 1, type: 'text' }
    ]

    const roles = ['ADMIN', 'USER']

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEntity({ entity: "users", request: "list" })
                console.log(data)
                setTableData(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const filterOptions = {
        rol: roles
    };

    const applyFilters = (data) => {
        return data.filter(item => {
            return Object.keys(filters).every(key => {
                if (!filters[key]) return true;
                return item[key].toLowerCase().includes(filters[key].toLowerCase());
            });
        });
    };

    const filteredData = applyFilters(tableData)
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    const totalPages = Math.ceil(filteredData.length / itemsPerPage)

    return (
        <div className="w-11/12 flex flex-col items-center justify-start min-h-screen h-full py-10">
            <div className="w-full flex mb-4 justify-between relative z-10">
                <div className="w-1/6">
                    <Link href="/admin/users/add">
                        <button className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4 rounded">
                            Add User
                        </button>
                    </Link>
                </div>
                <details className="w-1/12">
                    <summary className="cursor-pointer p-2 border rounded bg-gray-100 text-gray-700">Filters</summary>
                    <div className="w-2/12 grid grid-cols-1 justify-center mt-2 gap-4 p-4 bg-white border rounded shadow-md absolute right-4 top-16">
                        {Object.keys(filters).map(key => {
                            const isSelectFilter = filterOptions.hasOwnProperty(key);
                            return isSelectFilter ? (
                                <FilterSelect
                                    key={key}
                                    options={filterOptions[key]}
                                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                    value={filters[key]}
                                    onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                                />
                            ) : (
                                <FilterInput
                                    key={key}
                                    type="text"
                                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                    value={filters[key]}
                                    onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                                />
                            );
                        })}
                    </div>
                </details>
            </div>
            <div className="min-w-[1400px] flex flex-col items-center justify-start min-h-screen h-full">
                <div className="divide-gray-200 w-full">
                    <TableHeader headers={headers} />
                    <div className="bg-white divide-y divide-gray-200 w-full">
                        {filteredData.length > 0 ? (
                            currentItems.map(row => (
                                <TableRow key={row.id} row={row} columns={columns} deleteEntity={deleteEntity} refreshTable={fetchEntity} entity={"users"} />
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