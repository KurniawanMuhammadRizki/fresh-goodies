import React from "react";

interface LongBtnProps {
  title: string;
  resultNumber: number;
}

const LongBtn: React.FC<LongBtnProps> = ({ title, resultNumber }) => {
  return (
    <div className="w-full bg-black rounded-full mb-[58px] mr-4 text-xl font-medium py-4 h-[55px] px-6 flex justify-between  ">
      <div className="text-white">{title}</div>
      <div className="text-white">${resultNumber}</div>
    </div>
  );
};

export default LongBtn;
