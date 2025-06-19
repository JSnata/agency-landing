import './style.css';

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("menu-close");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
    overlay.classList.remove("hidden");
  }

  function closeMenu() {
    menu.classList.add("translate-x-full");
    menu.classList.remove("translate-x-0");
    overlay.classList.add("hidden");
  }

  menuBtn?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);
  menu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function setEqualSlideHeights() {
    const slides = document.querySelectorAll(".mySwiper .swiper-slide");
    slides.forEach(slide => {
      slide.style.height = 'auto';
    });

    const maxHeight = Math.max(...[...slides].map(s => s.offsetHeight));

    slides.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
  }

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    on: {
      init: () => setTimeout(setEqualSlideHeights, 100),
      resize: () => setTimeout(setEqualSlideHeights, 100),
    }
  });
});
