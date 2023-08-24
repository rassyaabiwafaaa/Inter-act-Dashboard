import React, { useState } from "react";
import { Logo } from "../../assets/images";
import { sideBarMenu } from "../../const";

export default function SideBar() {
  const [active, setActive] = useState("Home");

  const handleClickSideBarMenu = (e) => {
    setActive(e.target.id);
  };
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
            {sideBarMenu.map((item) => (
              <li key={item.text} id={item.text} className={`h-[48px] ${active === item.text && "bg-18"} w-[210px] rounded-[8px] flex items-center pl-[14px] cursor-pointer`} onClick={handleClickSideBarMenu}>
                <div href="#" className="text-49 font-medium flex items-center gap-[12px]">
                  <img src={item.icons} alt="Home icon" className="" />
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
