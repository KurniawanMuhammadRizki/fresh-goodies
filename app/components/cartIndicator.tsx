import Image from "next/image";
import React from "react";

const CartIndicator: React.FC = () => {
  return (
    <div className="flex pt-5  pl-7 pb-7 items-center font-SF-Pro-Display pr-4">
      <div className="pr-8">
        <Image
          src={"/products/Group 4873.png"}
          alt={"cartIcon"}
          width={57}
          height={21}
        />
      </div>
      <div className="flex flex-col w-full">
        <div>Before free shipping $1.67</div>
        <div>__________________________</div>
      </div>
    </div>
  );
};

export default CartIndicator;
