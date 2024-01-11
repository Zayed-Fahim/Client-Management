import React from "react";
import InCompleteTask from "./InCompleteTask";
import ToDoTask from "./ToDoTask";
import DoingTask from "./DoingTask";
import UnderReviewTask from "./UnderReviewTask";
import CompletedTask from "./CompletedTask";
import OverDateTask from "./OverDateTask";

const Task = ({ setIsModalOpen }) => {
  return (
    <div className="flex gap-5 h-full overflow-x-auto">
      <InCompleteTask setIsModalOpen={setIsModalOpen} />
      <ToDoTask setIsModalOpen={setIsModalOpen} />
      <DoingTask setIsModalOpen={setIsModalOpen} />
      <UnderReviewTask setIsModalOpen={setIsModalOpen} />
      <CompletedTask setIsModalOpen={setIsModalOpen} />
      <OverDateTask setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Task;
