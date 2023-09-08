"use client";

import React, { useEffect, useState } from "react";
import { Product, fetchProducts } from "@/store/features/productsSlice";
import ProductCard from "../ProductCard";
import ProductsLoader from "../ProductsLoader";
import Categories from "../Categories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </>
  );
};

const Products = () => {
  const dispatch = useAppDispatch();
  const [activeCategory, setActiveCategory] = useState<string | false>(false);

  useEffect(() => {
    dispatch(fetchProducts(activeCategory));
  }, [activeCategory]);

  const {
    data: products,
    isLoading,
    isError,
  } = useAppSelector((state) => state.products);

  return (
    <section className="px-10 py-8">
      <div className="flex gap-x-4 items-center">
        <h2 className="title">All Prodcuts</h2>
        <Categories
          activeCategory={activeCategory}
          handleChange={setActiveCategory}
        />
      </div>
      <div className="mt-4 products-grid">
        {!isLoading ? (
          !isError ? (
            <ProductsList products={products} />
          ) : (
            "Failed to load products."
          )
        ) : (
          <ProductsLoader />
        )}
      </div>
    </section>
  );
};

export default Products;
