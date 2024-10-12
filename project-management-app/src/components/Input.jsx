import React from "react";

const Input = ({label,textarea,...props}) => {
  return (
    <>
      <p className="flex flex-col gap-1 my-4">
        <label>{label}</label>
        {!textarea?<input {...props}/>:<textarea {...props}/>}
      </p>
    </>
  );
};

export default Input;
