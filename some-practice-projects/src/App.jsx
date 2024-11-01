import React from "react";
import ImageSlider from "./components/ImageSlider";
import Products from "./components/Products";
import TreeView from "./components/TreeView";
import { TreeData } from "./data";
import QrCode from "./components/QrCode";
const App = () => {
  return (
    <>
     
      <ImageSlider />
      <div className="flex">
        <TreeView TreeData={TreeData} />
        <Products></Products>
      </div>
      <QrCode/>
    </>
  );
};

export default App;
