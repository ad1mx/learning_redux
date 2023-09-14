"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useAppSelector } from "@/store/hooks";
import React from "react";

const Body = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppSelector((state) => state.config);

  return (
    <body className={`${theme}`}>
      <div className="dark:bg-zinc-950 dark:text-white duration-150 min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </body>
  );
};

export default Body;
