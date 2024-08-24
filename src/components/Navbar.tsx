import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      {/* SEARCH */}
      <div className="hidden md:flex justify-center gap-2 items-center ring-[1.5px] ring-gray-300 bg-white rounded-full px-2">
        <Image src={"/search.png"} alt={"search"} width={14} height={14} />
        <input placeholder="Search ..." type="text" />
      </div>
      {/* USER AND ICONS */}
      <div className="flex items-center gap-5">
        <div className="w-7 h-7 flex justify-center items-center rounded-full cursor-pointer bg-white">
          <Image src={"/message.png"} alt={"message"} width={20} height={20} />
        </div>
        <div className="w-7 h-7 relative flex justify-center items-center cursor-pointer rounded-full bg-white">
          <Image
            src={"/announcement.png"}
            alt={"message"}
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -end-2 w-4 h-4 text-[10px] flex justify-center items-center rounded-full bg-purple-500 text-white">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">John Doe</span>
          <span className="text-[10px] font-light text-gray-500 text-end">
            Admin
          </span>
        </div>
        <Image
          src={"/avatar.png"}
          alt={"avatar"}
          width={36}
          height={36}
          className="min-w-9 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
