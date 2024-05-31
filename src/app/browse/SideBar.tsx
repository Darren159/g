"use client";

import { useSearch } from "./SearchContext";

const categories = ["Art", "Music", "Photography", "Games", "Videos"];

export default function SideBar() {
  const { selectedCategories, setSelectedCategories } = useSearch();

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Category</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <label key={category} className="inline-flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
              className="h-5 w-5 "
            />
            <span className="ml-2 text-white">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
