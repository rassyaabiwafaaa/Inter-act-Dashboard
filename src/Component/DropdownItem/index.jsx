import React from "react";

export default function DropdownItem({ label, active }) {
  return (
    <div className="flex flex-col">
      <div className="font-[500] text-[13px] text-white w-full h-[32px] flex items-center hover:bg-26 ease-in-out duration-500 cursor-pointer rounded-t-[6px]">
        <div className="w-full flex justify-between mx-2 items-center">
          <span>{label}</span> {active === label && <div className="w-[6.45px] h-[15px] rounded-[4px] bg-18" />}
        </div>
      </div>
    </div>
  );
}
