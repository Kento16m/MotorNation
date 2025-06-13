// Asegurarse de que el preloader se oculte correctamente después de cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Ocultar el preloader después de que la página se cargue completamente
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader")

    // Añadir un pequeño retraso para asegurar que las animaciones se vean
    setTimeout(() => {
      preloader.style.opacity = "0"
      preloader.style.visibility = "hidden"

      // Eliminar el preloader del DOM después de la transición
      setTimeout(() => {
        if (preloader.parentNode) {
          preloader.parentNode.removeChild(preloader)
        }
      }, 600)
    }, 500)
  })

  // Establecer el año actual en el footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Mostrar/ocultar el botón de volver arriba
  const backToTopButton = document.getElementById("back-to-top")
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("active")
      } else {
        backToTopButton.classList.remove("active")
      }
    })
  }

  // Cambiar el estilo del header al hacer scroll
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

  // Menú móvil
  const menuToggle = document.getElementById("menu-toggle")
  const mainNav = document.getElementById("main-nav")

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active")
    })

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active")
      })
    })
  }
})
