# Project Name - Server Side Calculator

## Description

The base for the server side calculator has two input fields, a select menu, and two buttons on the DOM.
The two input fields are for people to put in two numbers they wish to do math on.
They then use the drop-down menu from the select element to decide which operator they will use:
    addition
    subtraction
    multiplication
    division
Once the fields are filled and the operator is chosen they can press the '=' button.
This will package the information from the inputs fields and the selected operator and send it to
the server.
On the server there is a function in which will read this information and apply the apporpriate math.
It will then get both a result to send back and save the equation calculated in a history variable to also
send back to the client.
The client will then use two functions, one to display the result of the math and one to display the history
of the mathematical operations done on the server.

While I did not get to the stretch goal, due to overthinking the issue on my part, I have been able to formulate how
I would go about it in the event I had the time, which I will explain here.
- There would be individual buttons for each number 0-9, there would be buttons for negative and decimal, there would
    be buttons for the four mathematical operators (+, -, *, /), and then an equals and a clear button.
- Every time a button would be pressed it would update a string variable with the corresponding value.
- If an operator button was pressed it would not just add the operator to the string but would include a space
    before and after the operator ( so ' + '  instead of '+' ).
- When the '=' button is pressed it would take the string and pack it in an object to send to the server.
- The server would then split the string into an array using .split(' ') to use the spaces as reference points.
- NOTE: This is where my overthinking was located. I originally thought of doing the slpit client side and sending
    the array to the server, the thought of doing the split on server side did not cross my mind until it was too late.
- Once the array is created it would be sent through the math function located in the bettermath.js file.
- This would cycle through the array looking for multiplication or division, note the index, and then do math based on index
    numbers.
- For example, if it found a '*' at index of 4 (i = 4) it would then grab the value at i-1 (index 3) and i+1 (index 5) and
    then apply the math on the values. It would then alter the array, changing the value of i-1 to the result and splicing
    out the content at i and i+1. It would then go through the array again.
- Once it had gone through the array and resolved all multiplication and division it would cycle through the array again
    in the same manner, but this time looking for addition and subtraction.
- Eventually all operators should be removed from the array and there should only be one number left at index 0, which
    would be the result of the mathematics.
- The server would then save this result, and the full equation (like in the base), so that it can send it to the client.