import Image from "next/image";
import CardProduct from "./components/cardProduct";
import CardProductContainer from "./components/cardProductContainer";
import CategoryContainer from "./components/categoryContainer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />

      <CategoryContainer />
      <CardProductContainer />
    </main>
  );
}
