import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "../smallComponents/card";
import Loader from "../utils/Loader";

const OverDateTask = ({ setIsModalOpen }) => {
  const {
    isLoading,
    refetch,
    data: queryData,
  } = useQuery({
    queryKey: ["overDateData"],
    queryFn: () =>
      fetch("https://client-management-server.vercel.app/over-date-tasks").then(
        (res) => res.json()
      ),
  });

  const overDateData = queryData?.payload || [];
  return (
    <div className="bg-[#F2F4F7] min-w-[350px] py-5 flex flex-col gap-5">
      <div className="flex justify-between w-full items-center px-2">
        <span className="text-[17px] font-semibold">OverDate</span>
        <span className="px-2 rounded bg-[#E8EEF3] font-semibold">0</span>
      </div>
      <div className="flex flex-col h-full gap-5 overflow-y-auto px-2 py-1.5">
        {isLoading ? (
          <Loader />
        ) : (
          overDateData?.map((data, index) => (
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

export default OverDateTask;
