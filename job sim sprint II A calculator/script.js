function getValues() {
    var first = Number(document.getElementById("num1").value);
    var second = Number(document.getElementById("num2").value);
    return { a: first, b: second };
}

function add() {
    let val = getValues();
    document.getElementById("result").innerHTML = val.a + val.b;
}

function sub() {
    let val = getValues();
    document.getElementById("result").innerHTML = val.a - val.b;
}

function mul() {
    let val = getValues();
    document.getElementById("result").innerHTML = val.a * val.b;
}

function divi() {
    let val = getValues();
    if (val.b === 0)
        document.getElementById("result").innerHTML = "Can't divide by zero";
    else
        document.getElementById("result").innerHTML = val.a / val.b;
}

function clearAll() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
}
