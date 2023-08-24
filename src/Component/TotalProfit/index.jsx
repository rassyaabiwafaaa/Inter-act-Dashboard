import React from "react";
import Circle from "../Circle";

import { BiChevronDown } from "react-icons/bi";

export default function TotalProfit() {
  return (
    <div className="bg-24 w-full h-full rounded-[5px] flex justify-evenly">
      {/* Left Side */}
      <div className="w-[460px] h-full border-r-[1px] border-32">
        <div className="pt-[28px] pl-[18.44px] flex justify-between pr-[20px]">
          <div className="font-[700] text-[15px] text-white">Total Profit</div>
          <div className="flex justify-start items-center gap-[22.1px]">
            <div className="flex items-center gap-[7.15px]">
              <Circle color={"bg-22"} /> <span className="font-[400] text-[12.51px] text-[#828282]">Earning</span>
            </div>
            <div className="flex items-center gap-[7.15px]">
              <Circle color={`bg-[#ff9f43]`} /> <span className="font-[400] text-[12.51px] text-[#828282]">Expense</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="pt-[28px] pl-[18.44px] flex flex-col justify-between items-center">
        {/* Dropdown */}
        <div className="w-[70.89px] h-[27.72px] border-22 border-solid border-2 rounded-[4px] flex justify-center items-center">
          <span className="font-[600] text-[10.72px] text-22 flex items-center gap-[5.36px]">
            <span>2023</span> <BiChevronDown />
          </span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-[12.35px]">
          <span className="font-[700] text-[31.63px] text-white">$842.98</span>
          <span className="font-[600] text-[9.42px] text-[#828282]">Latest Month Balance $426.20k</span>
        </div>

        {/* Chart */}
        <div className="w-[145px] h-[44px] bg-22">Charts</div>

        {/* CTA Button */}
        <div className="w-[118.32px] h-[32.87px] rounded-[4px] bg-22 flex justify-center items-center mb-[25.2px]">
          <span className="font-[700] text-[12.51px] text-white">View Report</span>
        </div>
      </div>
    </div>
  );
}
