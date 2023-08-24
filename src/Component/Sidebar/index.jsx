import React from "react";
import { Logo } from "../../assets/images";
import { HomeIcon } from "../../assets/icons";

export default function SideBar() {
  return (
    <div className="w-[250px] bg-100 h-[100vh] fixed">
      <div className="pt-[20px] pl-[20px]">
        {/* Logo */}
        <div className="w-[132px] h-[35px]">
          <img src={Logo} alt="" />
        </div>

        {/* Sidebar Menu */}
        <div className="mt-[62px]">
          <ul className="flex flex-col gap-[8px]">
            <li className="h-[48px] bg-18 w-[210px] rounded-[8px] flex items-center pl-[14px]">
              <a href="#" className="text-49 font-medium flex items-center gap-[12px]">
                <img src={HomeIcon} alt="Home icon" className="" />
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
