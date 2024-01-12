import React, { useEffect, useState } from "react";
import Card from "../smallComponents/card";
import Loader from "../utils/Loader";

const CompletedTask = ({ setIsModalOpen }) => {
  const [completedData, setCompletedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://client-management-server.vercel.app/completed-tasks"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const completedTask = await response.json();
      setCompletedData(completedTask);
    } catch (error) {
      console.error("Error fetching completed tasks:", error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-[#F2F4F7] min-w-[350px] py-5 flex flex-col gap-5">
      <div className="flex justify-between w-full items-center px-2">
        <span className="text-[17px] font-semibold">Completed</span>
        <span className="px-2 rounded bg-[#E8EEF3] font-semibold">0</span>
      </div>
      <div className="flex flex-col h-full gap-5 overflow-y-auto px-2 py-1.5">
        {isLoading ? (
          <Loader />
        ) : (
          completedData?.payload?.map((data, index) => (
            <Card key={index} data={data} setIsModalOpen={setIsModalOpen} />
          ))
        )}
      </div>
    </div>
  );
};

export default CompletedTask;
