import React from "react";
import MainLeftSide from "../main-left-side/MainLeftSide";
import MainRightSide from "../main-right-side/MainRightSide";

type MainProps = {};

const Main: React.FC<MainProps> = () => {
  return (
    <main className="w-full mt-6 flex flex-col md:flex-row">
      <MainLeftSide />

      <MainRightSide />
    </main>
  );
};
export default Main;
