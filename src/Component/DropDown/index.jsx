import React from "react";
import DropdownItem from "../DropdownItem";

export default function DropDown({ data, itemActive }) {
  return (
    <div className="w-[129px] h-[96px] bg-32 absolute left-[73%] top-11 rounded-t-[6px] rounded-b-[6px]">
      {/* Text */}
      <div className="flex flex-col mx-2">
        <div className="w-full h-[32px] flex justify-between items-center">
          <span>Last</span> <div className="w-[6.45px] h-[15px] rounded-[4px] bg-18" />
        </div>
        <div className="w-full h-[32px] flex justify-between items-center">
          <span>Last </span> <div className="w-[6.45px] h-[15px] rounded-[4px] bg-18" />
        </div>
        <div className="w-full h-[32px] flex justify-between items-center">
          <span>asd</span> <div className="w-[6.45px] h-[15px] rounded-[4px] bg-18" />
        </div>
      </div>
    </div>
  );
}
