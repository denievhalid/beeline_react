import React, { useEffect } from "react";
import { Todos } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/slices/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="page">
      <h1 className="page__title">Список задач</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default TodoList;
