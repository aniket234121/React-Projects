import React from "react";
import Button from "./Button";

const Sidebar = ({ onStartAdd }) => {
  return (
    <aside className="w-1/3 bg-slate-900 px-8 py-8 md:w-72 rounded-r-xl text-white">
      <h2 className="font-bold md:text-xl mb-8 uppercase">Your Projects</h2>
      <Button onClick={onStartAdd}>Add Project</Button>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
