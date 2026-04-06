// Function to load external HTML into a div
function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      highlightActiveLink(); // call after header loads
    });
}

// Highlight active page link in navbar
function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
