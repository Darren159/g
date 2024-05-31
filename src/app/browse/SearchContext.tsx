'use client'
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

const SearchContext = createContext<{
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
    selectedCategories: string[];
    setSelectedCategories: Dispatch<SetStateAction<string[]>>;
}>({
    searchTerm: "",
    setSearchTerm: () => { },
    selectedCategories: [],
    setSelectedCategories: () => { },
});

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    return <SearchContext.Provider value={{ searchTerm, setSearchTerm, selectedCategories, setSelectedCategories }}>{children}</SearchContext.Provider>;
};

export const useSearch = () => useContext(SearchContext);
