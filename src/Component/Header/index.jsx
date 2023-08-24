import React from "react";
import { ProfilePicture } from "../../assets/images";

export default function Header() {
  return (
    <div className="h-[50px] w-full py-[15px] bg-26 border-[#4b5259] border-b-[1px] flex justify-end">
      {/* User profile */}
      <div className="flex items-center mr-[44.5px]">
        <img src={ProfilePicture} alt="profile-picture" />
        <span className="text-white">Hello, User!</span>
      </div>
    </div>
  );
}
