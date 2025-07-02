function todo() {
    
    console.log("The button is clicked");
    
    // Catching the input field element
    const inputField = document.getElementById('input');
    
    // Catching an input value
    const inputValue = inputField.value; 

    console.log("The input value is: ", inputValue ); 

    if (inputValue === "") {

        alert('Write something!'); 

    } else {

        // Creating an empty li element
    const liElement = document.createElement('li');

    // Populating the textContent attribute of the li object with the input Value
    liElement.textContent = inputValue; 

    // Catching the todos element (ul)
    const todosUlElement = document.getElementById('todos');
    
    // Appending the li element to todosUlElement
    todosUlElement.append(liElement);

    // Clear input field after adding
    inputField.value = "";

    }

}
    // Catching the button element
    const button = document.getElementById('button');

    // Assigning the todo function to the button 
    button.onclick = todo; 



const motivationalQuotes = [
  "Keep pushing forward!",
  "You are capable of amazing things.",
  "Believe in yourself and all that you are.",
  "Stay positive, work hard, make it happen.",
  "Every day is a second chance."
];   

function showMotivationalQuotes() {
     // Give me a random index from the motivationalQuotes array 
    const index = Math.floor(Math.random() * motivationalQuotes.length); // 0 ili 1 * array length

    // Random message 
    const message = motivationalQuotes[index];

    const motivationElement = document.getElementById('motivational');

    motivationElement.textContent = message; 

}

// Page reload
document.addEventListener('DOMContentLoaded', function() {
  showMotivationalQuotes();
});