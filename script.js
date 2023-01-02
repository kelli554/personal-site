// Get the button element
var backToTopButton = document.getElementById('back-to-top');

// When the user scrolls down 20 pixels from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// When the user clicks on the button, scroll back to the top of the document
backToTopButton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Select all the links in the navigation menu
var navLinks = document.querySelectorAll('nav a');

// Add a smooth scroll effect to each link
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default behavior of the link

    // Get the target element to scroll to
    var targetId = this.getAttribute('href');
    var target = document.querySelector(targetId);

    // Smoothly scroll to the target element
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

  // Get the current year
  var currentYear = new Date().getFullYear();

  // Set the copyright text
  var copyrightText = "Copyright " + currentYear + " My Website";

  // Get the element where you want to display the copyright notice
  var copyrightElement = document.getElementById("copyright");

  // Set the innerHTML of the element to the copyright text
  copyrightElement.innerHTML = copyrightText;

  const lightModeLink = document.getElementById("light-mode");
const darkModeLink = document.getElementById("dark-mode");
const toggleButton = document.getElementById("mode-toggle");

// Set the initial mode based on the user's preference
let isDarkMode = localStorage.getItem("dark-mode") === "true";
if (isDarkMode) {
  lightModeLink.disabled = true;
  darkModeLink.disabled = false;
} else {
  lightModeLink.disabled = false;
  darkModeLink.disabled = true;
}

// Toggle between dark and light mode when the toggle button is clicked
toggleButton.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  localStorage.setItem("dark-mode", isDarkMode);
  if (isDarkMode) {
    lightModeLink.disabled = true;
    darkModeLink.disabled = false;
  } else {
    lightModeLink.disabled = false;
    darkModeLink.disabled = true;
  }
});
