import { Metadata } from "@/types/product";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import DrawerBodyDescItem from "./drawerBodyDescItem";

interface DrawerBodyProps {
  src: string;
  alt: string;
  metaData: Metadata;
  name: string;
}

const DrawerBody: React.FC<DrawerBodyProps> = ({
  src,
  alt,
  metaData,
  name,
}) => {
  return (
    <div className="flex flex-col p-4 font-SF-Pro-Display">
      <div className="flex justify-center items-center mb-4">
        <Image src={src} alt={alt} width={445} height={297} />
      </div>
      <div className="text-3xl font-bold mb-7">{name}</div>
      <div className="text-lg font-semibold mb-4">
        in {metaData.weight} {metaData.unit}
      </div>
      <div className="grid grid-cols-4 border-[1px] rounded-lg py-4 mb-4">
        <DrawerBodyDescItem title={metaData.calorie} desc={"calorie"} />
        <DrawerBodyDescItem title={metaData.proteins} desc={"proteins"} />
        <DrawerBodyDescItem title={metaData.fats} desc={"fats"} />
        <DrawerBodyDescItem title={metaData.carbs} desc={"carbs"} />
      </div>
      <div className="flex w-full justify-between items-center mb-4">
        <div className="grid grid-cols-3 border-[1px] bg-card-product-color  p-2 w-[80%] rounded-full">
          <div>
            <Minus />
          </div>
          <div>2</div>
          <div>
            <Plus />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="border-[1px] rounded-full p-2 bg-card-product-color flex justify-center items-center ">
            <div>
              <Heart className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black rounded-xl ">
        <div className="text-white">To Cart</div>
      </div>
    </div>
  );
};

export default DrawerBody;
