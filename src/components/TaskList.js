import React, { Component } from "react";
import { connect } from "react-redux";
import TaskListItem from "./TaskListItem";

class TaskList extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="ui segment">
        <h3> You have {tasks.length} task(s)</h3>
        {tasks.map(task => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

export default connect(
  mapStateToProps,
  {}
)(TaskList);
