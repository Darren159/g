import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blockchain Copyright Registry",
  description: "Blockchain Copyright Registry",
};

import Link from "next/link";
import { WalletProvider } from "./WalletContext";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Blockchain Copyright Registry</h1>
        <nav className="flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/browse">Browse</Link>
          <Link href="/upload">Upload</Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <WalletProvider>
          <main className="container mx-auto mt-4">
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}
