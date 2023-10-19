const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelectorAll('.screen')
// now we make a function that's calculate

function calculate(button) {
    console.log(button);
}
// now use foreach to get the buttons

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))


