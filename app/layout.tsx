import type { Metadata } from "next";
import "./globals.css";
import {Nunito} from "next/font/google";
import {Navbar} from "@/app/components/Navbar";
import {Footer} from "@/app/components/Footer";


const font = Nunito({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Airebnb Pyrocode",
  description: "Airebnb clone by Pyrocode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <html lang="en">
        <body className={`${font.className} flex flex-col min-h-screen`}>
        <Navbar/>
        <main className="flex-1 pb-7">
            {children}
        </main>
         <Footer/>
        </body>
        </html>

);
}
