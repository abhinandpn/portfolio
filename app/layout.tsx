import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCard from "@/components/customizableCard";
import { FaHeart } from "react-icons/fa6";
import DashedLine from "@/components/DashedLine";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Sharma",
  description: "Created by Akash Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className + " relative"}>
        <Navbar />
        <main className="relative z-0">
        {children}
        </main>
        <footer className="mt-[5rem] px-4">
          <CustomCard className="w-full py-4 max-w-[1200px] mx-auto flex text-md relative text-gray-400 gap-2 font-normal justify-center items-center">
            Crafted with <FaHeart className="text-pink-500" /> by <span className="text-white font-semibold">Akash Sharma</span>
          </CustomCard>
        </footer>
      </body>
    </html>
  );
}
