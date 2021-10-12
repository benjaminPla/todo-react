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
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={this.handleChange} />
          <button className="input-group-text" onClick={this.handleClick}>
            +
          </button>
        </div>
        <ol className="list-unstyled">
          {this.state.tasks.map((task, index) => {
            return (
              <li className="text-capitalize" key={index}>
                {index + 1 + ". " + task}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
