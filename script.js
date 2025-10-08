// Modern Portfolio JavaScript - Enhanced with animations and interactions

// DOM Elements
const typingAnimationElement = document.getElementById("typing-animation");
const nav = document.querySelector("nav");
const navCheckbox = document.getElementById("check");

// Typing Animation Configuration
const typingTexts = ["UI/UX Developer", "React Developer", "Angular Developer"];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

// Enhanced Typing Animation
function typeText() {
  const currentText = typingTexts[currentTextIndex];

  if (isDeleting) {
    // Deleting characters
    typingAnimationElement.textContent = currentText.substring(
      0,
      currentCharIndex - 1
    );
    currentCharIndex--;
    typingSpeed = deletingSpeed;
  } else {
    // Typing characters
    typingAnimationElement.textContent = currentText.substring(
      0,
      currentCharIndex + 1
    );
    currentCharIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && currentCharIndex === currentText.length) {
    // Finished typing, pause then start deleting
    typingSpeed = pauseTime;
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    // Finished deleting, move to next text
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
    typingSpeed = 500;
  }

  setTimeout(typeText, typingSpeed);
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navCheckbox.checked) {
          navCheckbox.checked = false;
        }
      }
    });
  });
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      nav.style.background = "rgba(255, 255, 255, 0.98)";
      nav.style.backdropFilter = "blur(20px)";
      nav.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)";
    } else {
      nav.style.background = "rgba(255, 255, 255, 0.95)";
      nav.style.backdropFilter = "blur(10px)";
      nav.style.boxShadow = "none";
    }

    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  });
}

// Intersection Observer for Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .stat-card, .highlight-card, .version-card, .contact-item"
  );
  animatedElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Progress Bar Animation
function initProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.getAttribute("data-width");

          setTimeout(() => {
            progressBar.style.width = width + "%";
          }, 200);
        }
      });
    },
    { threshold: 0.5 }
  );

  progressBars.forEach((bar) => {
    progressObserver.observe(bar);
  });
}

// Counter Animation
function initCounterAnimation() {
  const counters = document.querySelectorAll(".stat-number");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.textContent.replace(/\D/g, ""));
          const suffix = counter.textContent.replace(/\d/g, "");
          let current = 0;
          const increment = target / 50;

          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.ceil(current) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + suffix;
            }
          };

          updateCounter();
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

// Parallax Effect for Hero Section
function initParallaxEffect() {
  const heroSection = document.querySelector(
    ".hero-section, .about-hero, .skills-hero, .projects-hero, .resume-hero"
  );

  if (heroSection) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const checkbox = document.getElementById("check");
  const menu = document.querySelector("nav ul");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      menu.style.transform = "translateY(0)";
      menu.style.opacity = "1";
      menu.style.visibility = "visible";
      document.body.style.overflow = "hidden";
    } else {
      menu.style.transform = "translateY(-100%)";
      menu.style.opacity = "0";
      menu.style.visibility = "hidden";
      document.body.style.overflow = "auto";
    }
  });

  // Close menu when clicking on a link
  const menuLinks = document.querySelectorAll("nav ul a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      checkbox.checked = false;
      menu.style.transform = "translateY(-100%)";
      menu.style.opacity = "0";
      menu.style.visibility = "hidden";
      document.body.style.overflow = "auto";
    });
  });
}

// Contact Form Enhancement (if exists) - Removed (Quick Message section removed)

// Enhanced Contact Functions
function mail() {
  const button = document.getElementById("b1");
  const originalContent = button.innerHTML;

  button.innerHTML =
    '<i class="ri-mail-line"></i> venkatvadlakonda960@gmail.com';
  button.style.background = "var(--primary-color)";
  button.style.color = "white";

  // Copy to clipboard
  navigator.clipboard.writeText("venkatvadlakonda960@gmail.com").then(() => {
    showNotification("Email copied to clipboard!");
  });

  setTimeout(() => {
    button.innerHTML = originalContent;
    button.style.background = "";
    button.style.color = "";
  }, 3000);
}

function phone() {
  const button = document.getElementById("b2");
  const originalContent = button.innerHTML;

  button.innerHTML = '<i class="ri-phone-line"></i> +91 9390443840';
  button.style.background = "var(--primary-color)";
  button.style.color = "white";

  // Copy to clipboard
  navigator.clipboard.writeText("+919390443840").then(() => {
    showNotification("Phone number copied to clipboard!");
  });

  setTimeout(() => {
    button.innerHTML = originalContent;
    button.style.background = "";
    button.style.color = "";
  }, 3000);
}

function email() {
  const button = document.getElementById("i1");
  const originalContent = button.innerHTML;

  button.innerHTML =
    '<i class="ri-mail-line"></i> venkatvadlakonda960@gmail.com';
  button.style.background = "var(--primary-color)";
  button.style.color = "white";

  // Copy to clipboard
  navigator.clipboard.writeText("venkatvadlakonda960@gmail.com").then(() => {
    showNotification("Email copied to clipboard!");
  });

  setTimeout(() => {
    button.innerHTML = originalContent;
    button.style.background = "";
    button.style.color = "";
  }, 3000);
}

function mobile() {
  const button = document.getElementById("i2");
  const originalContent = button.innerHTML;

  button.innerHTML = '<i class="ri-phone-line"></i> +91 9390443840';
  button.style.background = "var(--primary-color)";
  button.style.color = "white";

  // Copy to clipboard
  navigator.clipboard.writeText("+919390443840").then(() => {
    showNotification("Phone number copied to clipboard!");
  });

  setTimeout(() => {
    button.innerHTML = originalContent;
    button.style.background = "";
    button.style.color = "";
  }, 3000);
}

// Notification System
function showNotification(message) {
  // Remove existing notification
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
        <div class="notification-content">
            <i class="ri-check-line"></i>
            <span>${message}</span>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Lazy Loading for Images
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });
}

// Theme Toggle (if needed in future)
function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme") ? "dark" : "light"
      );
    });

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }
}

// Performance Optimization
function initPerformanceOptimizations() {
  // Debounce scroll events
  let scrollTimeout;
  const originalScrollHandler = window.onscroll;

  window.onscroll = function () {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      if (originalScrollHandler) {
        originalScrollHandler();
      }
    }, 10);
  };

  // Preload critical resources
  const criticalImages = ["assets/profile-1.jpg", "assets/profile.jpg"];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Error Handling
function initErrorHandling() {
  window.addEventListener("error", (e) => {
    console.error("JavaScript Error:", e.error);
    // Could send error to analytics service
  });

  window.addEventListener("unhandledrejection", (e) => {
    console.error("Unhandled Promise Rejection:", e.reason);
    // Could send error to analytics service
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Core functionality
  if (typingAnimationElement) {
    typeText();
  }

  // Initialize all features
  initSmoothScrolling();
  initNavbarScrollEffect();
  initScrollAnimations();
  initProgressBars();
  initCounterAnimation();
  initParallaxEffect();
  initMobileMenu();
  initLazyLoading();
  initThemeToggle();
  initPerformanceOptimizations();
  initErrorHandling();

  // Add loading complete class
  document.body.classList.add("loaded");
});

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Page is hidden, pause animations
    document.body.classList.add("paused");
  } else {
    // Page is visible, resume animations
    document.body.classList.remove("paused");
  }
});

// Handle resize events
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Recalculate any size-dependent features
    initScrollAnimations();
  }, 250);
});

// Contact Form Handling - Removed (Quick Message section removed)

// Enhanced Notification System
function showNotification(message, type = "success") {
  // Remove existing notification
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";

  const iconClass =
    type === "error" ? "ri-error-warning-line" : "ri-check-line";
  const bgColor = type === "error" ? "#ef4444" : "#10b981";

  notification.innerHTML = `
        <div class="notification-content">
            <i class="${iconClass}"></i>
            <span>${message}</span>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        word-wrap: break-word;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link, .nav-cta");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }
}

// Initialize mobile navigation on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
});

// Export functions for global access
window.mail = mail;
window.phone = phone;
window.email = email;
window.mobile = mobile;
