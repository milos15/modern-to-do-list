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
