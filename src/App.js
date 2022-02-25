import React from "react";
import Function from "./Component/Function";
import Class from "./Component/Class";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="continer">
        <div className="header">
          <h1 className="title">
            Functional and Class Component
          </h1>
        </div>
        <div className="box-continer">
          <Function />
          <Class />
        </div>
      </div>
    </>
  );
};
export default App;