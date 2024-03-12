import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "VR Landing Page",
  description: "VR Landing page for future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-r from-neutral-950 to-sky-950 text-white ${poppins.className}`}>
        <Navbar />
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
