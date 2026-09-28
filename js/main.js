(function () {
  var root = document.documentElement;

  // Menu mobile
  var button = document.querySelector(".menu-button");
  if (button) {
    button.addEventListener("click", function () {
      var open = root.classList.toggle("nav-open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("nav-open")) {
        root.classList.remove("nav-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Animation d'entrée de l'image principale
  window.addEventListener("load", function () {
    root.classList.add("is-loaded");
  });

  // Année du pied de page
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Apparition des blocs au défilement
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el) { observer.observe(el); });
})();
