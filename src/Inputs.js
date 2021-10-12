import React, { Component } from "react";

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "", tasks: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange({ target }) {
    this.setState({ newTask: target.value });
  }
  handleClick() {
    if (this.state.newTask === "") {
      return;
    } else if (this.state.tasks.includes(this.state.newTask)) {
      return;
    } else {
      this.setState({ tasks: [...this.state.tasks, this.state.newTask] });
    }
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <ol>
          {this.state.tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ol>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
