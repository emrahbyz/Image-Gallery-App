import React from "react";
import İmg from "./images/images";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectImg, setSelectImg] = useState(İmg[0]);
  return (
    <div className="App">
      <div className="container">
        <img src={selectImg.src} alt="selectImg" className="selected" />
      </div>
      <div className="imgContainer">
        {İmg.map((img, key) => {
          return (
            <img
              key={key}
              src={img.src}
              alt={img.alt}
              onClick={() => setSelectImg(img)}
            />
          );
        })}
      </div>
    </div>
  );
}
3;

export default App;
