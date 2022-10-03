import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoList, CreateTodo } from "./pages";
import { Header } from "./components";

function Router() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" exact element={<TodoList />} />
            <Route path="/create" element={<CreateTodo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
