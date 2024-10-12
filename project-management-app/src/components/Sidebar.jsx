import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/3 bg-slate-900 px-8 py-16 md:w-96 rounded-r-xl text-white">
      <h2 className="font-bold md:text-xl mb-8 uppercase">Your Projects</h2>
      <button className="px-4 py-2 test-xs md:text-base rounded-md bg-slate-600 hover:bg-slate-400 hover:text-black font-bold">
        Add Project
      </button>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
