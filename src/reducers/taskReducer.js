import { TASK_ADDED } from "../actions/types";

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case TASK_ADDED:
      return [{ title: action.payload, id: state.length + 1 }, ...state];
    default:
      return state;
  }
};
