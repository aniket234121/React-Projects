import React from 'react'

const Button = ({children,...props}) => {
  return (<button {...props} className="px-4 py-2 test-xs md:text-base rounded-md bg-slate-600 hover:bg-slate-400 hover:text-black font-bold">
    {children}
  </button>
  )
}

export default Button