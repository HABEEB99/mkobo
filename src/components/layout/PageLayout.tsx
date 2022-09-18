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
    <div className="w-screen h-screen">
      <Head>
        <title>{`MKOBO - ${title}`}</title>
        <link rel="icon" href="/logo.png" />
        {description && <meta name="description" content={description} />}
      </Head>
      <Header />
      <main>
        <section>
          <Sidebar />
        </section>
        <section>{children}</section>
      </main>
    </div>
  );
};
export default PageLayout;
