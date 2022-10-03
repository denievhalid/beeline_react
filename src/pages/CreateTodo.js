import React from "react";

function CreateTodo() {
  return (
    <div className="page">
      <h1 className="page__title">Добавление новой задачи</h1>
      <form className="form">
        <div className="form-field">
          <input type="text" placeholder="Название задачи" />
        </div>
        <div className="form-field">
          <textarea rows="10" placeholder="Описание задачи" />
        </div>
      </form>
      <button className="btn btn--secondary">Сохранить</button>
    </div>
  );
}

export default CreateTodo;
