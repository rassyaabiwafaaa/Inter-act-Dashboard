import React from "react";

export default function OrdersCard() {
  return (
    <div className="w-[183px] h-[220px] bg-24 rounded-[5px] p-[20px]">
      {/* Text */}
      <div className="flex flex-col gap-[8.76px]">
        <span className="font-[500] text-[17px] text-white">Orders</span>
        <span className="font-[500] text-[28.46px] text-orange">189K</span>
      </div>
      {/* Chart */}
    </div>
  );
}
