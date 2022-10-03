import api from "../../api";
import { TODO_FULFILLED, TODO_PENDING } from "../types";

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

  api("/users").then(({ data }) => {
    dispatch({
      type: TODO_FULFILLED,
      payload: data,
    });
  });
};

export { fetchTodos };
