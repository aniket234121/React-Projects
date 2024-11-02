import React from "react";
import { useRef, useImperativeHandle, forwardRef } from "react";

const DialogModal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      
    };
  });

  return (
    <dialog ref={dialog} className="w-[50vw] h-[50vh]">
      <h1>Hello</h1>
      <button
      className="bg-red-600 p-2 w-12 text-white absolute top-0 right-0 hover:bg-red-700"
       onClick={()=>dialog.current.close()}>close</button>
    </dialog>
  );
});

export default DialogModal;
