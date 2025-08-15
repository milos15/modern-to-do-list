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
      id: Date.now(), // Generate more complex ids -> After deleting a task, the next one won't occupy its index.  
      name: text,
      completed: false,
    };

    setTasks((previous) => {
      // Return a new array with previous objects including the last one
      return [...previous, task];
    });

    // Clear the input
    input.value = "";

    console.log(tasks);
  };

  // Click Listeners
  const enterListener = (event) => {
    if (event.key === "Enter") {
      createTask();
    }
  };

  const mouseListener = () => {
    createTask();
  };

  // Checkbox Input
  const onCheckboxChange = (event, index) => {
    const inputCheckbox = event.target;

    setTasks((previous) => {
      previous[index].completed = inputCheckbox.checked;
      return [...previous];
    });
  };

  // Delete Function
  const deleteTask = (index) => {
    setTasks((previous) => {
      return previous.filter((task) => task.id !== index);
    });
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
            // For every new task, map generates a new li element
            return (
              <li className={task.completed ? "task completed" : "task"} key={task.id}>
                <input
                  onChange={(event) => {
                    onCheckboxChange(event, index);
                  }}
                  type="checkbox"
                />
                <p> {task.name} </p>
                <i onClick={() => deleteTask(task.id)} className="fa-solid fa-trash"></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
