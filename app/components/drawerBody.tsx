import { Metadata } from "@/types/product";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import Cart from "./cart";
import DrawerBodyDescItem from "./drawerBodyDescItem";
import LongBtn from "./longBtn";

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
        <div className="border-[1px] bg-card-product-color p-2 mr-2 w-[90%] rounded-full grid grid-cols-5 justify-items-center">
          <div className="flex justify-center items-center col-span-1">
            <Minus className="w-8 h-8" />
          </div>
          <div className="col-span-3 flex justify-center items-center">
            <div className="w-24 text-center">2</div>
          </div>
          <div className="flex justify-center items-center col-span-1">
            <Plus className="w-8 h-8" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="border-[1px] rounded-full p-4 bg-card-product-color flex justify-center items-center ">
            <div>
              <Heart className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="pr-4">
        <LongBtn title="To Cart" resultNumber={27.3} />
      </div>
    </div>
  );
};

export default DrawerBody;
