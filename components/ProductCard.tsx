"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import {
  CartProdcut,
  addToCart,
  removeFromCart,
} from "@/store/features/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { Product } from "@/store/features/productsSlice";

const ProductCard = ({
  product,
  cartProduct,
}: {
  product: Product | CartProdcut;
  cartProduct?: boolean;
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    dispatch(addToCart(product));
  };

  const handleRemoveItem = (e: React.MouseEvent) => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="p-4 bg-slate-200 rounded-md flex flex-col gap-y-2 justify-between">
      <div className="flex flex-col gap-y-2">
        <div className="relative h-[250px]">
          <Image
            src={product.image}
            fill
            alt="Cover"
            className="object-cover object-center rounded-md"
          />
        </div>
        <p>{product.title}</p>
        <div className="flex justify-between">
          <p className="text-lg font-bold">{product.price} USD</p>
          {cartProduct && (
            <p className="text-lg">
              x
              <span className="font-semibold">
                {(product as CartProdcut).quantity}
              </span>
            </p>
          )}
        </div>
      </div>
      <Button
        onClick={!cartProduct ? handleAddToCart : handleRemoveItem}
        sx={cartProduct ? "bg-red-600 hover:bg-red-700" : ""}
      >
        {!cartProduct ? "Add to cart" : "Remove item"}
      </Button>
    </div>
  );
};

export default ProductCard;
