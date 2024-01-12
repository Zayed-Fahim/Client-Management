import React, { useEffect, useState } from "react";
import Card from "../smallComponents/card";
import Loader from "../utils/Loader";

const UnderReviewTask = ({ setIsModalOpen }) => {
  const [underReviewData, setUnderReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://client-management-server.vercel.app/under-review-tasks"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const underReviewTask = await response.json();
      setUnderReviewData(underReviewTask);
    } catch (error) {
      console.error("Error fetching underReview tasks:", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
          underReviewData?.payload?.map((data, index) => (
            <Card key={index} data={data} setIsModalOpen={setIsModalOpen} />
          ))
        )}
      </div>
    </div>
  );
};

export default UnderReviewTask;
