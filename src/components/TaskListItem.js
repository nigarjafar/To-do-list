import React, { Component } from "react";

class TaskListItem extends Component {
  state = { isChecked: false };
  render() {
    const done = this.state.isChecked ? "line-through" : "";
    return (
      <div className="ui segment">
        <div className="ui checkbox">
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={() => this.setState({ isChecked: !this.state.isChecked })}
          />
          <label style={{ textDecoration: done }}>
            {this.props.task.title}
          </label>
        </div>
      </div>
    );
  }
}

export default TaskListItem;
