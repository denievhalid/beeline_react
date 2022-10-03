import React from "react";

function Todos({ todos = [] }) {
  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <div className="todo" key={todo.id}>
          {todo.username}
        </div>
      );
    });
  };

  return <div className="todos">{renderTodos()}</div>;
}

export default Todos;
