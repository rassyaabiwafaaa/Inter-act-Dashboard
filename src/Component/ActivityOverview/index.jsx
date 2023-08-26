import React from "react";
import { arrowUp } from "../../assets/images";

export default function ActivityOverview() {
  return (
    <div className="w-full h-full bg-24 rounded-[5px] pl-[24px] pt-[24px]">
      {/* text */}
      <div className="h-[62px] flex flex-col gap-[6px]">
        <span className="font-[700] text-[20px] text-211">Activity Overview</span>
        <div className="flex gap-[7px]">
          <img src={arrowUp} className="w-[24px] h-[24px]" /> <span className="font-[400] text-[16px] text-white">16% this month</span>
        </div>
      </div>
      {/* Chart */}
      <div className="w-[326px] h-[488px]">
        <div className="py-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-[21px] h-[21px] rounded-full border-2 border-orange" />
              <span className="h-[70px] w-0 border border-[#5C6CA5]" />
            </div>
            <div>
              <div className="text-sm text-white leading-[175%]">
                <span className="font-bold">Nick Mark</span> Mentioned
                <span className="font-bold"> Sara Smith </span>
                In New Post
              </div>
              <div className="text-xs text-[#9F9F9F] leading-[175%]">11 JUL 8:10 PM</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-[21px] h-[21px] rounded-full border-2 border-orange" />
              <span className="h-[70px] w-0 border border-[#5C6CA5]" />
            </div>
            <div>
              <div className="text-sm text-white leading-[175%]">
                The <span className="font-bold">Post Name</span> was removed by
                <span className="font-bold"> Nick Mark</span>
              </div>
              <div className="text-xs text-[#9F9F9F] leading-[175%]">11 JUL 8:10 PM</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-[21px] h-[21px] rounded-full border-2 border-orange" />
              <span className="h-[70px] w-0 border border-[#5C6CA5]" />
            </div>
            <div>
              <div className="text-sm text-white leading-[175%]">
                <span className="font-bold">Patrick Sulivan</span> Published a New Post
              </div>
              <div className="text-xs text-[#9F9F9F] leading-[175%]">11 JUL 8:10 PM</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-[21px] h-[21px] rounded-full border-2 border-orange" />
              <span className="h-[70px] w-0 border border-[#5C6CA5]" />
            </div>
            <div>
              <div className="text-sm text-white leading-[175%]">
                <span className="font-bold">240+ users</span> have subscribed to Newsletter #1
              </div>
              <div className="text-xs text-[#9F9F9F] leading-[175%]">11 JUL 8:10 PM</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="w-[21px] h-[21px] rounded-full border-2 border-orange" />
              <span className="h-[60px] w-0 border border-[#5C6CA5]" />
            </div>
            <div>
              <div className="text-sm text-white leading-[175%]">
                The <span className="font-bold">Post Name</span> was suspended by <span className="font-bold">Nick Mark</span>
              </div>
              <div className="text-xs text-[#9F9F9F] leading-[175%]">11 JUL 8:10 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
