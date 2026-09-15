let currentInput='';
let currrentOperation='';
let previousInput ='';

function appendNumber(number){
    currentInput += number ;
    document.querySelector('#display').value=`${previousInput} ${currrentOperation} ${currentInput}`;
}
function appendOperation(operation){
    if(currentInput === '')
        return;
    if(currentInput !== '') {
        calculate();
    }
    currrentOperation = operation;
    previousInput = currentInput;
    currentInput='';
    document.querySelector('#display').value=`${previousInput} ${currrentOperation}`;

}
function calculate(){
    if(previousInput === '' || currentInput ==='')
        return;
    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);
    switch(currrentOperation){
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '/':
            if(currentInput === 0){
                alert("cannot be divided by zero");
                return;
            }
            result = prev / curr;
            return;
        case '*':
            result = prev * curr;
            break;
        default:
            return;
         }
         currentInput = result.toString();
         currrentOperation='';
         previousInput='';
         document.querySelector('#display').value = currentInput;
}
function clearDisplay(){
    currentInput = '';
    previousInput = '';
    currrentOperation = '';
    document.querySelector('#display').value= '';
}