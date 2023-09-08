import React from "react";
import Skeleton from "./Skeleton";

const ProductsLoader = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <Skeleton
          key={i}
          className="h-[430px] p-4 flex flex-col justify-between gap-y-4"
        >
          <div className="flex flex-col gap-y-4">
            <Skeleton className="h-[250px]" variant="text" />
            <Skeleton className="h-[15px]" variant="text" />
            <Skeleton className="h-[15px] w-[90%]" variant="text" />
            <Skeleton className="h-[15px] w-[40%]" variant="text" />
          </div>
          <Skeleton className="h-[30px]" variant="text" />
        </Skeleton>
      ))}
    </>
  );
};

export default ProductsLoader;
