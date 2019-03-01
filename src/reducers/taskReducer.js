import { TASK_ADDED, TASK_DONE } from "../actions/types";

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case TASK_ADDED:
      return [
        { id: state.length + 1, title: action.payload, done: false },
        ...state
      ];
    case TASK_DONE:
      return state.map(task =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    default:
      return state;
  }
};
