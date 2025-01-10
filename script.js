function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const preventHorizontalScroll = () => {
  document.body.style.overflowX = "hidden";
  document.documentElement.style.overflowX = "hidden";

  document.querySelectorAll('*').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
          element.style.maxWidth = "100vw";
          element.style.boxSizing = "border-box";
      }
  });
};

preventHorizontalScroll();
