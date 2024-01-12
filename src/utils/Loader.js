import React from "react";
import "../css/loader.css";

const Loader = () => {
  return (
    <div className="w-full h-full relative">
      <div className="loader relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default Loader;
