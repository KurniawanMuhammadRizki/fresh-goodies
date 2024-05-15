import React from "react";
import CardProduct from "./cardProduct";

const CardProductContainer: React.FC = () => {
  return (
    <div className="w-full h-screen grid grid-cols-2 gap-2 px-4 overflow-y-auto ">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  );
};

export default CardProductContainer;
