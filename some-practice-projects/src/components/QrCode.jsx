import React from "react";
import QRCode from "react-qr-code";
import DialogModal from "./DialogModal";
import { useRef } from "react";
const QrCode = () => {

  const modal = useRef();
  function showModal() {
    modal.current.open();
  }
  return (
    <div className="mx-auto my-7 w-fit">
      <h2 className="text-2xl font-bold uppercase my-3 text-center">
        QrCode Generator
      </h2>
      <QRCode value={"https://github.com/aniket234121/"} />
      <button 
      className="bg-slate-600 p-1 text-white m-3"
      onClick={showModal}>showModal</button>
      <DialogModal ref={modal}></DialogModal>
    </div>
  );
};

export default QrCode;
