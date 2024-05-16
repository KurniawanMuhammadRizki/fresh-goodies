import Image from "next/image";
import CardProduct from "./components/cardProduct";
import CardProductContainer from "./components/cardProductContainer";
import Cart from "./components/cart";
import CartDesktop from "./components/cartDesktop";
import CategoryContainer from "./components/categoryContainer";
import DrawerProduct from "./components/drawerProduct";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />
      <CategoryContainer />
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full mr-2">
          <CardProductContainer />
        </div>
        <div className="hidden md:block md:border-2 md:rounded-xl">
          <CartDesktop />
        </div>
        <div className="hidden md:hidden">
          <Cart isMobile={true} />
        </div>
        {/* <div className="hidden md:block md:border-2 md:rounded-xl">
          <Cart isMobile={false} />
        </div> */}
      </div>
    </main>
  );
}
