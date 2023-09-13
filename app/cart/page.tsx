"use client";

import React from "react";
import { useAppSelector } from "@/store/hooks";
import ProductCard from "@/components/ProductCard";

const CartPage = () => {
  const cartProducts = useAppSelector((state) => state.cart);
  const totalPrice = cartProducts.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );

  return (
    <main className="py-8 px-10">
      <h2 className="title">Cart</h2>
      <div className="mt-4 products-grid">
        {cartProducts.length
          ? cartProducts
              .toSorted((a, b) => b.quantity - a.quantity)
              .map((p) => <ProductCard key={p.id} product={p} cartProduct />)
          : "There is no products."}
      </div>
      {cartProducts.length > 0 && (
        <div className="w-fit mx-auto mt-4">
          <p>
            Total:{" "}
            <span className="font-bold">{totalPrice.toFixed(2)} USD</span>
          </p>
        </div>
      )}
    </main>
  );
};

export default CartPage;
