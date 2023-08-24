import React from "react";
import { footerItems } from "../../const";

export default function Footer() {
  return (
    <div className="flex justify-start gap-[24px] text-footerText font-[400] text-[12px]">
      {footerItems.map((item) => (
        <a href="" key={item.text}>
          {item.text}
        </a>
      ))}
    </div>
  );
}
