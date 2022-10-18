import { ADD, CHECKED, DELETE, UPDATE } from "./Types";

export const Add = (data) => {
  return {
    type: ADD,
    payload: data,
  };
};

export const Delete = (index) => {
  return {
    type: DELETE,
    payload: index,
  };
};

export const Update = (element, index) => {
  return {
    type: UPDATE,
    payload: { index: index, element: element },
  };
};

export const isChecked = (flagValue, index) => {
  return {
    type: CHECKED,
    payload: { index: index, status: flagValue },
  };
};
