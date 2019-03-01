import React, { Component } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <h2>Task Management Application</h2>
        <TaskForm />
        <TaskList />
      </div>
    );
  }
}

export default App;
