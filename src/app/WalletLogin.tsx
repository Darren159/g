"use client";

import React, { useState, useEffect } from 'react';
import WalletContext from "./WalletContext";
import Web3 from 'web3';

interface Web3State {
  web3: Web3 | null;
  account: string | null;
}


export default function WalletProvider({ children }) {
  const [state, setState] = useState<Web3State>({ web3: null, account: null });

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setState((prevState) => ({ ...prevState, web3: web3Instance }));
      checkConnectedAccount(web3Instance);
    } else {
      console.error("MetaMask not detected");
    }
  }, []);

  const checkConnectedAccount = async (web3Instance: Web3) => {
    const accounts = await web3Instance.eth.getAccounts();
    if (accounts.length > 0) {
      setState((prevState) => ({ ...prevState, account: accounts[0] }));
    }
  };

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
    const { web3 } = state;
    if (web3) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Check connected account
        checkConnectedAccount(web3);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    }
  };

  const { account } = state;

  return (
    <WalletContext.Provider value={state}>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Connect Wallet</h2>
        <div className="text-center mt-10">
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
      </div>
      {children}
    </WalletContext.Provider>
  );
}

