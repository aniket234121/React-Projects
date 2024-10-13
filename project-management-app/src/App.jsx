import React from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelectd from "./components/NoProjectSelectd";
const App = () => {
  const [projectslected, setProject] = useState({
    projectselectedId: undefined,
    projects: [],
  });
  let content;
  if (projectslected.projectselectedId === undefined) {
    content = <NoProjectSelectd onStartAdd={handleAddNewProject} />;
  } else if (projectslected.projectselectedId === null) {
    content = <NewProject onAdd={handleAddProject}/>;
  }

  function handleAddNewProject() {
    setProject((prevState) => {
      return {
        ...prevState,
        projectselectedId: null,
      };
    });
  }
  function handleAddProject(projectData){
    setProject(prevstate=>{
      const newProject={
        ...projectData,
        id:Math.random()
      };
      return {
        ...prevstate,
        projectselectedId:undefined,
        projects:[...prevstate.projects,newProject]
      }
    })
    
  }
  
  return (
    <main className="h-screen my-4 flex gap-8">
      <Sidebar onStartAdd={handleAddNewProject} projectsObj={projectslected}></Sidebar>
      {content}
    </main>
  );
};

export default App;
