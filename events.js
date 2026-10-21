const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function() {
    mouseBox.style.backgroundColor = "lightgreen";
});

mouseBox.addEventListener("mouseout", function() {
    mouseBox.style.backgroundColor = "lightgray";
});

const textInput = document.getElementById("textInput");

const outputText = document.getElementById("outputText");

textInput.addEventListener("keyup", function() {
    outputText.textContent = textInput.value;
});


const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operator) {
    if (num1.value === "" || num2.value === "") {
        result.textContent = "enter both numbers";
        return;
    }

    let a = Number(num1.value);
    let b = Number(num2.value);
    let answer;

    if (operator === "+") {
        answer = a + b;
    } else if (operator === "-") {
        answer = a - b;
    } else if (operator === "*") {
        answer = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result.textContent = "сannot divide by zero";
            return;
        }
        answer = a / b;
    }

    result.textContent = answer;
}

document.getElementById("add").addEventListener("click", function() {
    calculate("+");
});

document.getElementById("subtract").addEventListener("click", function() {
    calculate("-");
});

document.getElementById("multiply").addEventListener("click", function() {
    calculate("*");
});

document.getElementById("divide").addEventListener("click", function() {
    calculate("/");
});
