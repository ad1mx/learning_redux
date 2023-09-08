import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Providers from "@/components/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
