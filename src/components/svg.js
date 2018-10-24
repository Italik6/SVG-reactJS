import React, { Component } from "react";

class Svg extends Component {
  onClick() {
    alert("ta");
  }
  render() {
    return (
      <div>
        <svg width="600" height="600" onClick={this.onClick}>
          <rect width="600" height="600" x="50" y="20" />
        </svg>
      </div>
    );
  }
}

export default Svg;
