import Image from "next/image";
import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import MobileNav from "../mobile-nav/MobileNav";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  const handleMobileNav = () => setOpenMobileNav((prev) => !prev);
  return (
    <header className="w-full h-[12vh] bg-gray-100 px-2 md:px-4 flex items-center justify-between sticky top-0">
      <div className="relative w-10 h-10 md:w-20 md:h-20 lg:mt-4">
        <Image src="/logo.png" layout="fill" objectFit="contain" alt="Logo" />
      </div>

      <h3 className="font-bold text-black text-xs md:text-xl">MY DASHBOARD</h3>

      <div className="flex items-center space-x-2">
        <div className="w-40 md:w-60 h-8 lg:h-10 rounded-md flex items-center justify-between bg-blue-700 px-2">
          <BiBell className="text-white text-xl" />

          <div className="relative w-6 h-6 ">
            <Image
              src="/user.png"
              layout="fill"
              objectFit="contain"
              alt="User"
            />
          </div>

          <div className="flex items-center justify-center text-white text-sm">
            <span className="text-xs md:text-base">Benedict Ulinfo</span>
            <MdKeyboardArrowDown />
          </div>
        </div>

        {openMobileNav ? (
          <AiOutlineClose
            onClick={handleMobileNav}
            className="text-3xl hover:font-bold text-blue-500 cursor-pointer hover:text-blue-700 lg:hidden"
          />
        ) : (
          <FaBars
            onClick={handleMobileNav}
            className="text-3xl hover:font-bold text-blue-500 cursor-pointer hover:text-blue-700 lg:hidden"
          />
        )}
      </div>

      {openMobileNav && <MobileNav />}
    </header>
  );
};
export default Header;
