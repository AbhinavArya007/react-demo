import React, { useState } from "react";
const para2 = {
  color: "blue"
};
const InsideBox = () => {
  return (
    <div className="box">
      <h1 className="box_header"> Created using Functional Component </h1>
      <p className="para1"> This is done using External CSS</p>
      <p style={para2}> This is done using Inline CSS</p>
    </div>
  );
};
const Function = () => {
  const [properties, setProperty] = useState("box-none");
  const clickHandler = () => {
    let value = properties === "box" ? "box-none" : "box";
    setProperty(value);
  };
  if (properties === "box") {
    return (
      <div class="funct-compoent">
        <button
          className="button"
          onClick={() => {
            clickHandler();
          }}
        >
          Functional Component
        </button>
        <InsideBox />
      </div>
    );
  } else {
    return (
      <div class="funct-compoent">
        <button
          className="button"
          onClick={() => {
            clickHandler();
          }}
        >
          Click here for Functional Component
        </button>
      </div>
    );
  }
};

export default Function;