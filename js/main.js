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

  const carousel = document.querySelector(".auto-carousel-track");
  if (carousel) {
    const imgs = carousel.querySelectorAll(".auto-carousel-img");
    const leftBtn = document.querySelector(".carousel-arrow--left");
    const rightBtn = document.querySelector(".carousel-arrow--right");
    let current = 0;
    let autoTimer;

    function goTo(index) {
      current = (index + imgs.length) % imgs.length;
      carousel.style.transform = `translateX(-${current * 100}%)`;
    }

    function startAuto() {
      autoTimer = setInterval(() => goTo(current + 1), 3500);
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    if (leftBtn) {
      leftBtn.addEventListener("click", () => { goTo(current - 1); resetAuto(); });
    }
    if (rightBtn) {
      rightBtn.addEventListener("click", () => { goTo(current + 1); resetAuto(); });
    }

    startAuto();
  }

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
