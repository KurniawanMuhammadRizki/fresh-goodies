import React from "react";
import CartIndicatorDesktop from "./cardIndicatorDesktop";
import CartItemDesktop from "./cartItemDesktop";
import LongBtn from "./longBtn";

const CartDesktop: React.FC = () => {
  return (
    <div className="">
      <CartIndicatorDesktop />
      <div className="overflow-auto h-[550px]">
        <CartItemDesktop />
        <CartItemDesktop />
        <CartItemDesktop />
        <CartItemDesktop />
        <CartItemDesktop />
      </div>
      <div className="mt-[58px] px-4">
        <LongBtn title="Check Out" resultNumber={25.3} />
      </div>
    </div>
  );
};

export default CartDesktop;
