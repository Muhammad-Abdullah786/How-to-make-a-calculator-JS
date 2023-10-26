const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen')
// now we make a function that's calculate
let calculation = []// array to push all my value into
let calculationWithoutChar ;
function calculate(button) {
    if (value ==="Clean") {
        calculation  = []
        screenDisplay.textContent  = '.'

    }
    else if (value === '='){
        
    }
    let value = button.textContent;
    calculation.push(value)
    calculationWithoutChar = calculation.join('')
    screenDisplay.textContent  = calculationWithoutChar
}
// now use foreach to get the buttons

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))


