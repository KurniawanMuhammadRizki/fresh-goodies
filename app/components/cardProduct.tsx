import Image from "next/image";
import React from "react";

const CardProduct: React.FC = () => {
  return (
    <div className="w-full  h-full bg-card-product-color p-3 flex flex-col font-SF-Pro-Display rounded-xl">
      <div className="flex justify-center items-center">
        <Image
          className="mix-blend-multiply"
          src={"/products/cucumber.png"}
          alt="cucumber"
          height={113}
          width={145}
        />
      </div>
      <div className="font-semibold text-2xl">$3.2</div>
      <div className="">Cucumbers</div>
      <div className="flex pt-5 justify-between items-center ">
        <div className="opacity-30">1kg</div>
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
