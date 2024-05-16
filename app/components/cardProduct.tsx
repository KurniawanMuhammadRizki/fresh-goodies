import { Metadata } from "@/types/product";
import Image from "next/image";
import React, { useState } from "react";
import DrawerProduct from "./drawerProduct";
import { Heart, Minus, Plus } from "lucide-react";

interface CardProductProps {
  src: string;
  alt: string;
  price: number;
  name: string;
  weight: number;
  unit: string;
  metaData: Metadata;
}

const CardProduct: React.FC<CardProductProps> = ({
  src,
  alt,
  price,
  name,
  weight,
  unit,
  metaData,
}) => {
  const [isAdded, setIsadded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-full  h-full bg-card-product-color p-3 flex flex-col font-SF-Pro-Display rounded-xl">
      <DrawerProduct
        src={src}
        alt={alt}
        metaData={metaData}
        name={name}></DrawerProduct>
      <div className="font-semibold text-2xl">${price}</div>
      <div className="">{name}</div>
      {isAdded ? (
        <>
          <div className="flex pt-5 justify-between items-center ">
            <div className="flex bg-black justify-center items-center border-[1px] rounded-full h-10 w-10 ">
              <button
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  } else {
                    setIsadded(false);
                  }
                }}
                className="">
                <Minus className="w-8 h-8 text-white" />
              </button>
            </div>
            <div className="opacity-30">
              {weight}
              {unit}
              {count}
            </div>
            <div className="flex justify-center  bg-black items-center border-[1px] rounded-full h-10 w-10 ">
              <button onClick={() => setCount(count + 1)} className="">
                <Plus className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex pt-5 justify-between items-center ">
            <div className="opacity-30">
              {weight}
              {unit}
            </div>
            <div className="flex justify-center items-center border-[1px] rounded-full h-10 w-10 ">
              <button
                onClick={() => {
                  setIsadded(true);
                  setCount(count + 1);
                }}
                className="">
                <Plus className="w-8 h-8 " />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardProduct;
