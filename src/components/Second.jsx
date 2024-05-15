import React from "react";
import Mini from "./Mini";

const Second = () => {
  return (
    <div className="min-h-screen min-w-full bg-[#1E1F24] relative overflow-hidden">
      <img
        className="scale-[0.9] absolute  -bottom-8 right-6"
        src="./assets/finger man.svg"
        alt=""
      />
      <h4 className="text-white text-3xl leading-8 font-[patners2] ml-12">
        causing good and making solutions for <br /> clients, contracts for
        partners and <br /> happiness for us. It’s called the <br />{" "}
        CreativeCrew partnership program.
      </h4>
      <Mini text={"patners"} num={"69"} />
      <Mini text={"on the market"} num={"5 years"} />
      <Mini text={"projects"} num={"300+"} />
    </div>
  );
};

export default Second;
