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
