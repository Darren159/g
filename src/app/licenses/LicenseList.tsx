'use client'
import Link from "next/link";
import { useSearch } from "./SearchContext";

function ItemCard({ item }) {
  return (
    <Link href={`asset/${item.name}`} className="bg-gray-800 p-4 rounded-md shadow-md">
      <img src={`http://localhost:3001${item.url}`} className="w-full h-48 object-cover rounded-md" />
      {/* <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
      <p className="mt-2 text-sm text-white">{item.price}</p> */}
    </Link>
  );
}


export default function CopyrightList({ content }) {
    const { searchTerm, selectedCategories } = useSearch();

    const filteredCopyRights = content.filter((copyRight) =>
        copyRight.name.toLowerCase().includes(searchTerm.toLowerCase())); 

    return (
      <div className="grid grid-cols-4 gap-4">
        {filteredCopyRights.map((copyright) => (
          <ItemCard key={copyright.name} item={copyright} />
        ))}
      </div>
    );
}
