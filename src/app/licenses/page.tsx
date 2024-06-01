import Image from "next/image";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { SearchProvider } from "./SearchContext";
import { getAllUserLicenses } from "../../lib/utils";
import { useContext } from "react";
import WalletContext from "../WalletContext";

export default async function License() {
  const { account } = useContext(WalletContext);
  console.log(account);

  const data = await getAlluserLicenses();
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
