import React from "react";
import { useLoaderData } from "react-router-dom";
import MYTaskCard from "../MyTask/MYTaskCard";

const CompleteTask = () => {
  const taskData = useLoaderData();
  return (
    <div className="min-h-[80.7vh]">
      <h1 className="text-2xl text-center font-bold pb-5">ComPlete Task</h1>
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

export default CompleteTask;
