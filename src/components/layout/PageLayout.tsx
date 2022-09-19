import Head from "next/head";
import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

type PageLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="w-screen h-screen relative">
      <Head>
        <title>{`MKOBO - ${title}`}</title>
        <link rel="icon" href="/logo.png" />
        {description && <meta name="description" content={description} />}
      </Head>
      <Header />
      <main className="w-full h-[88vh] flex ">
        <Sidebar />
        <section className="-z-[999] h-full w-full lg:w-[88%] px-6 py-2 overflow-y-auto overflow-x-hidden !scrollbar-thumb-blue-500 hover:!scrollbar-thumb-blue-700  !scrollbar-thin">
          {children}
        </section>
      </main>
    </div>
  );
};
export default PageLayout;
