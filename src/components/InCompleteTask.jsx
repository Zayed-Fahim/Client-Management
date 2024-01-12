import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "../smallComponents/card";
import Loader from "../utils/Loader";

const InCompleteTask = ({ setIsModalOpen }) => {
  const {
    isLoading,
    refetch,
    data: queryData,
  } = useQuery({
    queryKey: ["incompleteData"],
    queryFn: () =>
      fetch(
        "https://client-management-server.vercel.app/incomplete-tasks"
      ).then((res) => res.json()),
  });

  const incompleteData = queryData?.payload || [];
  return (
    <div className="bg-[#F2F4F7] min-w-[350px] py-5 flex flex-col gap-5">
      <div className="flex justify-between w-full px-2">
        <div className="flex gap-2 items-center">
          <div className="h-5 w-5 bg-[#D21010] rounded-tl-[50%] rounded-bl-[50%]"></div>
          <span className="text-[17px] font-semibold">Incomplete</span>
        </div>
        <span className="px-2 rounded bg-[#E8EEF3] font-semibold">0</span>
      </div>
      <div className="flex flex-col h-full gap-5 overflow-y-auto px-2 py-1.5">
        {isLoading ? (
          <Loader />
        ) : (
          incompleteData?.map((data, index) => (
            <Card
              key={index}
              data={data}
              refetch={refetch}
              setIsModalOpen={setIsModalOpen}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default InCompleteTask;
