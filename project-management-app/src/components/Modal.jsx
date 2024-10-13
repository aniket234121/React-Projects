import React from 'react'
import { useRef,useImperativeHandle,forwardRef} from 'react'
import { createPortal } from 'react-dom'
const Modal = forwardRef(function({children},ref){
    const dialog=useRef()
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal(); 
            }
        }
    })

  return createPortal(
  <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal")
  )
})

export default Modal