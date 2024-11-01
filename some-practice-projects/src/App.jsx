import React from 'react'
import ImageSlider from './components/ImageSlider'
import Products from './components/Products'
import TreeView from './components/TreeView'
import { TreeData } from './data'
const App = () => {
  return (
  <>
   {/* <ImageSlider/>
   <Products></Products> */}
  
  <TreeView TreeData={TreeData}></TreeView> 
   </>
  )
}

export default App