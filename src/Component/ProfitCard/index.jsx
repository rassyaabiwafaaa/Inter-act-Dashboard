import React from "react";
import LineChartCartesian from "../LineChartCartesian";

const data = [
  {
    name: "Profit A",
    profit: 10,
  },
  {
    name: "Profit B",
    profit: 40,
  },
  {
    name: "Profit C",
    profit: 20,
  },
  {
    name: "Profit D",
    profit: 50,
  },
  {
    name: "Profit E",
    profit: 30,
  },
  {
    name: "Profit F",
    profit: 80,
  },
];

export default function ProfitCard() {
  return (
    <div className="w-[162px] h-[220px] bg-24 rounded-[5px]">
      <div className="p-[20px] flex flex-col gap-[6.39px]">
        <span className="text-white font-[500] text-[16.6px]">Profit</span>
        <span className="text-22 font-[500] text-[28.46px]">8,24k</span>

        <LineChartCartesian data={data} className="mx-auto" />
      </div>
    </div>
  );
}
