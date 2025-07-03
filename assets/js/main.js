window.onload = function () {
  // Catching HTML elements
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const ul = document.getElementById("tasks");

  function createTask() {
    // Pull out the text from the input element:
    const inputValue = input.value;

    // Create input type Checkbox element:
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";

    // Create p element:
    const p = document.createElement("p");

    // Populate textContent attribute of p with the input text:
    p.textContent = inputValue;

    // Create li element:
    const li = document.createElement("li");

    // Add the li class to apply the CSS styles:
    li.classList.add("task");

    // Append input and p elements to li:
    li.append(inputCheckbox); // Left
    li.append(p); // Right

    // Append li to ul:
    ul.append(li);

    // Clear the text from the input field:
    input.value = "";
  }

  // KEYBOARD -> Add a task with the Enter key
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      createTask();
    }
  });

  // MOUSE -> Add a task with the mouse click
  button.addEventListener("click", function () {
    createTask();
  });

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
};
