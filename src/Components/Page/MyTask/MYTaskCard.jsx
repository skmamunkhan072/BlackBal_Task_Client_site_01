import { Avatar, Button } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { server_url } from "../../Hooks/AllUrl/AllUrl";
import { BsThreeDots } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import LargeSpinner from "../../Shear/LargeSpinner/LargeSpinner";

const MYTaskCard = ({ data, refetch }) => {
  const { setEditTaskDataLoad, loading } = useContext(AuthContext);
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
    fetch(`${server_url}task-complete-no-complete`, {
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
  // Edit Task function
  const handelEditTask = (id) => {
    fetch(`${server_url}task-edit/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setEditTaskDataLoad(data);
        navigeate("/");
      });
  };

  // delete task function handel
  const handelDeleteTask = (id) => {
    console.log("Deleted", id);
    fetch(`${server_url}task-delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("🦄 Task add successful!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  // Task No complete function add
  const handelNOCompleteTask = (id) => {
    fetch(`${server_url}task-complete-no-complete`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
      body: JSON.stringify({ id, complete: false }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
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
          navigeate("/media");
        }
      });
  };
  if (loading) {
    return <LargeSpinner />;
  }
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
              className="ml-5  p-2 rounded-full cursor-pointer hover:bg-gray-800"
            >
              <BsThreeDots className="text-2xl" />
            </div>
          </div>
        </div>

        <div
          className={`z-[99] text-white absolute top-14 px-2 pt-3  right-8 w-[150px] h-[150px] bg-gray-800  rounded-lg ${
            smallCard ? "" : "hidden text-start"
          }`}
        >
          {complete === false && (
            <h1
              onClick={() => handelEditTask(_id)}
              className="text-start pl-1 py-1 cursor-pointer flex justify-start items-center hover:bg-gray-500 rounded-[0.3rem] mb-2"
            >
              <BiEdit className="text-2xl mr-2" /> Edit
            </h1>
          )}
          <h1
            onClick={() => handelDeleteTask(_id)}
            className="text-start pl-1 py-1 cursor-pointer flex justify-start items-center hover:bg-gray-500 rounded-[0.3rem] mb-2"
          >
            <MdDeleteSweep className="text-2xl mr-2" /> Delete
          </h1>
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
          {complete === true && (
            <Button
              onClick={() => handelNOCompleteTask(_id)}
              gradientDuoTone="purpleToPink"
              className="px-2 mt-5"
            >
              NO Complete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MYTaskCard;
