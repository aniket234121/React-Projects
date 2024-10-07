import React from "react";
import { accordionData } from "../data";
import Accordion from "./Accordion";
import { useState } from "react";

const Accordions = () => {
  const [multipleClicked, setMultiClick] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [accordNo, setAccordNo] = useState(null);

  function handleMultiple(multiple,indexNo) {
    let cpyMultiple=[...multiple];
    let val=multiple.findIndex(element=>element===indexNo)
    if(val===-1)
    {
      cpyMultiple=[...multiple,indexNo]
    }
    else{
      cpyMultiple.splice(val,1);
    }
    console.log(cpyMultiple)
    setMultiple(cpyMultiple)
  }
  function handleClick(index) {
    if (!multipleClicked) {
      setAccordNo(index === accordNo ? null : index);
    }
  }
  return (
    <div className="accordion-container ">
      <h1>Accordions</h1>
      <button
        className={multipleClicked ? "active" : null}
        onClick={() => {
          setAccordNo(null);
          setMultiple([])
          setMultiClick(!multipleClicked);
        }}
      >
        Select Multiple
      </button>
      <ul>
        {accordionData.map((item, index) => {
          return (
            <Accordion
              multiple={multiple}
              handleMultiple={handleMultiple}
              checkMultiple={multipleClicked}
              key={index}
              item={item}
              index={index}
              accordNo={accordNo}
              click={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordions;
