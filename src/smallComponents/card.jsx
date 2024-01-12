import React, { useRef } from "react";
import { FaLayerGroup } from "react-icons/fa6";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RiWechatLine } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import AttachmentsModal from "../utils/AttachmentsModal";

const Card = ({ data, setIsModalOpen, refetch }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    modalRef.current.showModal();
  };
  const closeModal = () => {
    setIsModalOpen(false);
    modalRef.current.close();
  };
  const attachments = localStorage.getItem("attachments");
  return (
    <div className="flex flex-col gap-4 w-full border p-2 bg-white rounded">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="h-7 w-7 rounded-[50%]"
            src={data?.clientInfo?.image}
            alt={data?.clientInfo?.name}
          />
          <span className="text-sm font-semibold">
            {data?.clientInfo?.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="h-7 w-7 rounded-[50%]"
            src={data?.myInfo?.image}
            alt={data?.myInfo?.name}
          />
          <span className="text-sm font-semibold">{data?.myInfo?.name}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaLayerGroup />
          <p className="">{data?.details?.text.slice(0, 25)}...</p>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 bg-[#F2F4F7] rounded">
          <LiaClipboardListSolid />
          <p className="text-sm font-semibold">
            {data?.details?.task_remaining}/{data?.details?.total_task}
          </p>
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-4">
        <div className="flex gap-3 items-center">
          {data?.contributors.map((contributor, index) => (
            <img
              key={index}
              className="h-7 w-7 rounded-[50%]"
              src={contributor?.image}
              alt={contributor?.name}
            />
          ))}
        </div>
        <div className="h-8 w-8 bg-[#F2F4F7] rounded-[50%] flex justify-center items-center ">
          <p className="font-semibold text-sm">
            {data?.notifications >= 12 ? 12 : data?.notifications}
            {data?.notifications > 12 && "+"}
          </p>
        </div>

        <div className="flex gap-1 items-center">
          <RiWechatLine />
          <p className="font-sm font-semibold">{data?.messages}</p>
        </div>

        <div className="flex gap-1 items-center">
          <button onClick={() => openModal()}>
            <GrAttachment />
          </button>
          <p className="font-sm font-semibold">
            {data?.attachments ? attachments : 0}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <IoCalendarOutline />
          <p className="text-sm">
            {new Date(data?.date).toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <AttachmentsModal data={data} ref={modalRef} closeModal={closeModal} />
    </div>
  );
};

export default Card;
