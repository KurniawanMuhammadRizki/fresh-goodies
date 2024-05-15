import React from "react";

interface DraweBodyDescItemProps {
  title: number;
  desc: string;
}
const DrawerBodyDescItem: React.FC<DraweBodyDescItemProps> = ({
  title,
  desc,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-semibold text-lg">{title}</div>
      <div className="text-sm opacity-30">{desc}</div>
    </div>
  );
};

export default DrawerBodyDescItem;
