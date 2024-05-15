"use client";
import React, { useState } from "react";
import CategoryItem from "./categoryItem";

const CategoryContainer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const categoryList: string[] = [
    "All",
    "Spicy",
    "Dressings",
    "Sweet",
    "Roots",
    "Vegetables",
  ];

  return (
    <div className="mb-5 px-3 flex w-full overflow-x-auto font-SF-Pro-Display text-lg gap-2">
      {categoryList.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(index)}>
          <CategoryItem title={item} isActive={activeIndex === index} />
        </div>
      ))}
    </div>
  );
};

export default CategoryContainer;
