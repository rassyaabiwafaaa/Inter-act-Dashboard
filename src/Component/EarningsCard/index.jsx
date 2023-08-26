import React, { useEffect, useState } from "react";
import { BsChevronCompactDown, BsChevronDown } from "react-icons/bs";
import DougnutChart from "../DoughnutChart";
import Circle from "../Circle";
import DropDown from "../DropDown";

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

export default function EarningsCard({ showDropDown, handleShowDropDown }) {
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

  useEffect(() => {
    if (optionTime === "This Week") {
      setSales(151);
      setOrders(113);
    } else if (optionTime === "Last Week") {
      setSales(98);
      setOrders(90);
    } else if (optionTime === "2 Weeks ago") {
      setSales(60);
      setOrders(30);
    } else {
      setSales(180);
      setOrders(160);
    }
  }, [optionTime]);
  return (
    <div className="w-[285px] h-[220px] rounded-[5px] bg-24">
      <div className="mx-[20px]">
        {/* Text */}
        <div className="flex justify-between items-center pt-[20px] relative">
          <span className="font-[700] text-[15px] text-white">Earnings</span>
          <div onClick={handleShowDropDown} className="text-xs text-[#5C6CA5] flex flex-col pl-6 relative">
            <div className="flex gap-2 cursor-pointer whitespace-nowrap">
              {optionTime} <BsChevronCompactDown />
            </div>
            <div className={`absolute mt-5 bg-[#2E4B85] text-white flex flex-col rounded-md whitespace-nowrap ${!showDropDown && "hidden"}`}>
              {OPTION_TIME.map((data, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setOptionTime(data.label);
                  }}
                  className="cursor-pointer flex items-center justify-between gap-4 hover:bg-[#546B9B] px-[10px] py-[5px] first:rounded-t-md last:rounded-b-md first:pt-[10px] last:pb-[10px] ease-in duration-300"
                >
                  {data.label}
                  <span className={`w-[5px] h-[15px] rounded-[4px] ${optionTime === data.label ? "bg-[#1C243F]" : null}`} />
                </div>
              ))}
            </div>
          </div>
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
                <span className="font-[500] text-[14px] text-49">{sales}K</span>
              </div>
            </div>
            {/* Total Orders */}
            <div className="flex items-center gap-2 justify-start">
              <Circle color={`bg-orange`} />{" "}
              <div className="flex flex-col">
                <span className="font-[400] text-[12px] text-white">Total Orders</span>
                <span className="font-[500] text-[14px] text-49">{orders}K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
