
//Find element and add class 
const p = document.getElementById("loremParagraph");
 p.className = "red"; 

 // Find element and change id name
 const catHeading = document.getElementById("catTitle");
 catHeading.id = "dogId";

 const catParagraph = document.getElementById("catText");
 catParagraph.innerHTML = "No, I hate cats :(";

 //Add an img 
 const img = document.getElementById("kittyImg");
 img.setAttribute(
    "src",
    "https://i.pinimg.com/1200x/be/7c/95/be7c9595a167553ddd9be8fe2994e2c0.jpg"
 )
 img.className = "img-container"

 // create an onmousover event 
 img.onmouseover = function () {
    alert("Hello Kitty");
 }