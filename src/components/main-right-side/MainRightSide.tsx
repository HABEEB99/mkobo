import React from "react";
import { actions } from "../../utils/actions";

import { MdArrowForwardIos } from "react-icons/md";

type MainRightSideProps = {};

const MainRightSide: React.FC<MainRightSideProps> = () => {
  return (
    <section className="w-full md:w-[40%] px-3 md:px-3 lg:px-6 flex flex-col space-y-4">
      <h3 className="text-sm text-gray-500">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {actions.map((item) => (
          <div className="w-full md:w-[8.5rem]  lg:w-48 h-20 rounded-sm bg-gray-300 flex flex-col items-center justify-center ">
            <span className="text-2xl text-blue-700 font-bold">
              {item.icon}
            </span>
            <span className="text-md font-bold text-gray-600">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full md:w-[17.3rem] lg:w-[25rem] h-16 bg-blue-700 p-3 flex items-center justify-center space-x-5">
        <div>
          <h3 className="text-white font-bold text-sm lg:text-base">
            Upgrade your account
          </h3>
          <span className="text-gray-200 text-[0.5rem] lg:text-xs">
            Upgrade your account to increase your account limits.
          </span>
        </div>
        <MdArrowForwardIos className="text-white font-bold text-base" />
      </div>
    </section>
  );
};
export default MainRightSide;
