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
  
  var backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
          // Show the button when the user scrolls down 100px
          backToTopButton.style.display = 'block';
      } else {
          // Hide the button when the user is at the top
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', function (e) {
      e.preventDefault();
      // Scroll to the top of the page smoothly
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });