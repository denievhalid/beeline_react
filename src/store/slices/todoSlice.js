import api from "../../api";
import { TODO_FULFILLED, TODO_PENDING } from "../types";
import { STORAGE_KEY } from "../../constants";

const initialState = {
  loading: false,
  todos: [],
};

export default function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TODO_PENDING:
      return {
        ...state,
        loading: true,
      };

    case TODO_FULFILLED:
      return {
        ...state,
        todos: payload,
        loading: false,
      };

    default:
      return state;
  }
}

const fetchTodos = () => (dispatch) => {
  dispatch({ type: TODO_PENDING });

  try {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    dispatch({
      type: TODO_FULFILLED,
      payload: todos,
    });
  } catch (e) {}
};

export { fetchTodos };
