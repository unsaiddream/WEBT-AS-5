const paragraph = document.getElementById("myParagraph");

const button = document.getElementById("changeBtn");

button.addEventListener("click", function() {
    paragraph.textContent = "the text has been changed!";
});

const box = document.getElementById("myBox");

const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");

colorBtn.addEventListener("click", function() {
    box.style.backgroundColor = "lightblue";
});

fontBtn.addEventListener("click", function() {
    box.style.fontSize = "24px";
});
