import type { Metadata } from "next";
import {Nunito} from "next/font/google";

import {Footer} from "@/app/components/Footer";



export default function RootLayoutWithFooter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <div className="h-full">
          {children}
      </div>
          <Footer/>
      </>

  );
}
