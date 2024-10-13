import React from "react";
import projectImg from "../assets/writer.png";
import Button from "./Button";
const NoProjectSelectd = ({ onStartAdd }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={projectImg}
        alt="pen paper"
        className="w-20 h-20 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 ">
        No project Selected
      </h2>
      <p className="text-stone-500 mb-4 mt-4">
        select a project or get started with new one.
      </p>
      <p className="mt-7 text-white">
        <Button onClick={onStartAdd}>New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelectd;
