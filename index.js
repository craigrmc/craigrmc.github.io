// Toggle Navigation Menu between show / hide
function navMenuToggle() {
  var navMenu = document.getElementById("navMenu");
  if (navMenu.className.indexOf("w3-show") == -1) {
    navMenu.className += " w3-show";
  } else {
    navMenu.className = navMenu.className.replace("w3-show", "");
  }
}

// Show Navigation Menu
function navMenuShow() {
  var navMenu = document.getElementById("navMenu");
  navMenu.className += " w3-show";
}

// Hide Navigation Menu
function navMenuHide() {
  var navMenu = document.getElementById("navMenu");
  navMenu.className = navMenu.className.replace("w3-show", "");
}
