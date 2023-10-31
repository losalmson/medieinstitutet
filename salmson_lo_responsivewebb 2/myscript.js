// toggle dark mode
var darkmodeA = false;
var logo = document.getElementById("logo");
var originalLogo = logo.getAttribute("src");

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark");

darkmodeA = !darkmodeA;
var src;
if (darkmodeA) {
  src = "images/" + "lynx-white.png";
}
else {
  src = originalLogo;
}
logo.setAttribute("src", src);
}


// button last edited

function lastedit() {
  var latestDate = new Date(document.lastModified);
  document.getElementById("placeholder").innerHTML = latestDate;
}
