"use client";

import React, { useEffect, useState } from "react";
// import SideBar from "./SideBar";
// import SearchBar from "./SearchBar";
// import { SearchProvider } from "./SearchContext";
import { getAllUserLicenses } from "../../lib/utils";
import { useWallet } from "../WalletContext";

export default function License() {
  const { account } = useWallet();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (account) {
      (async () => {
        try {
          const licenses = await getAllUserLicenses(account);
          setData(licenses);
          console.log(licenses)
        } catch (err) {
          setError("Failed to fetch licenses");
        } finally {
          setLoading(false);
        }
      })();
    } else {
      setLoading(false);
    }
  }, [account]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!account) {
    return <div className="flex justify-center items-center min-h-screen">Please connect your wallet to view licenses.</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">{error}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <article className="flex flex-col gap-4">
        {/* <SearchProvider> */}
          <SearchBar />
          <div className="flex gap-4">
            {/* <SideBar /> */}
          </div>
        {/* </SearchProvider> */}
      </article>
    </main>
  );
}
