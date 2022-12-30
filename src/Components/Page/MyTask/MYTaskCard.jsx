import { Avatar, Button } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { server_url } from "../../Hooks/AllUrl/AllUrl";
import { BsThreeDotsVertical } from "react-icons/bs";

const MYTaskCard = ({ data }) => {
  // console.log(data);
  const navigeate = useNavigate();
  const [smallCard, setSmallCard] = useState(false);

  const {
    _id,
    newDate,
    newTime,
    taskMessage,
    taskTitle,
    uploadImgLink,
    complete,
  } = data;
  const handelCompletTask = (id) => {
    console.log(id);
    fetch(`${server_url}complete-task`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
      body: JSON.stringify({ id, complete: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("🦄 Task complete successful!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigeate("/complete-task");
        }
      });
  };

  return (
    <div>
      <div className="p-5 pb-14 rounded-lg dark:bg-gray-900 shadow-lg border dark:border-0 text-gray-700 relative h-[100%]">
        <div className="flex justify-between items-start">
          <div>
            <Avatar
              img={
                uploadImgLink
                  ? uploadImgLink
                  : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              }
              rounded={true}
              bordered={true}
            />
          </div>
          <div className="ml-5 text-start dark:text-gray-400 flex justify-center items-start">
            <div>
              <p>{newDate}</p>
              <p>{newTime}</p>
            </div>
            <div
              onClick={() => setSmallCard(!smallCard)}
              className="ml-5  p-1 rounded-full cursor-pointer"
            >
              <BsThreeDotsVertical className="text-2xl" />
            </div>
          </div>
        </div>

        <div
          className={`text-white absolute top-20 right-10 border w-[200px] bg-gray-600 py-10 rounded-lg ${
            smallCard ? "" : "hidden text-start"
          }`}
        >
          <h1 className="text-start ml-3 py-2 cursor-pointer">Edit</h1>
          <h1 className="text-start ml-3 py-2 cursor-pointer">Delete</h1>
        </div>

        <div className="text-start py-5 dark:text-gray-400">
          <h1 className="mb-5 text-3xl md:text-2xl font-bold dark:text-gray-300">
            {taskTitle}
          </h1>
          <p>{taskMessage}</p>
        </div>

        <div className="flex justify-end items-center absolute bottom-5 right-6">
          {complete === false && (
            <Button
              onClick={() => handelCompletTask(_id)}
              gradientDuoTone="purpleToPink"
              className="px-2 mt-5"
            >
              Complete Task
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MYTaskCard;
