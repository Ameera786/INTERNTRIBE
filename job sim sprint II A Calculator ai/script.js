function getValues() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  return { a, b };
}

function add() {
  const { a, b } = getValues();
  document.getElementById('result').textContent = a + b;
}

function subtract() {
  const { a, b } = getValues();
  document.getElementById('result').textContent = a - b;
}

function multiply() {
  const { a, b } = getValues();
  document.getElementById('result').textContent = a * b;
}

function divide() {
  const { a, b } = getValues();
  if (b === 0) {
    document.getElementById('result').textContent = "Error: Division by zero";
  } else {
    document.getElementById('result').textContent = a / b;
  }
}

function clearAll() {
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
  document.getElementById('result').textContent = "---";
}
