import React from "react";

interface CategoryItemProps {
  title: string;
  isActive: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, isActive }) => {
  return (
    <div
      className={`py-[14px] w-max px-[10px] text-lg ${
        isActive ? "border-b-2 border-black" : ""
      }`}>
      <p>{title}</p>
    </div>
  );
};

export default CategoryItem;
