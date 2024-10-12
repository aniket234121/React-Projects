import React from "react";
import Input from "./Input";
const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end my-4 gap-4">
        <li>
          <button className="px-3 py-1 bg-slate-200">cancel</button>
        </li>
        <li>
          <button className="px-3 py-1 bg-slate-500 text-white font-bold">save</button>
        </li>
      </menu>
      <div>
        <Input label={"title"} textarea={false}/>
        <Input label={"description"} textarea={true}/>
        <Input label={"due date"} textarea={false}/>
      </div>
    </div>
  );
};

export default NewProject;
