import React from "react";
import Main from "../components/home-main-content/Main";
import HomeTopbar from "../components/home-topbar/HomeTopbar";
import PageLayout from "../components/layout/PageLayout";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <PageLayout title="HOME PAGE" description="The home page">
      <div className="w-full min-h-full">
        <HomeTopbar />
        <Main />
      </div>
    </PageLayout>
  );
};
export default Home;
