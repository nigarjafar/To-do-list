import React, { Component } from "react";
import { addTask } from "../actions";
import { connect } from "react-redux";

class TaskForm extends Component {
  state = { title: "" };

  handleClick = () => {
    this.props.addTask(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <div className="ui input">
          <input
            name="title"
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
            type="text"
            placeholder="Task"
          />
        </div>
        <button
          onClick={this.handleClick}
          className="ui button primary"
          style={{ marginLeft: "20px" }}
        >
          Add new
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(TaskForm);
