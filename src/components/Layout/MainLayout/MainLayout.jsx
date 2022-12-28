import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Shear/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="dark:bg-gray-800 py-10">
        <div className="max-w-[1400px] dark:bg-gray-800 dark:text-white mx-auto px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
