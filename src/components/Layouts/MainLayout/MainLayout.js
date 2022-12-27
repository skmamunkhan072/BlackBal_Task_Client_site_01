import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Shear/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="dark:bg-slate-800">
        <div className="w-[1400px] mx-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
