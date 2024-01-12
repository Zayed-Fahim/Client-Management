import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import "../css/button.css";
import "../css/updateDataLoader.css";

const AttachmentsModal = (
  {
    closeModal,
    setSelectedFiles,
    isLoading,
    isUpdated,
    formRef,
    selectedFiles,
    handleUpdateTask,
  },
  ref
) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {};
  const handleFilesChange = (event) => {
    setSelectedFiles(event?.target?.files);
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
