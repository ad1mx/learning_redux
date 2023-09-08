"use client";

import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <header className="flex justify-between px-10 py-4 border-b-[1px] border-gray-200 sticky top-0 bg-white z-[1]">
      <h2 className="text-lg font-semibold">
        <Link href={"/"}>Learning</Link>
      </h2>
      <ul>
        <li>
          <Link href={"/cart"} className="flex items-center">
            <span className="text-2xl">
              <FaShoppingCart />
            </span>
            <span className="bg-blue-500 -translate-y-[50%] -translate-x-[30%] rounded-full h-[18px] px-1 flex justify-center items-center text-sm font-bold text-white">
              {cart.length}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
