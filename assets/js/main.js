window.onload = function () {
  // Catching HTML elements
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const ul = document.getElementById("tasks");

  function createTask() {
    // 1) Get input value:
    const inputValue = input.value;

    // 2) Prevent adding an empty task:
    if (inputValue.length === 0) {
      alert("Hey! Do not be lazy. Write something!");
      return;
    }
    // 3) Create li element: ----> <li> </li>
    const li = document.createElement("li");

    // 4) Add the class task: ----> <li class="task"></li>
    li.classList.add("task");

    // 5) Create p element: ----> <p> </p>
    const p = document.createElement("p");

    // 6) Populate the textContent attribute: ----> <p>...</p>
    p.textContent = inputValue;

    // 7) Create input type Checkbox: ----> <input />
    const inputCheckbox = document.createElement("input");

    inputCheckbox.type = "checkbox"; // ----> <input type="checkbox" />

    inputCheckbox.addEventListener("click", function () {
      if (inputCheckbox.checked) {
        li.classList.add("completed"); // ----> <li class="task completed">
      } else {
        li.classList.remove("completed"); // ----> <li class="task">
      }
    });

    // Remove a task
    const deleteTask = window.document.createElement("i");
    deleteTask.classList.add("fa-solid", "fa-trash");

    deleteTask.addEventListener("click", function () {
      li.remove();
    });

    // Append input and p elements to li:
    li.append(inputCheckbox);
    li.append(p);
    li.appendChild(deleteTask);

    // Append li to ul:
    ul.append(li);

    // Clear the text from the input field:
    input.value = "";
  }

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      createTask();
    }
  });

  button.addEventListener("click", function () {
    createTask();
  });

  // Change Themes
  const white = document.getElementById("white-theme");
  const dark = document.getElementById("dark-theme");

  function whiteTheme() {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("white-theme");
  }

  function darkTheme() {
    document.body.classList.remove("white-theme");
    document.body.classList.add("dark-theme");
  }

  white.addEventListener("click", whiteTheme);
  dark.addEventListener("click", darkTheme);

  // Motivational Quotes
  const motivationalQuotes = [
    "Keep pushing forward!",
    "You are capable of amazing things.",
    "Believe in yourself and all that you are.",
    "Stay positive, work hard, make it happen.",
    "Every day is a second chance.",
  ];

  function showMotivationalQuotes() {
    // Give me a random index from the motivationalQuotes array
    const index = Math.floor(Math.random() * motivationalQuotes.length); // 0 ili 1 * array length

    // Random message
    const message = motivationalQuotes[index];

    const motivationElement = document.getElementById("motivational");

    motivationElement.textContent = message;
  }

  showMotivationalQuotes();

  motivationElement.addEventListener("click", function () {
    showMotivationalQuotes();
  });
};
