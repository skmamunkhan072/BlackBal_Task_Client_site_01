import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import LargeSpinner from "../../../Shear/LargeSpinner/LargeSpinner";
import AddTask from "../../AddTask/AddTask";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full h-[80.7vh] dark:bg-gray-900">
        <LargeSpinner />
      </div>
    );
  }
  return (
    <div>
      <HeroSection />
      <AddTask />
    </div>
  );
};

export default Home;
