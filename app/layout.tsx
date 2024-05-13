import type { Metadata } from "next";
import "./globals.css";
import {Nunito} from "next/font/google";
import {Navbar} from "@/app/components/Navbar";
import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";
import Auth from "./auth";

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
      <KindeProvider>
        <html lang="en">
          <body className={font.className}>
          <Navbar/>
          {children}
          </body>
        </html>
      </KindeProvider>
  );
}
