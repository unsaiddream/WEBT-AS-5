const paragraph = document.getElementById("myParagraph");

const button = document.getElementById("changeBtn");

button.addEventListener("click", function() {
    paragraph.textContent = "the text has been changed!";
});
