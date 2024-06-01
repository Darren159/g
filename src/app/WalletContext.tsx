import { createContext } from "react";
import Web3 from "web3";

interface Web3State {
  web3: Web3 | null;
  account: string | null;
}

const WalletContext = createContext<Web3State>({ web3: null, account: null });

export default WalletContext;
