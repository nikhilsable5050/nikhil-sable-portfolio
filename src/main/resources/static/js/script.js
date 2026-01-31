// Loading Animation (SAFE – mobile friendly)
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 1200);
});

setTimeout(() => {
  const loader = document.querySelector(".loader-wrapper");
  if (loader) loader.classList.add("fade-out");
}, 4000);


// Scrolled Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('animated');
          }, index * 200);
      }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
  projectObserver.observe(card);
});

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animated');
      }
  });
}, observerOptions);

document.querySelectorAll('.timeline-content').forEach(item => {
  timelineObserver.observe(item);
});

const achievementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('animated');
          }, index * 200);
      }
  });
}, observerOptions);

document.querySelectorAll('.achievement-card').forEach(card => {
  achievementObserver.observe(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
      });
  });
});

/* ===== MOBILE HAMBURGER MENU FIX ===== */
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!menuBtn || !navLinks) return;

  // Toggle mobile menu
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking any nav link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  // Safety: close menu on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});
