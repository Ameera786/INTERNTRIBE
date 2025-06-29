function calculate(operation) {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').textContent = 'Please enter valid numbers';
    return;
  }

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'mul':
      result = num1 * num2;
      break;
    case 'div':
      if (num2 === 0) {
        document.getElementById('result').textContent = "Can't divide by zero";
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = 'Unknown operation';
  }

  document.getElementById('result').textContent = 'Result: ' + result;
}

function clearAll() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').textContent = ''
}