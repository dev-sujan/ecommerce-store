import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModelProvider from "@/provider/ModelProvider";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/provider/ToastProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModelProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
