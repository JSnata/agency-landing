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
  });
  