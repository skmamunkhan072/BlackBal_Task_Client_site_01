import { Avatar, Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const MyTask = () => {
  //new date
  const defaultMonthAndDate = new Date().toLocaleString();
  const newDate = defaultMonthAndDate.split(",")[0].split("/").join("-");
  const newTime = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(newDate, newTime);
  return (
    <div className="min-h-[80.7vh]">
      <h1 className="text-2xl text-center font-bold pb-5">My Task</h1>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 rounded-lg dark:bg-gray-900 shadow-lg border dark:border-0 text-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                bordered={true}
              />
            </div>
            <div className="ml-5 text-start dark:text-gray-400">
              <p>12-23-01</p>
              <p>10:pm</p>
            </div>
          </div>

          <div className="text-start py-5 dark:text-gray-400">
            <h1 className="mb-5 text-3xl md:text-2xl font-bold dark:text-gray-300">
              This is title hading
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              tempore nihil accusamus aliquam enim placeat laborum rem
              perspiciatis eius ex corrupti vel provident deserunt eveniet
              architecto tenetur quas praesentium, iure veniam in sed minima.
              Rem distinctio inventore, enim dignissimos est dolores sunt
              asperiores aspernatur blanditiis amet, quis praesentium saepe
              corporis!
            </p>
          </div>

          <div className="flex justify-end items-center">
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="px-2 mt-5"
            >
              <Link to="/complete-task">Complete Task</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
