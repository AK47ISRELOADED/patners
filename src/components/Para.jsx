import React from "react";
import { CiPlay1 } from "react-icons/ci";

const Para = ({ dimension }) => {
  const top = dimension.top;
  const left = dimension.left;
  const width = dimension.width;
  const text = dimension.text;
  const size = dimension.size;
  const Icon = dimension.icon;
  const image = dimension.Image;
  // console.log(text);
  return (
    <div
      className="hahaha  h-10 min-w-10 max-w-[25vw]  flex items-center relative"
      style={{ top: top, left: left }}
    >
      <div id="paraa" className=" flex items-center relative">
        <h1>{Icon}</h1>
        <h3
          className="font-semibold
       font-[patners1] "
          style={{ fontSize: size }}
        >
          {text}
        </h3>
        <img id="iimm" className=" absolute  " src={image} alt="" />
      </div>
    </div>
  );
};

export default Para;
