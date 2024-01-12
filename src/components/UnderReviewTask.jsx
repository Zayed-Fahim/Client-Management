import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "../smallComponents/card";
import Loader from "../utils/Loader";

const UnderReviewTask = ({ setIsModalOpen }) => {
  const {
    isLoading,
    refetch,
    data: queryData,
  } = useQuery({
    queryKey: ["underReviewData"],
    queryFn: () =>
      fetch(
        "https://client-management-server.vercel.app/under-review-tasks"
      ).then((res) => res.json()),
  });

  const underReviewData = queryData?.payload || [];
  return (
    <div className="bg-[#F2F4F7] min-w-[350px] py-5 flex flex-col gap-5">
      <div className="flex justify-between w-full items-center px-2">
        <span className="text-[17px] font-semibold">Under Review</span>
        <span className="px-2 rounded bg-[#E8EEF3] font-semibold">0</span>
      </div>
      <div className="flex flex-col gap-5 h-full overflow-y-auto px-2 py-1.5">
        {isLoading ? (
          <Loader />
        ) : (
          underReviewData?.map((data, index) => (
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

export default UnderReviewTask;
