import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Input = () => {

  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let val = event.target.addList.value;
    if(val!=='')
    {
      setList(prevList=>[...prevList,val]);
    }
    
    event.target.addList.value = ""
  }
  const removeList = (event) => {
    setList(prevList=>prevList.filter(item=>(item!==event.target.value)))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='addList' id='todo' placeholder='Enter the task to do'/>
        <button type="submit" name='submit' className='btn'>+</button>
      </form>
      <ul className='list'>{list.map(item => (<li key={uuidv4() }><p>{item}</p><button className='btn btn-todo' value={item} onClick={removeList}>-</button></li>))}
      </ul>
    </>
  )
}

export default Input