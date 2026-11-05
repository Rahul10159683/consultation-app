import React from "react";

const Container = ({ children, className }) => {
  return (
    <>
      <div className="mb-4 flex items-center justify-center ">
        <div className={`w-full px-5 py-3 ${className ? `${className}` : ""}`}>
          <div className="px-10 py-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Container;
