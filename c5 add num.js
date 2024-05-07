function addNumber() {
    // Get the values of the input fields
    let num1 = parseFloat(document.getElementById("num1").value); //input num2
    let num2 = parseFloat(document.getElementById("num2").value); //input num1
    
    // Check if the input is valid
    if (isNaN(num1) || isNaN(num2)) {
       
        document.getElementById("result").textContent = "Enter valid numbers Stupid!";
    } else {
        // Perform the addition
        let sum = num1 + num2;
        
        // Display the result
        document.getElementById("result").textContent = "The sum is: " + sum;
    }
}
