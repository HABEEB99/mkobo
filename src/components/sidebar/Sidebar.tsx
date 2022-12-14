import React from "react";
import { navItem } from "../../utils/NavItem";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiWechatFill } from "react-icons/ri";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <section className="h-full w-[12%] bg-gray-100 pl-4 pt-10 lg:flex flex-col space-y-8 hidden static left-0 top-0">
      <div className="flex flex-col space-y-2">
        {navItem.map((item, idx) => (
          <div
            className={`flex items-center justify-start w-full px-1 rounded-sm h-8 space-x-4 text-gray-400 ${
              idx === 0 && "bg-white !text-blue-700"
            }`}
          >
            <span className="text-sm">{item.Icon}</span>
            <span className="text-base">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-2">
        <span className="text-md font-bold text-black">Help & Support</span>

        <div className="text-xs font-bold flex items-center justify-start space-x-2 text-blue-700">
          <AiOutlineQuestionCircle />
          <span>FAQ'S</span>
        </div>

        <div className="text-xs font-bold flex items-center justify-start space-x-2 text-blue-700">
          <RiWechatFill />
          <span>Talk to someone</span>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
