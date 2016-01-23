
// navbar and menu variables
var menuBar, navbarElements, navbarExpanded;
menuBar = $(".menu-bar");
navbarElements = $(".menu-links, .overlay");
navbarExpanded = false;

// hide the navbar menu on page load
navbarElements.hide();

// toggles navbar button's Font Awesome icons and expands/collapses menu
var menuHandler = function() {
  var _this = $(this);
  // font-awesome icon
  var icon = _this.find("i");

  // collapsing navbar
  if (navbarExpanded) {
    navbarElements.hide();
    icon.removeClass("fa-close");
    icon.addClass("fa-bars");
    navbarExpanded = false;
  }
  // expanding navbar
  else {
    navbarElements.show();
    icon.removeClass("fa-bars");
    icon.addClass("fa-close");
    navbarExpanded = true;
  }
}

// add click handler to menu bar button
menuBar.on("click", menuHandler);
