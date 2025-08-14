import React from "react";

const Todo = () => {
  const [tasks, setTasks] = React.useState([]);

  // Referring to the input field
  const refs = {
    input: React.useRef(),
  };

  // Create Task
  const createTask = () => {
    // Getting value
    const input = refs.input.current; // Input element
    const text = input.value; // Input value

    // Preventing empty inputs
    if (text === "") {
      alert("Hey don't be lazy! Write something.");
      return;
    }

    // Pushing tasks into array
    // Template task object
    const task = {
      name: text,
      completed: false,
      removed: false,
    };

    setTasks((previous) => {
      // Return a new array with previous objects including the last one
      return [...previous, task];
    });

    // Clear the input
    input.value = "";

    console.log(tasks);
  };

  const enterListener = (event) => {
    if (event.key === "Enter") {
      createTask();
    }
  };

  const mouseListener = () => {
    createTask();
  };

  return (
    <div className="todo">
      <div className="todo-content">
        <h1>Let's do something today!</h1>
        <input
          type="text"
          ref={refs.input}
          onKeyDown={enterListener}
          placeholder="Add a task"
          id="input"
          maxLength="60"
        />
        <button id="button" onClick={mouseListener}>
          Hit the button!
        </button>

        <ul id="tasks" className="tasks">
          {tasks.map((task, index) => {
            // For each individual task, map generates a new li element
            return (
              <li className="task" key={index}>
                <input type="checkbox" />
                <p> {task.name} </p>
                <i className="fa-solid fa-trash"></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
