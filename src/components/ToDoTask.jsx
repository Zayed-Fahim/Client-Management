import React from "react";
import incompleteData from "../data/incompleteData";
import Card from "../smallComponents/card";

const ToDoTask = ({ setIsModalOpen }) => {
  return (
    <div className="bg-[#F2F4F7] min-w-[350px] py-5 flex flex-col gap-5">
      <div className="flex justify-between items-center w-full px-2">
        <div className="flex gap-2 items-center">
          <div className="h-5 w-5 bg-[#00B5FF] rounded-tl-[50%] rounded-bl-[50%]"></div>
          <span className="text-[17px] font-semibold">To Do</span>
        </div>
        <span className="px-2 rounded bg-[#E8EEF3] font-semibold">0</span>
      </div>
      <div className="flex flex-col gap-5 overflow-y-auto px-2 py-1.5">
        {incompleteData.map((data, index) => (
          <Card key={index} data={data} setIsModalOpen={setIsModalOpen} />
        ))}
      </div>
    </div>
  );
};

export default ToDoTask;
