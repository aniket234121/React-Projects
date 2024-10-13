import React from "react";
import Button from "./Button";

const Sidebar = ({ onStartAdd ,projectsObj}) => {
  return (
    <aside className="w-1/3 bg-slate-900 px-8 py-8 md:w-72 rounded-r-xl text-cyan-50">
      <h2 className="font-bold md:text-xl mb-8 uppercase">Your Projects</h2>
      <Button onClick={onStartAdd}>Add Project</Button>
      <ul className="mt-7 ">
        {projectsObj.projects.map((item)=>{return <li>
          <button className="my-2  bg-slate-700 w-48 h-8 rounded-md text-left pl-2">{item.title}</button>
        </li>})}
      </ul>
    </aside>
  );
};

export default Sidebar;
