// onclick event 
var pageTitle = document.getElementById("page-title");

pageTitle.onclick = function() {
    alert("You clicked me!");
}; // Anonymus function

// onmouseover event
pageTitle.onmouseover = function() {
    alert("You hovered me :)")
}