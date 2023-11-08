import './../css/style.css'

// Function that checks string length 
/*
const myName = "Lo";
console.log("Your name is: ", myName.length, "characters.");
*/

const myName = ["L", " ", "o"];
console.log(myName.length); 

for (let i = 0; i < myName.length; i++) {
  const printCharacters = myName[i];
  console.log(printCharacters);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
let sum =  0;
console.log(sum);

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  console.log(sum);
}

const animals = ["Katt", "Hund", "Fisk", "Zebra"];
const ul = document.getElementById("myList");

for (let i = 0; i < animals.length; i++) {
  const li = document.createElement("li");
li.innerHTML = animals [i];
ul.appendChild(li);
}





