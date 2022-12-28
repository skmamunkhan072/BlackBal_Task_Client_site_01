import { Button, Label, Textarea } from "flowbite-react";
import React, { useState } from "react";

const AddTask = () => {
  const [taskImgFile, setTaskImgFile] = useState();
  // handel task img

  // handel form
  const handelTaskForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const taskMessage = form.taskMessage.value;

    console.log(taskImgFile, "heloo");
  };
  return (
    <div>
      <form onSubmit={handelTaskForm}>
        <div id="textarea" className="py-20">
          <div class="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
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
                  <span class="font-semibold">
                    Click to upload your working img
                  </span>{" "}
                  or drag and drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  PNG or JPG (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                onChange={(e) => setTaskImgFile(e.target.files)}
              />
            </label>
          </div>

          <div className="mb-2 text-start">
            <Label
              htmlFor="comment"
              value="Add Your Task"
              className="text-2xl"
            />
          </div>
          <Textarea
            id="comment"
            className="resize-none"
            placeholder="Enter Your message..."
            required={true}
            rows={8}
            name="taskMessage"
          />
          <div className="mt-10">
            <Button type="submit" color="purple">
              submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
