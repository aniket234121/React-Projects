import React from "react";
import { useState, useContext } from "react";
import imageData from "../data";
import { VscCircleLargeFilled } from "react-icons/vsc";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { ThemeContext } from "./ThemeContextProvider";

const ImageSlider = () => {
  const [currImg, setCurrImg] = useState(0);

  const { theme, toggleTheme } = useContext(ThemeContext);
  
  function handleClickPrev() {
    currImg === 0 ? setCurrImg(imageData.length - 1) : setCurrImg(currImg - 1);
  }
  function handleClicknext() {
    currImg === imageData.length - 1 ? setCurrImg(0) : setCurrImg(currImg + 1);
  }
  let val = theme === "dark" ? "bg-black" : "bg-white";
  let text=theme === "dark" ? "text-white " : "text-black"
  return (
    <>
      <button
        className={`fixed z-50 top-5 right-10 bg-red-500 py-1 px-2 ${
          text
        }`}
        onClick={toggleTheme}
      >
        {theme}
      </button>
      <div className={val}>
        <img
          className="w-[1300px] h-screen mx-auto"
          src={imageData[currImg].url}
          alt=""
        />
      </div>
      <MdKeyboardDoubleArrowLeft
        className={`text-7xl p-2  mx-3 absolute top-[50%] translate-y-[-50%] hover:text-blue-600 ${text}`}
        onClick={handleClickPrev}
      ></MdKeyboardDoubleArrowLeft>

      <MdKeyboardDoubleArrowRight
        className={`text-7xl p-2 absolute top-[50%] translate-y-[-50%] right-4 hover:text-blue-600 ${text}`}
        onClick={handleClicknext}
      ></MdKeyboardDoubleArrowRight>
      <ul className="absolute bottom-4 text-white right-[50%] flex gap-4 translate-x-[50%]">
        {imageData.map((item, index) => {
          return (
            <VscCircleLargeFilled
              key={index}
              className={index === currImg && "text-red-700"}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ImageSlider;
