import React from 'react'
import Accordions from './components/Accordions'
import Stars from './components/Stars'
import ImageSlider from './components/ImageSlider'
import "./index.css"
const App = () => {
  return (
  <>
  <Accordions></Accordions>  
  <h2 className='text-xl my-5'>Rating reviews</h2>
  <Stars count={10}></Stars>
  <ImageSlider></ImageSlider>
  </>
  )
}

export default App