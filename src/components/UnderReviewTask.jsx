import React from "react";
import incompleteData from "../data/incompleteData";
import Card from "../smallComponents/card";

const UnderReviewTask = () => {
  return (
    <div className="bg-[#F2F4F7] min-w-[350px] py-5 flex flex-col gap-5">
      <div className="flex justify-between w-full items-center px-2">
        <span className="text-[17px] font-semibold">Under Review</span>
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

export default UnderReviewTask;
