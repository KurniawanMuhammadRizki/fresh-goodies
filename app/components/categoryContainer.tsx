import React from "react";
import CategoryItem from "./categoryItem";

const CategoryContainer: React.FC = () => {
  return (
    <div className="mb-5 px-3 flex w-full overflow-x-auto font-SF-Pro-Display text-lg gap-2">
      <CategoryItem title="All" isActive={true} />
      <CategoryItem title="Spicy" isActive={false} />
      <CategoryItem title="Dressings" isActive={false} />
      <CategoryItem title="Sweet" isActive={false} />
      <CategoryItem title="Roots" isActive={false} />
      <CategoryItem title="Vegetables" isActive={false} />
    </div>
  );
};

export default CategoryContainer;
