import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

export default function EarningsCard() {
  return (
    <div className="w-[285px] h-[220px] rounded-[5px] bg-24">
      <div className="mx-[20px]">
        {/* Text */}
        <div className="flex justify-between items-center pt-[20px]">
          <span className="font-[700] text-[15px] text-white">Earnings</span>
          <span className="font-[400] text-[10px] text-[#5c6ca5]">
            <span className="flex items-center gap-2">
              This Week <BsChevronCompactDown className="text-[9px] cursor-pointer" />
            </span>
          </span>
        </div>
        {/* Chart and desc */}
      </div>
    </div>
  );
}
