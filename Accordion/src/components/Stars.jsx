import React from "react";
import { GoStarFill } from "react-icons/go";
import { useState } from "react";
const Stars = ({ count }) => {
  const [starPos, setStarPos] = useState(-1);
  const [hoverStar, setHoverStar] = useState(-1);
  const stars = Array.from({ length: count }, (_, i) => i + 1);

  function handleClick(index) {
    setStarPos(index);
  }
  function handleMouseOver(index) {
    setHoverStar(index);
  }
  function handleMouseLeave(index) {
    setHoverStar(-1);
  }

  return (
    <menu className="flex gap-4 text-3xl">
      {stars.map((item, index) => {
        console.log(starPos);
        return (
          <GoStarFill
            className={
              starPos != -1
                ? starPos >= index && "text-yellow-400"
                : hoverStar >= index
                ? "text-yellow-300 "
                : "text-black-400"
            }
            key={index}
            onMouseMove={() => {
              handleMouseOver(index);
            }}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </menu>
  );
};

export default Stars;
