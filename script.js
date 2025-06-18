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
  
    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  
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
        init: () => setEqualSlideHeights(),
        resize: () => setEqualSlideHeights(),
      }
    });
  
    function setEqualSlideHeights() {
      const slides = document.querySelectorAll(".swiper-slide");
      let maxHeight = 0;
  
      slides.forEach(slide => {
        slide.style.height = "auto";
        const height = slide.offsetHeight;
        if (height > maxHeight) maxHeight = height;
      });
  
      slides.forEach(slide => {
        slide.style.height = maxHeight + "px";
      });
    }
  });
  