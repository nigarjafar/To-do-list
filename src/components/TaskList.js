import React, { Component } from "react";
import { connect } from "react-redux";
import TaskListItem from "./TaskListItem";

class TaskList extends Component {
  render() {
    const { tasks } = this.props;

    if (tasks.length === 0)
      return (
        <div className="ui segment">
          <h3>You don't have any task</h3>
        </div>
      );

    const doneTasksCount = tasks.filter(task => task.done === true).length;

    return (
      <div className="ui segment">
        <h3>
          You have {doneTasksCount} done task(s) and{" "}
          {tasks.length - doneTasksCount} undone task(s)
        </h3>
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
