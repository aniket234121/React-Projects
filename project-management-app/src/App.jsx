import React from 'react'
import Sidebar from './components/Sidebar'
import NewProject from './components/NewProject'
const App = () => {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar></Sidebar>
      <NewProject></NewProject>
    </main>
  )
}

export default App