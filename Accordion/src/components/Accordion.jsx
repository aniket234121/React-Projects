import React from "react";

const Accordion = (props) => {
  let { item, index, accordNo, click, checkMultiple,multiple,handleMultiple }=props
  const { title, content } = item;
  // const [isClicked, setClicked] = useState(false);
  let val;
  let indexNo=multiple.findIndex((element=>element===index))
  if(indexNo!==-1)
  {
    val= <p className="content">{content}</p>
  }
  return (
    <li className="accordion">
      <div className="title">
        <h2>{title}</h2>
        <button
          onClick={
            checkMultiple ? ()=>handleMultiple(multiple,index) : () => click(index)
          }
        >
          {index === accordNo || indexNo!==-1 ? "-" : "+"}
        </button>
      </div>
      {checkMultiple
        ? val
        : index === accordNo && <p className="content">{content}</p>}
    </li>
  );
};

export default Accordion;
