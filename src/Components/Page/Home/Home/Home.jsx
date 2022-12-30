import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import AddTask from "../../AddTask/AddTask";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div>
      <HeroSection />
      <AddTask />
    </div>
  );
};

export default Home;
