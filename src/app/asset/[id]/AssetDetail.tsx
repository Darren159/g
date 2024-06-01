import { getContentDetails, getContentLicenses } from "@/lib/utils";
import Link from "next/link";

export default async function AssetDetail({ hash }: { hash: string }) {
  const item = await getContentDetails(hash);
    const license = await getContentLicenses(hash);
    console.log(license);

  return (
    <div className="flex p-4 border rounded-md shadow-sm gap-4 w-3/4">
      <img src={`http://localhost:3001${item.url}`} className="w-40 h-40" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{item.owner}</h2>
        <Link href={`/asset/${hash}/request`} className="bg-blue-600 text-white rounded-md p-2 w-1/4">
          <button>Request Asset</button>
        </Link>
        <Link href={`/asset/${hash}/create-license`} className="bg-blue-600 text-white rounded-md p-2 w-1/4">
          <button>Create License</button>
        </Link>
      </div>
    </div>
  );
}
