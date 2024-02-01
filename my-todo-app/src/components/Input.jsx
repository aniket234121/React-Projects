import React, { useState } from 'react'

const Input = () => {

  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let val = event.target.addList.value;
    if(val!=='')
    {
      setList([...list,val]);
    }
    
    event.target.addList.value = ""
  }
  const updateList = (event) => {
    setList(list.filter(item=>(item!==event.target.value)))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='addList' />
        <button type="submit" name='submit'>+</button>
      </form>
      <ul>{list.map(item => (<li key={Math.random()}>{item} <button value={item} onClick={updateList}>-</button> </li>))}
      </ul>
    </>
  )
}

export default Input