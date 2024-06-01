"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import Web3 from "web3";

interface Web3State {
  web3: Web3 | null;
  account: string | null;
}

const WalletContext = createContext<Web3State>({ web3: null, account: null });


export function WalletProvider({ children }) {
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

  return <WalletContext.Provider value={state}>{children}</WalletContext.Provider>;
}

export const useWallet = () => useContext(WalletContext);
