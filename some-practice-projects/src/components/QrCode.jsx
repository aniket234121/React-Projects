import React from 'react'
import QRCode from "react-qr-code"
const QrCode = () => {
  return (
   <div className='mx-auto my-7 w-fit'>
    <h2 className='text-2xl font-bold uppercase my-3 text-center'>QrCode Generator</h2>
    <QRCode value={"https://github.com/aniket234121/"}/>
   </div>
  )
}

export default QrCode