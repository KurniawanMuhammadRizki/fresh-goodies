import React from "react";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
const CartItem: React.FC = () => {
  return (
    <div className="flex pb-4 font-SF-Pro-Display items-center w-full">
      <div className="">
        <Image
          src={"/products/beetles.png"}
          alt={"beetles"}
          width={109}
          height={85}
        />
      </div>
      <div className="pt-4 flex flex-col w-full">
        <div className="text-lg font-semibold mb-3">Beetles</div>
        <div className="flex justify-between items-center">
          <div className="w-100  grid grid-cols-5 justify-items-center">
            <div className="flex justify-center bg-card-product-color p-2 rounded-full items-center col-span-1">
              <Minus className="w-8 h-8" />
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <div className="w-24 text-center">2 kg</div>
            </div>
            <div className="flex justify-center  bg-card-product-color rounded-full p-2 items-center col-span-1">
              <Plus className="w-8 h-8" />
            </div>
          </div>
          <div className="opacity-50">$5.1</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
