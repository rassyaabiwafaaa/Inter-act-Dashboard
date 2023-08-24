import React from "react";
import BarC from "../BarChart";

const data = [
  {
    name: "Order A",
    orders: 80,
  },
  {
    name: "Order B",
    orders: 189,
  },
  {
    name: "Order C",
    orders: 100,
  },
  {
    name: "Order D",
    orders: 60,
  },
  {
    name: "Order E",
    orders: 140,
  },
];

export default function OrdersCard() {
  return (
    <div className="w-[183px] h-[220px] bg-24 rounded-[5px] p-[20px]">
      {/* Text */}
      <div className="flex flex-col gap-[8.76px]">
        <span className="font-[500] text-[17px] text-white">Orders</span>
        <span className="font-[500] text-[28.46px] text-orange">189K</span>
      </div>
      {/* Chart */}
      <BarC data={data} className="mx-auto" />
    </div>
  );
}
