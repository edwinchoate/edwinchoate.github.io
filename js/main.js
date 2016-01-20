
var navbarElements = $(".menu-links, .overlay");
navbarElements.hide();
var navbarExpanded = false;

$(".menu-bar").on("click", function() {
  var _this = $(this);
  var icon = _this.find("i");

  if (navbarExpanded) {
    navbarElements.hide();
    icon.removeClass("fa-close");
    icon.addClass("fa-bars");
    navbarExpanded = false;
  } else {
    navbarElements.show();
    icon.removeClass("fa-bars");
    icon.addClass("fa-close");
    navbarExpanded = true;
  }
});
