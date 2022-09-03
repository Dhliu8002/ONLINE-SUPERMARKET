/* NAV BAR */
var dd = document.getElementsByClassName("dd-bn");
var i;

for (i = 0; i < dd.length; i++) {
  dd[i].addEventListener("click", function() {
    this.classList.toggle("tv");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

setInterval(Tick,10);
function Tick(){
  var windowHeight = window.innerHeight;
  var nav = document.getElementById('nav');
  controlHeight(windowHeight, nav);
  controlHeight(windowHeight - 70, document.getElementById("content"));
  
}

function controlHeight(height, element){
  element.style.height = (height) + 'px';
  element.style.overflowY = "none";
  if (element.scrollHeight <= height) {
    element.style.overflowY = "hidden";
  } else {
    element.style.overflowY = "scroll";
  }
}

document.getElementById("menu").onclick = function(){
  nav = document.getElementById("nav")
  if (nav.style.display != "block"){
    nav.style.display = "block";
  }
}

document.getElementById("menu-close").onclick = function(){
  nav = document.getElementById("nav")
  if (nav.style.display != "none"){
    nav.style.display = "none";
  }
}