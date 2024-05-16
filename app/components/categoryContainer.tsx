"use client";
import ProductContext from "@/context/productContext";
import { useProductContext } from "@/context/productProvider";
import useProductList from "@/hooks/useProductList";
import React, { useContext, useState } from "react";
import CategoryItem from "./categoryItem";

const CategoryContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("");

  const { categories, updateActiveCategory } = useProductContext();

  const handleItemClick = (category: string, index: number) => {
    setActiveCategory(category);
    updateActiveCategory(category);
    setActiveIndex(index);
  };
  const categoriesWithAll = ["All", ...categories];

  //   const categoryList: string[] = [
  //     "All",
  //     "Spicy",
  //     "Dressings",
  //     "Sweet",
  //     "Roots",
  //     "Vegetables",
  //   ];

  return (
    <div className="mb-5 px-3 flex w-full overflow-x-auto font-SF-Pro-Display text-lg gap-2">
      {/* {categoryList.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(index)}>
          <CategoryItem title={item} isActive={activeIndex === index} />
        </div>
      ))} */}

      {categoriesWithAll.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            handleItemClick(item, index);
          }}>
          <CategoryItem title={item} isActive={activeIndex === index} />
        </div>
      ))}
    </div>
  );
};

export default CategoryContainer;
