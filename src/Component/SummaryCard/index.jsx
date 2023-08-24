import React from "react";

export default function SummaryCard({ icons, text, value, active }) {
  return (
    <div className={`w-[205px] h-[100px] ${active ? "bg-summaryActive" : "bg-24"} rounded-[8px] flex justify-center items-center`}>
      <div className="flex justify-center items-center gap-[20px]">
        {/* Item icon summary */}
        <div>
          <img src={icons} alt="eclipse" />
        </div>
        {/* Data Summary */}
        <div className="flex flex-col justify-start items-start">
          <span className="text-white text-[16px] font-[600]">{text}</span>
          <span className={`${active ? "text-white" : "text-49"} text-[14px] font-[500]`}>{value}</span>
        </div>
      </div>
    </div>
  );
}
