import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  state = {
    age: 20
  };

  onAgeUp = () => {
    this.setState({
      ...this.state,
      age: ++this.state.age
    });
  };

  onAgeDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          Add <span>{this.state.age}</span>{" "}
        </div>
        <button onClick={this.onAgeUp}>Age Up </button>
        <button onClick={this.onAgeDown}>Add Down</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
