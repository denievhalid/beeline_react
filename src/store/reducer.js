import { combineReducers } from "redux";
import todosReducer from "./slices/todoSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
