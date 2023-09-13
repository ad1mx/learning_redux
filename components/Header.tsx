"use client";

import { toggleTheme } from "@/store/features/configSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Header = () => {
  const { theme } = useAppSelector((state) => state.config);
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="flex justify-between px-10 py-4 border-b-[1px] border-gray-200 dark:border-zinc-900 sticky top-0 bg-white dark:bg-zinc-950 z-[1]">
      <h2 className="text-lg font-semibold flex items-center gap-x-2">
        <Link href={"/"}>Learning</Link>
        <button onClick={handleToggleTheme}>
          {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
        </button>
      </h2>
      <ul>
        <li>
          <Link href={"/cart"} className="flex items-center">
            <span className="text-2xl relative">
              <FaShoppingCart />
              {cart.length > 0 && (
                <motion.span
                  initial={{ opacity: 0, top: "50%" }}
                  animate={{ opacity: 1, top: 0 }}
                  transition={{ duration: 0.1 }}
                  className="bg-blue-500 absolute top-0 right-0 translate-x-[50%] -translate-y-[25%] rounded-full h-[18px] px-1 flex justify-center items-center text-sm font-bold text-white"
                >
                  {cart.length}
                </motion.span>
              )}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
