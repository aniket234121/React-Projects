import React from 'react'
import TreeList from './TreeList'
const TreeView = ({TreeData}) => {
  return (
    <div className='h-screen w-1/5 bg-cyan-900 px-3 py-10 pl-11' >
      <h2 className='text-yellow-300 text-2xl font-bold'>TreeView</h2>
        <TreeList TreeData={TreeData}/>
    </div>
  )
}

export default TreeView