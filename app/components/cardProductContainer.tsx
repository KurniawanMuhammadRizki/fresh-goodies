"use client";
import React from "react";
import CardProduct from "./cardProduct";
import useProductList from "@/hooks/useProductList";

const CardProductContainer: React.FC = () => {
  const { productList, loading, error } = useProductList();

  return (
    <div className="w-full h-screen grid grid-cols-2 md:grid-cols-4 gap-2 px-4 overflow-y-auto ">
      {/* <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct /> */}
      {productList.map((item, index) => (
        <div key={index}>
          <CardProduct
            name={item.name}
            src={item.imageUrl}
            alt={item.name}
            price={item.price}
            weight={item.weight}
            unit={item.metadata.unit}
            metaData={item.metadata}
          />
        </div>
      ))}
    </div>
  );
};

export default CardProductContainer;
