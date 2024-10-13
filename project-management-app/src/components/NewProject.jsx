import React from "react";
import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
const NewProject = ( {onAdd}) => {
  const dialog=useRef()
  const title=useRef()
  const description=useRef()
  const dueDate=useRef()

  function handleSave()
  { let enteredTitle=title.current.value
    let enteredDescription=description.current.value
    let enteredDueDate=dueDate.current.value

    //validation....
    if(enteredTitle.trim()===""||enteredDescription.trim()===""||enteredDueDate.trim()==="")
    {
      dialog.current.open();
      return;
    }
    onAdd({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate
    })
  }
  return (
    <>
    <Modal ref={dialog}><h2>Error details</h2></Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end my-4 gap-4">
        <li>
          <button className="px-3 py-1 bg-slate-200">cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="px-3 py-1 bg-slate-500 text-white font-bold">save</button>
        </li>
      </menu>
      <div>
        <Input ref={title} label={"title"} textarea={false}/>
        <Input ref={description} label={"description"} textarea={true}/>
        <Input type="date" ref={dueDate} label={"due date"} textarea={false}/>
      </div>
    </div>
    </>
  );
};

export default NewProject;
