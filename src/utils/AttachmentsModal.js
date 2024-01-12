import React, { forwardRef, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../css/updateDataLoader.css";
import "../css/button.css";

const AttachmentsModal = ({ closeModal, data }, ref) => {
  const { register, handleSubmit } = useForm();
  const formRef = useRef(null);

  const [selectedFiles, setSelectedFiles] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onSubmit = (data) => {};
  const handleFilesChange = (event) => {
    setSelectedFiles(event?.target?.files);
  };
  const handleUpdateTask = async () => {
    setIsLoading(true);
    if (!selectedFiles || selectedFiles.length === 0) {
      window.confirm("Please select a file");
      setIsLoading(false);
      return;
    }
    try {
      const filesData = Array.from(selectedFiles).map((file) => ({
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        webkitRelativePath: file.webkitRelativePath,
        size: file.size,
        type: file.type,
      }));
      const response = await fetch(
        `https://client-management-server.vercel.app/${data.slug}/${data.assigned_for}/${data.task_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ attachments: filesData }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        if (result) {
          setIsUpdated(true);
          formRef.current.reset();
        }
      } else {
        console.error("Failed to update task:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating task:", error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setIsUpdated(false);
        closeModal();
      }, 2000);
    }
  };
  return (
    <dialog
      ref={ref}
      className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400] p-12"
    >
      {isLoading && isUpdated ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="updateDataLoader" />
          <p className="font-semibold text-xl">Updating Data</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[2/3] flex flex-col gap-5"
          ref={formRef}
        >
          <div>
            <input
              className="w-full"
              type="file"
              {...register("files")}
              onChange={handleFilesChange}
              multiple
            />
          </div>
          <div>
            {selectedFiles?.length > 0 ? (
              <div>
                <div className="flex justify-between items-center font-semibold">
                  <p>File Name</p>
                  <p>File Type</p>
                </div>
                <div>
                  <ul>
                    {Array.from(selectedFiles).map((file, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span>{file?.name}</span>
                        <span>{file?.name.split(".")[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p>No files Select</p>
            )}
          </div>
          <div className="flex items-center gap-10">
            <button onClick={handleUpdateTask} className="button" type="submit">
              Upload
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                closeModal();
                formRef.current.reset();
              }}
              className="button"
              type="submit"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </dialog>
  );
};

export default forwardRef(AttachmentsModal);
