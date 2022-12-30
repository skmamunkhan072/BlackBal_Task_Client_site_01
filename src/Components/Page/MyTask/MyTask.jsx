import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import LargeSpinner from "../../Shear/LargeSpinner/LargeSpinner";
import MYTaskCard from "./MYTaskCard";
import { useQuery } from "@tanstack/react-query";
import { server_url } from "../../Hooks/AllUrl/AllUrl";

const MyTask = () => {
  const { loading } = useContext(AuthContext);
  // my task data load server function
  const {
    isLoading,
    error,
    data: taskData = [],
    refetch,
  } = useQuery({
    queryKey: ["my-task"],
    queryFn: async () => {
      const res = await fetch(`${server_url}my-task`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("access_Token")}`,
        },
      });

      const data = await res.json();
      return data;
    },
  });
  // new date & time
  const defaultMonthAndDate = new Date().toLocaleString();
  const newDate = defaultMonthAndDate.split(",")[0].split("/").join("-");
  const newTime = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  refetch();
  // loading
  if (loading || isLoading) {
    return <LargeSpinner />;
  }
  return (
    <div className="min-h-[80.7vh]">
      <h1 className="text-2xl text-center font-bold pb-5">My Task</h1>
      {taskData.length ? (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {taskData.map((data) => (
            <MYTaskCard refetch={refetch} data={data} />
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
