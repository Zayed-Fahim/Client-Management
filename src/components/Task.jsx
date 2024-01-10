import React from "react";
import InCompleteTask from "./InCompleteTask";
import ToDoTask from "./ToDoTask";
import DoingTask from "./DoingTask";
import UnderReviewTask from "./UnderReviewTask";
import CompletedTask from "./CompletedTask";
import OverDateTask from "./OverDateTask";

const Task = () => {
  return (
    <div className="flex gap-5 h-full overflow-x-auto">
      <InCompleteTask />
      <ToDoTask />
      <DoingTask />
      <UnderReviewTask />
      <CompletedTask />
      <OverDateTask />
    </div>
  );
};

export default Task;
