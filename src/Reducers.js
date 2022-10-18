import { ADD, CHECKED, DELETE, UPDATE } from "./Types";
const initialState = {
  todoList: [],
};

export const TodoReducer = (state = initialState, action) => {
  if (action.type === ADD) {
    let temp = [...state.todoList];
    temp.push({ checked: "false", data: action.payload });
    return {
      todoList: temp,
    };
  }

  if (action.type === DELETE) {
    let temp = [...state.todoList];
    temp.splice(action.payload, 1);
    return {
      todoList: temp,
    };
  }

  if (action.type === UPDATE) {
    let temp = [...state.todoList];
    temp[action.payload.index].data = action.payload.element;
    return {
      todoList: temp,
    };
  }

  if (action.type === CHECKED) {
    let temp = [...state.todoList];
    temp[action.payload.index].checked = action.payload.status;
    return {
      todoList: temp,
    };
  } else {
    return state;
  }
};
