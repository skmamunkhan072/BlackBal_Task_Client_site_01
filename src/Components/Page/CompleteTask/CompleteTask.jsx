import { useQuery } from "@tanstack/react-query";
import React from "react";
import { server_url } from "../../Hooks/AllUrl/AllUrl";
import LargeSpinner from "../../Shear/LargeSpinner/LargeSpinner";
import MYTaskCard from "../MyTask/MYTaskCard";

const CompleteTask = () => {
  // complete Task data load server
  const {
    data: taskData = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["complete-task"],
    queryFn: async () => {
      const res = await fetch(`${server_url}complete-task`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("access_Token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-[80.7vh] dark:bg-gray-900">
        <LargeSpinner />
      </div>
    );
  }
  return (
    <div className="min-h-[80.7vh]">
      <h1 className="text-2xl text-center font-bold pb-5">ComPlete Task</h1>
      {taskData.length ? (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {taskData.map((data) => (
            <MYTaskCard key={data?._id} refetch={refetch} data={data} />
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
