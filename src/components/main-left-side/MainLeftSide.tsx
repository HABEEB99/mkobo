import Image from "next/image";
import React from "react";
import { september, today } from "../../utils/Data";

import { BiCalendar } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

type MainLeftSideProps = {};

const MainLeftSide: React.FC<MainLeftSideProps> = () => {
  return (
    <section className="w-full  md:w-[60%] md:border-r-2 md:border-r-gray-200  pr-3 md:pr-8 lg:pr-12 flex flex-col space-y-3">
      <div className="w-full h-8 flex items-center px-2 bg-gray-200 rounded-lg">
        <button className="h-full w-[50%] bg-blue-700 text-white rounded-xl">
          Spending Account
        </button>
        <button className="h-full w-[50%] text-blue-700 ">
          Linked Account
        </button>
      </div>

      <div className="flex flex-col space-y-2 pt-4">
        <span className="text-xs text-gray-600 font-bold">
          Recent Transaction
        </span>

        <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-[15rem] h-6 bg-gray-200 justify-between rounded-lg">
            <button className="h-full w-[5rem] bg-blue-700 text-white text-sm rounded-lg">
              All
            </button>
            <button className="h-full w-[5rem]  text-blue-700 text-sm rounded-lg">
              Debit
            </button>
            <button className="h-full w-[5rem]  text-blue-700 text-sm rounded-lg">
              Credit
            </button>
          </div>

          <div className="flex  space-x-2 items-center text-sm text-blue-700">
            <BiCalendar />
            <span className="font-bold">Past 30 Days</span>
            <MdKeyboardArrowDown />
          </div>
        </div>

        <div className="flex flex-col space-y-2 w-full pt-4">
          <div className="w-full h-4 flex">
            <div className="w-[70%] h-full bg-blue-500" />
            <div className="w-[30%] h-full bg-blue-300" />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className=" w-3 h-3 bg-blue-500" />
              <span className="text-xs text-blue-500">
                Total in (&#8358;): +42,000
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-blue-500">
                Total Out (&#8358;): -42,000
              </span>
              <div className=" w-3 h-3 bg-blue-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="pl-2 p-2">
        <span className="text-sm font-bold text-gray-600 ">Today</span>

        <div className="pl-3 w-full md:pl-10 border-l-2 border-l-gray-300 ml-4 mt-2 flex flex-col space-y-6">
          {today.map((item) => (
            <div className="flex items-center justify-between border-b-2 border-b-gray-200 p-2">
              <div className="flex items-center space-x-6">
                <div className={`relative w-8 h-8`}>
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col justify-between space-y-2">
                  <span className="text-xs text-gray-400">{item.type}</span>
                  <span className="text-xs text-gray-500 font-bold">
                    {item.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between relative">
                <span className="absolute top-0 -left-2 text-xs text-gray-600">
                  &#8358;
                </span>
                <span className="text-lg text-gray-600 font-bold">
                  {item.price}
                </span>
                <span className="text-xs text-gray-400 self-end">
                  &#8358; {item.balance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pl-2 p-2">
        <span className="text-sm font-bold text-gray-400">Sept 18</span>

        <div className="pl-3 w-full md:pl-10 border-l-2 border-l-gray-300 ml-4 mt-2 flex flex-col ">
          {september.map((item) => (
            <div className="flex items-center justify-between border-b-2 border-b-gray-200 py-3">
              <div className="flex items-center space-x-6">
                <div className={`relative w-8 h-8`}>
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col justify-between space-y-2">
                  <span className="text-xs text-gray-400">{item.type}</span>
                  <span className="text-xs text-gray-500 font-bold">
                    {item.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between relative">
                <span className="absolute top-0 -left-2 text-xs text-gray-600">
                  &#8358;
                </span>
                <span className="text-lg text-gray-600 font-bold">
                  {item.price}
                </span>
                <span className="text-xs text-gray-400 self-end">
                  &#8358; {item.balance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-3">
        <button className="w-96 h-10 rounded-md bg-blue-700 text-white text-base">
          View All Transaction
        </button>
      </div>
    </section>
  );
};
export default MainLeftSide;
