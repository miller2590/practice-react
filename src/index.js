import React from "react";
import ReactDOM from "react-dom";
import Child from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const names = {
  first: "John",
  second: "Jake",
  third: "Ryan",
  fourth: "Sam",
};

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: names.first };
    this.randomName = this.randomName.bind(this);
  }

  randomName() {
    const keys = Object.keys(names);
    let randKey = keys[Math.floor(Math.random() * keys.length)];

    while (names[randKey] === this.state) {
      randKey = keys[Math.floor(Math.random() * keys.length)];
    }

    this.setState({
      src: names[randKey],
    });
  }

  render() {
    return (
      <div>
        <p>
          My name is <h1>{this.state.src}</h1>
        </p>
        <Child randomName={this.randomName} />
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
