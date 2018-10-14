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

// Send Resume Request
function resumeDialogRequest() {
  window.open('https://drive.google.com/file/d/12d3Xa7H2PYjiu-tDCI-k6sXdouoJNm5o/view?usp=sharing', '_blank');
}

// Show Resume Dialog
function resumeDialogShow() {
  var dialog = document.getElementById('enabledResumeDialog');
  dialog.style.display = "block";
}

// Hide Resume Dialog
function resumeDialogHide() {
  var dialog = document.getElementById('enabledResumeDialog');
  dialog.style.display = "none";
}

// Hide Resume Dialog
window.onclick = function(event) {
  if (event.target == document.getElementById('enabledResumeDialog')) {
    resumeDialogHide();
  }
}
