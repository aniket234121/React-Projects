import React from "react";
import { useState } from "react";

const RandomColor = () => {
  const [Color, setColor] = useState("#fff");
  const [TypeOfColor, SetTypeColor] = useState("Hex");

  function generateRandom(length)
  {
    return Math.ceil(Math.random()*length);
  }
  function generateHex()
  {
    let Hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let col="#";
    for(let i=0;i<6;i++)
    {
        col+=Hex[generateRandom(Hex.length-1)];
    }
    setColor(col)
  }
  function generateRGB(){
    let RGB=`rgb(${generateRandom(256)},${generateRandom(256)},${generateRandom(256)})`
    console.log(RGB)
    setColor(RGB)
  }
  return (
    <div
      style={{
        backgroundColor: Color,
        padding:'10px',
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap:'10px'
      }}
    >
      <h1>Random Color Generator</h1>
      <button className="btn" onClick={() => SetTypeColor("Hex")}>
        Generate Hex
      </button>
      <button className="btn" onClick={() => SetTypeColor("RGB")}>
        Generate RGB
      </button>
      <button className="btn" onClick={TypeOfColor==='Hex'?generateHex:generateRGB}>Generate Random</button>
      <p style={{fontSize:'30px',fontWeight:'bold'}}>{Color}</p>
    </div>
  );
};

export default RandomColor;
