import React from "react";

interface PageProps {
  params: { id: string };
}

const Product: React.FC<PageProps> = ({ params: { id } }) => {
  return <main>{id}</main>;
};

export default Product;
