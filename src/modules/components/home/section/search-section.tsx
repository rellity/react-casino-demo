import React, { useState } from 'react'
import { SearchIcon } from '../icons/search'
import { SearchBtn } from '../icons/searchbtn'
import { useActiveTab } from '../../../store/filter-store'

export const SearchSection = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { setSearchTerm: setSearch } = useActiveTab();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className="w-screen mb-1">
            <div className="flex items-center space-x-2 mx-4">
                <div className="relative flex-grow">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <SearchIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        id="search"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 ring-1 ring-[#00A6FF] rounded"
                        placeholder="Search"
                        style={{ outline: 'none' }}
                    />
                </div>
                <button
                    type="submit"
                    className="ring-1 ring-[#888888] h-10 px-3 py-2 rounded focus:ring-[#00A6FF] focus:outline-none"
                >
                    <SearchBtn />
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </form>
    )
}