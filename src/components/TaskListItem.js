import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTask } from "../actions";
class TaskListItem extends Component {
  state = { isChecked: false };

  componentDidMount() {
    this.setState({ isChecked: this.props.task.done });
  }
  handleChange = () => {
    this.props.toggleTask(this.props.task.id, !this.state.isChecked);
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    const { task } = this.props;
    const done = task.done ? "line-through" : "";
    return (
      <div className="ui segment">
        <div className="ui checkbox">
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleChange}
          />
          <label style={{ textDecoration: done }}>
            {this.props.task.title}
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleTask }
)(TaskListItem);
