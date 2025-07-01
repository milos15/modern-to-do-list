function todo() {
    // Function test
    console.log("The button is clicked");
    
    // Catching input field
    const inputField = document.getElementById('input');
    
    // Catching input value
    const inputValue = inputField.value; 

    // Writing the input value in the console 
    console.log("The input value is: ", inputValue );   
}

    const button = document.getElementById('button');
    button.onclick = todo; 
