const input = document.getElementById("inputField");
const btn = document.getElementById("printButton");
const output = document.getElementById("textOutput");

btn.addEventListener("click", function() {
    const text = input.value; 
    output.innerText = "Här är din text: " + text;
});
