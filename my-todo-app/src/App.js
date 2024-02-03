import React from 'react'
import Input from './components/Input'

const App = () => {


  return (
    <>
      <h1 className='title'>Enter task To - do</h1>
      <div className='container'>
        <div className='todoBanner'>
          <Input></Input>
        </div>
      </div>
    </>

  )
}

export default App