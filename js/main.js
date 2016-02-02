
var navbarElements = $(".menu-links, .overlay"); // the large links and transparent overlay
navbarElements.hide(); // collapse navbar on page load

var menuBar, navbarExpanded;
menuBar = $(".menu-bar"); // hamburger menu widget
navbarExpanded = false; // used for menu button click handling

// toggles navbar button's Font Awesome icons and expands/collapses menu
var menuHandler = function() {
  // font-awesome icon
  var icon = menuBar.find("i");

  // collapsing navbar
  if (navbarExpanded) {
    navbarElements.fadeOut();
    icon.removeClass("fa-close");
    icon.addClass("fa-bars");
    navbarExpanded = false;
  }
  // expanding navbar
  else {
    navbarElements.fadeIn();
    icon.removeClass("fa-bars");
    icon.addClass("fa-close");
    navbarExpanded = true;
  }
}

// add click handler to menu bar button
menuBar.on("click", menuHandler);
navbarElements.click(menuHandler);

// exit navbar on esc key
$('body').keydown(function(e) {
  if (e.keyCode == 27 && navbarExpanded) {
    menuHandler();
  }
});
