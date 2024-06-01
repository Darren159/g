"use client";

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

interface Web3State {
  web3: Web3 | null;
  account: string | null;
}

export const WalletLogin = ({ setAccount }) => {
  const [state, setState] = useState<Web3State>({ web3: null, account: null });

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setState((prevState) => ({ ...prevState, web3: web3Instance }));
    } else {
      console.error('MetaMask not detected');
    }
  }, []);

  const connectWallet = async () => {
    const { web3 } = state;
    if (web3) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Get accounts from MetaMask
        const accounts = await web3.eth.getAccounts();
        setState((prevState) => ({ ...prevState, account: accounts[0] }));
        setAccount(accounts[0]); // Pass account to parent component
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    }
  };

  const { account } = state;

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Connect Wallet</h2>
      <div className="text-center mt-10">
        <button
          onClick={connectWallet}
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out"
        >
          {account ? 'Connected' : 'Connect Wallet'}
        </button>
        {account && (
          <p className="mt-4 text-xl">
            Connected Account: {account}
          </p>
        )}
      </div>
    </div>
  );
};
