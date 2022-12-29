import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import { HandelImgHost } from "../../Hooks/AllFunction/AllFunction";
import { server_url } from "../../Hooks/AllUrl/AllUrl";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const [uploadFile, setUploadFile] = useState("");
  const [imgHostLink] = HandelImgHost(uploadFile);

  //new date
  const defaultMonthAndDate = new Date().toLocaleString();
  const newDate = defaultMonthAndDate.split(",")[0].split("/").join("-");
  const newTime = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(newDate, newTime);
  // handel submit form function
  const handelTaskForm = (e) => {
    e.preventDefault();
    const taskMessage = e.target.message.value;
    const taskTitle = e.target.title.value;
    const uploadImgLink = imgHostLink?.display_url;
    console.log(taskMessage, uploadImgLink);

    const addTaskInfoData = {
      taskMessage,
      uploadImgLink,
      taskTitle,
      newDate,
      newTime,
      userEmail: user?.email,
    };

    fetch(`${server_url}add-task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addTaskInfoData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="min-h-[80.7vh] ">
      <h1 className="text-2xl font-bold">Add your Task</h1>
      <div className="pt-10">
        <form onSubmit={handelTaskForm}>
          <div class="mb-6">
            <label
              for="task-title"
              class="block mb-2 text-lg text-start font-medium text-gray-900 dark:text-white"
            >
              Add your Task title
            </label>
            <input
              type="text"
              name="title"
              id="task-title"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add your task title....."
              required
            />
          </div>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start text-lg"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="12 "
                name="message"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                placeholder="Enter your message..."
                required
              ></textarea>
            </div>

            {imgHostLink ? (
              <div>
                <h1 className="mb-2 text-sm font-medium text-gray-900 dark:text-white text-start text-lg">
                  Add img successful
                </h1>
                <img
                  src={imgHostLink?.display_url}
                  alt="Upload img"
                  className="h-[263px] rounded-lg"
                />
              </div>
            ) : (
              <div>
                <h1 class="block mb-3 text-sm font-medium text-gray-900 dark:text-white text-start text-lg">
                  Add Task Img
                </h1>
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span>
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        PNG & JPG (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      onChange={(e) => setUploadFile(e.target.files)}
                      accept="productImages/jpg, productImages/png"
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
          <div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="px-5 mt-5"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
