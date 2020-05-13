
function addition() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let k = a+b;
    document.getElementById("result").innerHTML = "Result Divition:" + k;
}
function subtraction() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let k = a - b;
    document.getElementById("result").innerHTML = "Result Divition:" + k;
}
function munTipLiCaTion() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let k = a * b;
    document.getElementById("result").innerHTML = "Result Divition:" + k;
}
function divISion() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let k = a / b;
    document.getElementById("result").innerHTML = "Result Divition:" + k;
}


