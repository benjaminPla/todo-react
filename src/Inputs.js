import React, { Component } from "react";

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "", tasks: [], message: "", success: "success", display: "none" };
    this.handleInput = this.handleInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleInput({ target }) {
    this.setState({ newTask: target.value });
  }
  handleAdd() {
    if (this.state.newTask === "") {
      this.setState({
        success: "danger",
        message: "Cannot add an empty task",
        display: "inline-block",
      });
      this.display();
    } else if (this.state.tasks.includes(this.state.newTask)) {
      this.setState({
        success: "danger",
        message: "Task alredy exists",
        display: "inline-block",
      });
      this.display();
    } else {
      document.getElementById("input").value = "";
      document.getElementById("input").focus();
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        message: "Successfully added task:  " + this.state.newTask,
        success: "success",
        display: "inline-block",
      });
      this.display();
    }
  }
  handleDelete({ target }) {
    this.state.tasks.splice(target.id.split("-")[0], 1);
    this.setState({
      tasks: this.state.tasks,
      success: "success",
      message: "Successfully deleted task: " + target.id.split("-")[1],
    });
  }
  display() {
    setTimeout(() => {
      this.setState({ display: "none" });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input id="input" type="text" className="form-control" onChange={this.handleInput} />
          <button className="input-group-text" onClick={this.handleAdd}>
            +
          </button>
        </div>
        <ol className="list-unstyled">
          {this.state.tasks.map((task, index) => {
            return (
              <li
                className="text-capitalize list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {index + 1 + ". " + task}
                <i
                  className="fas fa-trash-alt"
                  id={index + "-" + task}
                  onClick={this.handleDelete}
                ></i>
              </li>
            );
          })}
        </ol>
        <div
          className={"alert alert-" + this.state.success + " d-" + this.state.display + " w-100"}
        >
          <i className="fas fa-exclamation"></i> {this.state.message}
        </div>
      </div>
    );
  }
}
