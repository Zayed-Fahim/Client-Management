import React, { useState } from "react";
import Task from "./Task";

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`bg-white container mx-auto p-5 h-[90vh] border ${
        isModalOpen ? "opacity-20" : "opacity-100"
      }`}
    >
      <Task setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Tasks;
