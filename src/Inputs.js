import React, { Component } from "react";
import "./Inputs.css";

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "", tasks: [], message: "", success: "success", opacity: "0" };
    this.handleInput = this.handleInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  handleInput({ target }) {
    this.setState({ newTask: target.value });
  }
  handleAdd() {
    if (this.state.newTask === "") {
      this.setState({
        success: "danger",
        message: "Cannot add an empty task",
        opacity: "100",
      });
      this.opacity();
    } else if (this.state.tasks.includes(this.state.newTask)) {
      this.setState({
        success: "danger",
        message: "Task alredy exists",
        opacity: "100",
      });
      this.opacity();
    } else {
      document.getElementById("input").value = "";
      document.getElementById("input").focus();
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        message: "Successfully added task:  " + this.state.newTask,
        success: "success",
        opacity: "100",
      });
      this.opacity();
    }
  }
  handleDelete({ target }) {
    this.state.tasks.splice(target.id.split("-")[0], 1);
    this.setState({
      tasks: this.state.tasks,
      success: "success",
      message: "Successfully deleted task: " + target.id.split("-")[1],
      opacity: "100",
    });
    this.opacity();
  }
  handleKey(key) {
    if (key.key === "Enter") this.handleAdd();
  }
  opacity() {
    setTimeout(() => {
      this.setState({ opacity: "0" });
    }, 2000);
  }
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            id="input"
            type="text"
            className="form-control"
            onChange={this.handleInput}
            onKeyUp={this.handleKey}
          />
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
          className={
            "notification alert alert-" +
            this.state.success +
            " opacity-" +
            this.state.opacity +
            " w-100"
          }
        >
          <i className="fas fa-exclamation"></i> {this.state.message}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    const tasks = await fetch("http://localhost:4000/getAll").then((res) => res.json());
    tasks.body.map((task) => {
      this.setState({
        tasks: [...this.state.tasks, task.task],
      });
    });
  }
}
