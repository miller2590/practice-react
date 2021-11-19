import React from "react";
import "./App.css";

class Child extends React.Component {
  render() {
    return (
      <div>
        <p>
          Press this <button onClick={this.props.randomName}>Button</button> to
          change my name
        </p>
      </div>
    );
  }
}

export default Child;
