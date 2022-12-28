import { Button } from "flowbite-react";
import React from "react";

const AddTask = () => {
  return (
    <div className="min-h-[80.7vh]">
      <h1 className="text-2xl font-bold">Add your Task</h1>
      <div className="pt-10">
        <form>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start text-2xl"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="10"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
            placeholder="Enter your message..."
          ></textarea>
        </form>

        <div>
          <Button color="purple" className="px-5 mt-5" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
