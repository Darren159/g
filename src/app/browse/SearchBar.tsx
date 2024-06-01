
'use client'
import { useSearch } from "./SearchContext";
export default function SearchBar() {
    const { searchTerm, setSearchTerm } = useSearch();
    return (
        <div className="flex  items-center">
        <input
            type="text"
            placeholder="Search by hash"
                className="w-3/4 p-2 bg-black border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
    );
    }