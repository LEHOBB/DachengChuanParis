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

  // Stages : dates passées grisées, prochain stage mis en avant
  var today = new Date();
  var todayIso = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  var nextFound = false;
  document.querySelectorAll(".stage-date").forEach(function (li) {
    var d = li.getAttribute("data-date");
    if (d < todayIso) {
      li.classList.add("is-past");
    } else if (!nextFound) {
      nextFound = true;
      li.classList.add("is-next");
    }
  });
  var mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  document.querySelectorAll("[data-next-stage]").forEach(function (el) {
    var next = el.getAttribute("data-dates").split(" ").filter(function (d) { return d >= todayIso; })[0];
    if (next) {
      var p = next.split("-");
      el.textContent = "Prochain stage : dimanche " + Number(p[2]) + " " + mois[Number(p[1]) - 1] + " " + p[0];
    } else {
      el.textContent = "Les dates de la prochaine saison arrivent bientôt.";
    }
  });

  // Newsletter (Brevo) : envoi sans quitter la page
  var form = document.querySelector(".newsletter-form");
  if (form && window.fetch && window.FormData) {
    var message = document.querySelector(".newsletter-message");
    var submit = form.querySelector("button");
    var show = function (text, state) {
      message.textContent = text;
      message.className = "newsletter-message" + (state ? " is-" + state : "");
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      submit.disabled = true;
      show("Inscription en cours…");
      fetch(form.action + "?isAjax=1", { method: "POST", body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.success) {
            form.reset();
            show("Merci ! Votre inscription a bien été enregistrée.", "success");
          } else {
            show("L’inscription n’a pas pu être enregistrée. Vérifiez votre adresse email.", "error");
          }
        })
        .catch(function () {
          show("Une erreur est survenue. Merci de réessayer plus tard.", "error");
        })
        .then(function () { submit.disabled = false; });
    });
  }

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
