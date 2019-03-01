import { TASK_ADDED } from "./types";

export const addTask = title => {
  return {
    type: TASK_ADDED,
    payload: title
  };
};
