"use client";

import { fetchCategories } from "@/store/features/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect } from "react";
import CategoriesLoader from "./CategoriesLoader";
import { BsX } from "react-icons/bs";

const Category = ({
  category,
  handleChange,
  activeCategory,
}: {
  category: string;
  activeCategory?: string | false;
  handleChange: React.Dispatch<React.SetStateAction<string | false>>;
}) => {
  return (
    <button
      onClick={() => handleChange(category)}
      className={`${
        activeCategory === category
          ? "bg-slate-400 dark:bg-slate-50 text-black"
          : "bg-slate-200 dark:bg-zinc-900"
      } px-3 py-1 rounded-full font-bold text-xs uppercase`}
    >
      {category}
    </button>
  );
};

const Categories = ({
  handleChange,
  activeCategory,
}: {
  activeCategory?: string | false;
  handleChange: React.Dispatch<React.SetStateAction<string | false>>;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const {
    data: categories,
    isLoading,
    isError,
  } = useAppSelector((state) => state.categories);

  return (
    <div className="flex gap-x-2">
      {!isLoading ? (
        !isError ? (
          <>
            {categories.map((category) => (
              <Category
                activeCategory={activeCategory}
                handleChange={handleChange}
                key={category}
                category={category}
              />
            ))}
            {activeCategory && (
              <button
                onClick={() => handleChange(false)}
                className="flex items-center gap-x-0.5"
              >
                <span> Reset</span>{" "}
                <span className="translate-y-[1px] text-xl">
                  <BsX />
                </span>
              </button>
            )}
          </>
        ) : (
          "Failed to load categories."
        )
      ) : (
        <CategoriesLoader />
      )}
    </div>
  );
};

export default Categories;
