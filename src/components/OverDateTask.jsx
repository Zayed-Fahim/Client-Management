import React, { useEffect, useState } from "react";
import Card from "../smallComponents/card";
import Loader from "../utils/Loader";

const OverDateTask = ({ setIsModalOpen }) => {
  const [overDateData, setOverDateData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://client-management-server.vercel.app/over-date-tasks"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const overDateTask = await response.json();
        setOverDateData(overDateTask);
      } catch (error) {
        console.error("Error fetching overDate tasks:", error.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 3500);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);
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
          overDateData?.payload?.map((data, index) => (
            <Card key={index} data={data} setIsModalOpen={setIsModalOpen} />
          ))
        )}
      </div>
    </div>
  );
};

export default OverDateTask;
