let num1 = '', operator, num2 = '', time = 0;

function add(n1, n2) {
  return parseFloat((n1 + n2).toFixed(4));
}
function substract(n1, n2) {
  return parseFloat((n1 - n2).toFixed(4));
}
function multiply(n1, n2) {
  return parseFloat((n1 * n2).toFixed(4));
}
function divide(n1, n2) {
  if (n1 === 0 || n2 === 0) {
    return `ERROR`
  } else {
    return parseFloat((n1 / n2).toFixed(4));
  }
}
function mathExpression(op1, op, op2) {  
  switch (op) {
    case 'add':
      return add(op1, op2);
      break;
    case 'substract':
      return substract(op1, op2);
      break;
    case 'multiply':
      return multiply(op1, op2);
      break;    
    default:
      return divide(op1, op2);
      break;
  }
}

const DISPLAY__FIRST = document.querySelector('.display__first');
const DISPLAY__SECOND = document.querySelector('.display__second');
const DIGITS = document.querySelectorAll('.digit');
const OPERATORS = document.querySelectorAll('.operator');

DIGITS.forEach(digit => digit.addEventListener('click', (e) => {  
  if (time < 1){    
    num1 += e.target.textContent;
    DISPLAY__FIRST.textContent = num1;
  } else{
    num2 += e.target.textContent;
    DISPLAY__FIRST.textContent += e.target.textContent;
  }
}))
OPERATORS.forEach(op => op.addEventListener('click', (e) => {
  if (e.target.id === 'clear'){
    DISPLAY__FIRST.textContent = '';
    DISPLAY__SECOND.textContent = '';
    num1 = '';   
    num2 = '';
  } else if(e.target.id !== 'clear' && e.target.id !== 'equals'){
    time = 1;
    operator = e.target.id;
    DISPLAY__FIRST.textContent = e.target.textContent + ' ';
    DISPLAY__SECOND.textContent = num1;
  } else{    
    DISPLAY__SECOND.textContent = '';
    DISPLAY__FIRST.textContent = mathExpression(Number(num1), operator, Number(num2));
    num1 = Number(DISPLAY__FIRST.textContent);
    num2 = '';
    operator = '';
    time = 0;
  }
}))