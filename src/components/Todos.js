import React from "react";

function Todos({ todos = [] }) {
  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <div className="todo" key={todo.id}>
          <div>{todo.title}</div>
        </div>
      );
    });
  };

  return (
    <div className="todos">
      {todos.length ? renderTodos() : <span>Задач нет</span>}
    </div>
  );
}

export default Todos;
