import React from "react";
import ListItem from "./ListItem";
const TreeList = ({ TreeData =[]}) => {
  
  return (
    <ul className="bg-cyan-900 text-white p-2">    
      {TreeData.map((item,index)=>{
        return <ListItem val={item}/>
      })}
    </ul>
  );
};

export default TreeList;
