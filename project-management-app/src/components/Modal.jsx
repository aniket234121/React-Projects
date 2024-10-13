import React from "react";
import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";
const Modal = forwardRef(function ({ title, desc, btncaption, children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-52">
      <h2 className="text-xl font-bold text-red-500 mt-2 mb-2">{title}</h2>
      <p className="text-stone-500 ">{desc}</p>
      <p className="text-stone-500 ">press <strong>Esc</strong> to continue</p>
      <button onClick={()=>dialog.current.close()} className="mt-2 px-2 py-1 test-xs md:text-base rounded-md bg-slate-400 hover:bg-slate-500 hover:text-white">{btncaption}</button>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
