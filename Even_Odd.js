 function checkEvenOdd() {
            // Variable: Get input value
            var num = document.getElementById("numberInput").value;

            // Convert input to number type
            num = Number(num);

            // Check if input is a number
            if (isNaN(num)) {
                document.getElementById("result").innerText = "Please enter a valid number.";
                return;
            }

            // Conditional statement to check even or odd
            if (num % 2 === 0) {
                document.getElementById("result").innerText = num + " is an Even number.";
            } else {
                document.getElementById("result").innerText = num + " is an Odd number.";
            }
        }