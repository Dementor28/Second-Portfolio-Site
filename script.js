function toggleMenu() {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", function () {
    // When a navbar link is clicked, collapse the navbar
    document.querySelectorAll(".navbar-nav a").forEach(function (element) {
      element.addEventListener("click", function () {
        var navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  });
  