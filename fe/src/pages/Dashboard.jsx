import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";

const Dashboard = () => {
  return (
    <section className="min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Header />
          <div className="p-5">
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
