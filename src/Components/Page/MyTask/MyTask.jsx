import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import LargeSpinner from "../../Shear/LargeSpinner/LargeSpinner";
import MYTaskCard from "./MYTaskCard";

const MyTask = () => {
  const taskData = useLoaderData();
  const { loading } = useContext(AuthContext);
  // new date & time
  const defaultMonthAndDate = new Date().toLocaleString();
  const newDate = defaultMonthAndDate.split(",")[0].split("/").join("-");
  const newTime = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  // loading
  if (loading || !taskData) {
    return <LargeSpinner />;
  }
  console.log(newDate, newTime);
  return (
    <div className="min-h-[80.7vh]">
      <h1 className="text-2xl text-center font-bold pb-5">My Task</h1>
      {taskData.length ? (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {taskData.map((data) => (
            <MYTaskCard data={data} />
          ))}
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-center dark:text-gray-600 mt-10 font-bold">
            Na Data found
          </h1>
        </>
      )}
    </div>
  );
};

export default MyTask;
