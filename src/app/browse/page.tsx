import Image from "next/image";
import CopyrightList from "./CopyRightList";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { SearchProvider } from "./SearchContext";
import { getAllImages } from "../../lib/utils";

export default async function Browse() {
  const data = await getAllImages();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <article className="flex flex-col gap-4">
        <SearchProvider>
          <SearchBar />
          <div className="flex gap-4">
            <SideBar />
            <CopyrightList content={data} />
          </div>
        </SearchProvider>
      </article>
    </main>
  );
}
