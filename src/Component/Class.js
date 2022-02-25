import React, { Component } from "react";
import ToggleClass from "./ToggleClass";

class Class extends Component {
  state = {
    displayProp: "box-none"
  };
  clickHandler() {
    let property = this.state.displayProp === "box" ? "box-none" : "box";
    this.setState({ displayProp: property });
  }

  render() {
    if (this.state.displayProp === "box") {
      return (
        <div class="class-compoent">
          <button
            className="button"
            onClick={() => {
              this.clickHandler();
            }}
          >
            Class Component
          </button>
          <ToggleClass />
        </div>
      );
    } else {
      return (
        <div class="class-compoent">
          <button
            className="button"
            onClick={() => {
              this.clickHandler();
            }}
          >
            Click here for Class Component
          </button>
        </div>
      );
    }
  }
}
export default Class;