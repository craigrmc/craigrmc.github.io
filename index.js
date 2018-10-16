// Grab HTML elements
var navMenu = document.getElementById("navMenu");
var dialog = document.getElementById('disabledResumeDialog');

// Toggle Navigation Menu between show / hide
function navMenuToggle() {
  if (navMenu.className.indexOf("w3-show") == -1) {
    navMenu.className += " w3-show";
  } else {
    navMenu.className = navMenu.className.replace("w3-show", "");
  }
}

// Show Navigation Menu
function navMenuShow() {
  navMenu.className += " w3-show";
}

// Hide Navigation Menu
function navMenuHide() {
  navMenu.className = navMenu.className.replace("w3-show", "");
}

// Show Resume Dialog
function resumeDialogShow() {
  dialog.style.display = "block";
}

// Hide Resume Dialog
function resumeDialogHide() {
  dialog.style.display = "none";
}

// Hide Resume Dialog
window.onclick = function(event) {
  if (event.target == dialog) {
    resumeDialogHide();
  }
}
