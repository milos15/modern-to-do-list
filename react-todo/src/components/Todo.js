import React from "react";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-content">
        <h1>Let's do something today!</h1>
        <input type="text" placeholder="Add a task" id="input" maxlength="60" />
        <button id="button">Hit the button!</button>

        <ul id="tasks" className="tasks"></ul>
      </div>
    </div>
  );
};

export default Todo;
