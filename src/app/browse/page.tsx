import Image from "next/image";
import CopyrightList from "./CopyRightList";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { SearchProvider } from "./SearchContext";

export default function Browse() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
          <article className="flex flex-col gap-4">
              <SearchProvider>
              <SearchBar />
              <div className="flex gap-4">
        <SideBar />

                  <CopyrightList />
                  </div>
                </SearchProvider>
      </article>
    </main>
  );
}
