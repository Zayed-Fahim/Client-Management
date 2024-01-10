import React from "react";
import incompleteData from "../data/incompleteData";
import Card from "../smallComponents/card";

const InCompleteTask = () => {
  return (
    <div className="bg-[#F2F4F7] min-w-[350px] py-5 flex flex-col gap-5">
      <div className="flex justify-between w-full px-2">
        <div className="flex gap-2 items-center">
          <div className="h-5 w-5 bg-[#D21010] rounded-tl-[50%] rounded-bl-[50%]"></div>
          <span className="text-[17px] font-semibold">Incomplete</span>
        </div>
        <span className="px-2 rounded bg-[#E8EEF3] font-semibold">0</span>
      </div>
      <div className="flex flex-col gap-5 overflow-y-auto px-2 py-1.5">
        {incompleteData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default InCompleteTask;
