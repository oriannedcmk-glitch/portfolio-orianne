document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      toggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("open")
      );
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const mainImg = gallery.querySelector(".gallery-main-img");
    const thumbs = gallery.querySelectorAll(".gallery-thumb");
    const counter = gallery.querySelector(".gallery-current");

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", () => {
        mainImg.src = thumb.src;
        mainImg.alt = thumb.alt;
        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
        if (counter) counter.textContent = i + 1;
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(".gallery-main-img, .travail-card-img")) {
      const overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt}">`;
      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    }
  });
});
