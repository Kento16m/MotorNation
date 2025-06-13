// Preloader
document.addEventListener("DOMContentLoaded", () => {
  // Hide preloader after page loads
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader")

    setTimeout(() => {
      preloader.style.opacity = "0"
      preloader.style.visibility = "hidden"

      setTimeout(() => {
        if (preloader.parentNode) {
          preloader.parentNode.removeChild(preloader)
        }
      }, 600)
    }, 500)
  })

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Header scroll effect
  const header = document.getElementById("header")
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle")
  const mainNav = document.getElementById("main-nav")

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active")
    })

    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active")
      })
    })
  }

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top")
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Smooth scrolling for navigation links
  const navLinksSmooth = document.querySelectorAll('a[href^="#"]')
  navLinksSmooth.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = header ? header.offsetHeight : 0
        const targetPosition = targetSection.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // WhatsApp mega button animations
  const whatsappMegaBtn = document.getElementById("whatsapp-mega-btn")
  if (whatsappMegaBtn) {
    // Add particle effects on hover
    whatsappMegaBtn.addEventListener("mouseenter", () => {
      createParticles(whatsappMegaBtn)
    })
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".spec-card, .location-item, .vehicle-details-card")
  animateElements.forEach((el) => observer.observe(el))
})

// Vehicle gallery functions
function changeMainImage(thumbnail, newSrc) {
  const mainImage = document.getElementById("main-vehicle-image")
  const thumbnails = document.querySelectorAll(".thumbnail")

  if (mainImage && thumbnail) {
    // Update main image
    if (newSrc) {
      mainImage.src = newSrc
    } else {
      mainImage.src = thumbnail.src
    }
    mainImage.alt = thumbnail.alt

    // Update active thumbnail
    thumbnails.forEach((thumb) => thumb.classList.remove("active"))
    thumbnail.classList.add("active")

    // Add animation effect
    mainImage.style.opacity = "0"
    setTimeout(() => {
      mainImage.style.opacity = "1"
    }, 150)
  }
}

// Particle effects for WhatsApp button
function createParticles(button) {
  const particleCount = 6
  const buttonRect = button.getBoundingClientRect()

  for (let i = 0; i < particleCount; i++) {
    setTimeout(() => {
      const particle = document.createElement("div")
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background-color: #25d366;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        left: ${buttonRect.left + buttonRect.width / 2}px;
        top: ${buttonRect.top + buttonRect.height / 2}px;
        animation: particle-burst 1s ease-out forwards;
      `

      document.body.appendChild(particle)

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 1000)
    }, i * 100)
  }
}

// Add CSS for particle animation
const style = document.createElement("style")
style.textContent = `
  @keyframes particle-burst {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)
