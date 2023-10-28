const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen')
// now we make a function that's calculate
let calculation = []// array to push all my value into
let calculationWithoutChar;
function calculate(button) {
    const value = button.textContent;
    if (value === "Clean") {
        calculation = []
        screenDisplay.textContent = '.'

    }
    else if( value === 'del'){
        calculation.pop();
        calculationWithoutChar = calculation.join('')
        screenDisplay.textContent = calculationWithoutChar
    }
    else if (value === '=') {
        screenDisplay.textContent = eval(calculationWithoutChar)
    }
    else {
         // Check for consecutive operators
         const lastChar = calculation[calculation.length - 1];
        
         if (specialCharacterCheck(lastChar) && specialCharacterCheck(value)) {
             // If both lastChar and value are operators, replace the last operator with the new one.
             calculation.pop();
         }
 
        calculation.push(value)
        calculationWithoutChar = calculation.join('')
        screenDisplay.textContent = calculationWithoutChar
        console.log(calculationWithoutChar);
    }
    // now what if the user add + character to the calculation 2 or more that 2 time for that we will use switch case and put it in the function
    function specialCharacterCheck(character){
        switch (character) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                return true;
            default:
                return false;
        }

    }

}
// now use foreach to get the buttons

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))


