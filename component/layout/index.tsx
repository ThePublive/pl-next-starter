import { Publisher } from "publive-cms-sdk";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface MainLayoutProps {
  children: React.ReactNode;
  publisher: Publisher;
}

const MainLayout = ({ children, publisher }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Publive | Starter App</title>
        <meta name="description" content="Publive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
        <Header publisher={publisher} />
        <main className="flex-1">{children}</main>
        <Footer publisher={publisher} />
      </div>
    </>
  );
};

export default MainLayout;
