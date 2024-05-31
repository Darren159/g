import Link from "next/link";
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
  },
];

const licenseOptions = [
  "CC BY (Attribution)",
  "CC BY-SA (Attribution-ShareAlike)",
  "CC BY-ND (Attribution-NoDerivs)",
  "CC BY-NC (Attribution-NonCommercial)",
  "CC BY-NC-SA (Attribution-NonCommercial-ShareAlike)",
  "CC BY-NC-ND (Attribution-NonCommercial-NoDerivs)",
];

export default function AssetDetail({ assetId }: { assetId: number }) {
  const item = copyrights.find((item) => item.id === Number(assetId));

  return (
    <div className="flex p-4 border rounded-md shadow-sm gap-4 w-3/4">
      <img src={item.imageUrl} />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <p>{item.description}</p>
        <div className="flex flex-col gap-1">
          {licenseOptions.map((category) => (
            <label key={category} className="inline-flex items-center">
              <input type="checkbox" className="h-3 w-3 " />
              <span className="ml-2 text-white">{category}</span>
            </label>
          ))}
        </div>
        <Link href={`/asset/${assetId}/request`} className="bg-blue-600 text-white rounded-md p-2">
          <button>Request Asset</button>
        </Link>
      </div>
    </div>
  );
}
