import React from "react";

import { AiFillEyeInvisible, AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type HomeTopbarProps = {};

const HomeTopbar: React.FC<HomeTopbarProps> = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-base font-bold pl-8">Hello Bennedict,</h2>
      <div className="flex w-full space-x-4 items-center overflow-x-auto justify-start mt-6 border-b-2 border-b-gray-200 pb-6">
        <MdKeyboardArrowLeft className="text-xl" />

        <div className="w-80 h-40 md:h-32  bg-blue-700 rounded-sm flex-col flex space-y-3 p-2 ">
          <div className="flex  justify-between ">
            <span className="text-xs text-gray-100">Available Balance</span>
            <button className="w-16 h-8 bg-white text-blue-700 rounded-sm">
              Tier 1
            </button>
          </div>

          <div className="relative mx-2 flex items-center text-white">
            <span className="text-xs absolute top-0 -left-2">&#8358;</span>
            <h3 className="text-3xl font-bold">6,390.68</h3>
            <AiFillEyeInvisible className="pl-2 text-3xl" />
          </div>
        </div>

        <div className="w-80 h-40 md:h-32 bg-purple-300 rounded-sm flex-col flex space-y-7 p-2 ">
          <div className="flex  justify-between ">
            <span className="text-xs text-gray-600">Car Purchase Plan</span>
            <div className="flex space-x-2 items-center">
              <span className="text-xs">75% Achieved</span>
              <AiOutlineLoading3Quarters className="text-blue-700 text-md font-bold" />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="relative mx-2 flex items-center text-black border-b-[1px] border-b-gray-200 pb-1">
              <span className="text-xs absolute top-0 -left-2">&#8358;</span>
              <h3 className="text-3xl font-bold">6,390.68</h3>
              <AiFillEyeInvisible className="pl-2 text-2xl" />
            </div>

            <div>
              <h3 className="text-xs text-gray-600">
                Interest as at today: &#8358;20,000
              </h3>
            </div>
          </div>
        </div>

        <div className="w-80 h-40 md:h-32 bg-pink-200 rounded-sm flex-col flex space-y-7 p-2 ">
          <div className="flex  justify-between ">
            <span className="text-xs text-gray-600">Birthday Plan</span>
            <div className="flex space-x-2 items-center">
              <span className="text-xs">75% Achieved</span>
              <AiOutlineLoading3Quarters className="text-blue-700 text-md font-bold" />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="relative mx-2 flex items-center text-black border-b-[1px] border-b-gray-200 pb-1">
              <span className="text-xs absolute top-0 -left-2">&#8358;</span>
              <h3 className="text-3xl font-bold">6,390.68</h3>
              <AiFillEyeInvisible className="pl-2 text-2xl" />
            </div>

            <div>
              <h3 className="text-xs text-gray-600">
                Interest as at today: &#8358;20,000
              </h3>
            </div>
          </div>
        </div>

        <MdKeyboardArrowRight className="text-xl text-blue-700 animate-pulse" />
      </div>
    </div>
  );
};
export default HomeTopbar;
