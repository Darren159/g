'use client'
import Link from "next/link";
import { useSearch } from "./SearchContext";

const copyrights = [
  {
    id: 1,
    title: "Copyright 1",
    imageUrl: "https://placehold.co/400",
        description: "This is the first copy right",
    category: "Art",
  },
  {
    id: 2,
    title: "CopyRight 2",
    imageUrl: "https://placehold.co/400",
      description: "This is the second copy right",
    category: "Music",
  },
  {
    id: 3,
    title: "CopyRight 3",
    imageUrl: "https://placehold.co/400",
      description: "This is the second copy right",
    category: "Photography",
  },
  {
    id: 4,
    title: "CopyRight 4",
    imageUrl: "https://placehold.co/400",
      description: "This is the second copy right",
    category: "Games",
  },
  {
    id: 5,
    title: "CopyRight 5",
    imageUrl: "https://placehold.co/400",
      description: "This is the second copy right",
    category: "Videos",
  }
];

function ItemCard({ item }) {
  return (
    <Link href={`asset/${item.id}`} className="bg-gray-800 p-4 rounded-md shadow-md">
      <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
      <p className="mt-2 text-sm text-white">{item.price}</p>
    </Link>
  );
}


export default function CopyrightList() {
    const { searchTerm, selectedCategories } = useSearch();

    const filteredCopyRights = copyrights.filter((copyRight) =>
      copyRight.title.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategories.length === 0 || selectedCategories.includes(copyRight.category)
    ));

    return (
      <div className="grid grid-cols-4 gap-4">
        {filteredCopyRights.map((copyright) => (
          <ItemCard key={copyright.id} item={copyright} />
        ))}
      </div>
    );
}
