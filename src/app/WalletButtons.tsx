"use client";

import { useWallet } from "./WalletContext";

export default function WalletButtons() {
  const { web3, account } = useWallet();

  const addGanacheNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x539", // Chain ID for Ganache (1337 in decimal, 0x539 in hex)
            chainName: "Ganache Test Network",
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: ["http://127.0.0.1:7545"],
            blockExplorerUrls: null, // Set to null instead of an empty array
          },
        ],
      });
    } catch (error) {
      console.error("Failed to add the Ganache network", error);
    }
  };

  const connectWallet = async () => {
    if (web3) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Check connected account
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          sessionStorage.setItem("account", accounts[0]); // Store account in session storage
          window.location.reload(); // Reload the page to update the context
        }
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    }
  };

  return (
    <div className="flex flex-col text-center mt-10">
      <button
        onClick={addGanacheNetwork}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
      >
        Add Ganache Network
      </button>
      <button
        onClick={connectWallet}
        className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out"
      >
        {account ? "Connected" : "Connect Wallet"}
      </button>
      {account && <p className="mt-4 text-xl">Connected Account: {account}</p>}
    </div>
  );
}
