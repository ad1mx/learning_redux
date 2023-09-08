import React from "react";
import Skeleton from "./Skeleton";

const CategoriesLoader = () => {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <Skeleton
          key={i}
          className="flex w-[100px] p-3"
          rounded="full"
        ></Skeleton>
      ))}
    </>
  );
};

export default CategoriesLoader;
