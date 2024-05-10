import type { Metadata } from "next";
import "./globals.css";
import {Nunito} from "next/font/google";

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
      <body className={font.className}>
      {children}
      </body>
    </html>
  );
}
