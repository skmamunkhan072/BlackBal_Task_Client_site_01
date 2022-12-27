import { Label, Textarea } from "flowbite-react";
import React from "react";

const AddTask = () => {
  return (
    <div>
      <div id="textarea" className="py-20">
        <div className="mb-2 text-start">
          <Label htmlFor="comment" value="Add Your Task" className="text-2xl" />
        </div>
        <Textarea
          id="comment"
          className="resize-none"
          placeholder="Enter Your message..."
          required={true}
          rows={8}
        />
      </div>
    </div>
  );
};

export default AddTask;
