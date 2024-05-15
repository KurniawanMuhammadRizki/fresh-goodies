import { Metadata } from "@/types/product";
import Image from "next/image";
import React from "react";
import DrawerProduct from "./drawerProduct";

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
  return (
    <div className="w-full  h-full bg-card-product-color p-3 flex flex-col font-SF-Pro-Display rounded-xl">
      <DrawerProduct
        src={src}
        alt={alt}
        metaData={metaData}
        name={name}></DrawerProduct>
      <div className="font-semibold text-2xl">${price}</div>
      <div className="">{name}</div>
      <div className="flex pt-5 justify-between items-center ">
        <div className="opacity-30">
          {weight}
          {unit}
        </div>
        <div className="flex justify-center items-center border-[1px] rounded-full h-10 w-10 ">
          <button>
            <Image
              src={"/products/add product.png"}
              width={24}
              height={24}
              alt={"addBtnImg"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
