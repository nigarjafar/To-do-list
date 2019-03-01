import { TASK_ADDED, TASK_DONE } from "./types";

export const addTask = title => {
  return {
    type: TASK_ADDED,
    payload: title
  };
};

export const toggleTask = id => {
  return {
    type: TASK_DONE,
    payload: id
  };
};
