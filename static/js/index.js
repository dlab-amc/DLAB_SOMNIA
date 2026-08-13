(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var copyBtn = document.getElementById("copy-bibtex");
  var bibtex = document.getElementById("bibtex");
  if (copyBtn && bibtex) {
    copyBtn.addEventListener("click", function () {
      var text = bibtex.innerText || bibtex.textContent || "";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          var label = copyBtn.querySelector("span:last-child");
          if (label) {
            var prev = label.textContent;
            label.textContent = "Copied";
            setTimeout(function () {
              label.textContent = prev;
            }, 1500);
          }
        });
      }
    });
  }

  var links = Array.prototype.slice.call(document.querySelectorAll(".toc-link"));
  var sections = links
    .map(function (link) {
      var id = link.getAttribute("href");
      return id ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  function setActive() {
    if (!sections.length) return;

    var scrollBottom = window.scrollY + window.innerHeight;
    var docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    var current;

    // Short last sections: when near page bottom, force last item active
    if (docHeight - scrollBottom < 120) {
      current = sections[sections.length - 1];
    } else {
      var offset = Math.min(window.innerHeight * 0.35, 220);
      current = sections[0];
      for (var i = 0; i < sections.length; i++) {
        var top = sections[i].getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = sections[i];
        }
      }
    }

    links.forEach(function (link) {
      var match = current && link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("is-active", Boolean(match));
    });
  }

  if (sections.length) {
    window.addEventListener("scroll", setActive, { passive: true });
    window.addEventListener("resize", setActive);
    setActive();
  }

  var topBtn = document.getElementById("back-to-top");
  if (topBtn) {
    function updateTopBtn() {
      topBtn.classList.toggle("is-visible", window.scrollY > 400);
    }

    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", updateTopBtn, { passive: true });
    updateTopBtn();
  }
})();
