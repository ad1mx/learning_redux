import Body from "@/components/Body";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Learning",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" dir="ltr">
      <Providers>
        <Body>{children}</Body>
      </Providers>
    </html>
  );
};

export default RootLayout;
