import React from "react";

const Mini = ({ text, num }) => {
  return (
    <div className="relative mt-20 ml-12">
      <div className=" w-auto flex flex-col ">
        <h1 className="text-white text-5xl font-[patners2] ">{num}</h1>
        <h4 className="text-white text-s font-[patners1]">{text}</h4>
      </div>
    </div>
  );
};

export default Mini;
