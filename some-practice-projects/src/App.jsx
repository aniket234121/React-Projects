import React, { useEffect, useState } from "react";
import ImageSlider from "./components/ImageSlider";
import Products from "./components/Products";
import TreeView from "./components/TreeView";
import { TreeData } from "./data";
import QrCode from "./components/QrCode";
import ThemeContextProvider from "./components/ThemeContextProvider";
const App = () => {
  const [scrollPercentage, setScrollPercent] = useState("0px");

  function handleScroll() {
    const position =
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    setScrollPercent(`${Math.ceil(position)}vh`);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
    <div className={`h-screen fixed left-0 z-20 `}>
          <div
            className={` bg-red-500 h-2 absolute w-2 `}
            style={{ height: scrollPercentage }}
          >
            
          </div>
        </div>
      <ThemeContextProvider>
        <ImageSlider />
        <div className="flex">
          <TreeView TreeData={TreeData} />
          <Products></Products>
        </div>
        <QrCode />
        
      </ThemeContextProvider>
    </>
  );
};

export default App;
