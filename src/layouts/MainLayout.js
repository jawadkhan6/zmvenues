import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../pages/navbar";
import Sidebar from "../pages/sidebar";

function MainLayout() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" main_layout vh-100 ">
        {/* Begin::Sidebar */}
        <div className="sidebar bg-white shadow-sm">
          <div className="logo-nav">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="pointer"
              onClick={() => navigate("/")}
            ></img>
          </div>
          <Sidebar />
        </div>
        {/* End::Sidebar */}

        {/* Begin:Content Area */}
        <div className="content bg-seondary">
          <Header />
          <Outlet />
        </div>
        {/* End:Content Area */}
      </div>
    </>
  );
}

export default MainLayout;
