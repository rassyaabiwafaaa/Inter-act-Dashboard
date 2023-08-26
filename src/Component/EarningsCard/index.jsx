import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import DougnutChart from "../DoughnutChart";
import Circle from "../Circle";

const OPTION_TIME = [
  {
    label: "This Week",
  },
  {
    label: "Last Week",
  },
  {
    label: "2 Weeks ago",
  },
  {
    label: "Last Month",
  },
];

export default function EarningsCard() {
  const [optionTime, setOptionTime] = useState("This Week");
  const [sales, setSales] = useState(151);
  const [orders, setOrders] = useState(113);
  const data = {
    dataSales: [
      { name: "Non Sales", value: 200 - sales },
      { name: "Total Sales", value: sales },
    ],
    dataOrders: [
      { name: "Non Orders", value: 200 - orders },
      { name: "Total Orders", value: orders },
    ],
  };
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
        <div className="mt-[20px] flex gap-[15px]">
          <DougnutChart dataSales={data.dataSales} dataOrders={data.dataOrders} />
          {/* Text */}
          <div className="flex flex-col gap-[20px]">
            {/* Total Sales */}
            <div className="flex items-center gap-2 justify-start">
              <Circle color={`bg-22`} />{" "}
              <div className="flex flex-col">
                <span className="font-[400] text-[12px] text-white">Total Sales</span>
                <span className="font-[500] text-[14px] text-49">251K</span>
              </div>
            </div>
            {/* Total Orders */}
            <div className="flex items-center gap-2 justify-start">
              <Circle color={`bg-orange`} />{" "}
              <div className="flex flex-col">
                <span className="font-[400] text-[12px] text-white">Total Orders</span>
                <span className="font-[500] text-[14px] text-49">176K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
