import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY } from "../constants";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!title.trim().length) {
      return;
    }

    try {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      todos.unshift({ id: Math.random().toString(), title, description });

      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));

      navigate("/");
    } catch (e) {}
  };

  return (
    <div className="page">
      <h1 className="page__title">Добавление новой задачи</h1>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-field">
          <input
            type="text"
            maxLength="100"
            placeholder="Название задачи"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <textarea
            rows="10"
            maxLength="1000"
            placeholder="Описание задачи"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn btn--secondary">Сохранить</button>
      </form>
    </div>
  );
}

export default CreateTodo;
