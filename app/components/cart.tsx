import React from "react";
import { X } from "lucide-react";
import CartIndicator from "./cartIndicator";
import CartItem from "./cartItem";
import LongBtn from "./longBtn";

interface CartProps {
  isMobile: boolean;
}

const Cart: React.FC<CartProps> = ({ isMobile }) => {
  return (
    //     <div className="flex flex-col px-4 font-SF-Pro-Display">
    //       {isMobile ? (
    //         <>
    //           <div className="py-3 mt-11">
    //             <X className="w-6 h-6" />
    //           </div>
    //           <div className="mb-2 text-4xl font-bold">Cart</div>
    //           <CartIndicator />
    //           <div className="overflow-auto h-[550px]">
    //             <CartItem />
    //             <CartItem />
    //             <CartItem />
    //             <CartItem />
    //             <CartItem />
    //           </div>
    //           <div className="mt-[58px]">
    //             <LongBtn title="Check Out" resultNumber={25.3} />
    //           </div>
    //         </>
    //       ) : (
    //         <>
    //           <div className="mb-2 text-4xl font-bold">Cart</div>
    //           <CartIndicator />
    //           <div className="overflow-auto h-[550px]">
    //             <CartItem />
    //             <CartItem />
    //             <CartItem />
    //             <CartItem />
    //             <CartItem />
    //           </div>
    //           <div className="mt-[58px]">
    //             <LongBtn title="Check Out" resultNumber={25.3} />
    //           </div>
    //         </>
    //       )}
    //     </div>
    /////////end
    <div className="flex flex-col px-4 font-SF-Pro-Display">
      <div className="py-3 mt-11">
        <X className="w-6 h-6" />
      </div>
      <div className="mb-2 text-4xl font-bold">Cart</div>
      <CartIndicator />
      <div className="overflow-auto h-[550px]">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="mt-[58px]">
        <LongBtn title="Check Out" resultNumber={25.3} />
      </div>
    </div>
  );
};

export default Cart;
