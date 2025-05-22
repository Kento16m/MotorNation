// =================== PRELOADER ===================
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader")
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.style.display = "none"
    }, 500)
  }, 1500)
})

// =================== HEADER SCROLL ===================
const header = document.getElementById("header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// =================== MOBILE MENU ===================
const menuToggle = document.getElementById("menu-toggle")
const mainNav = document.getElementById("main-nav")

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active")
  })
})

// =================== BACK TO TOP BUTTON ===================
const backToTopButton = document.getElementById("back-to-top")
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("active")
  } else {
    backToTopButton.classList.remove("active")
  }
})

// =================== CURRENT YEAR ===================
document.getElementById("current-year").textContent = new Date().getFullYear()

// =================== VEHICLES DATA ===================
const vehicles = [
  {
    id: "1",
    type: "SUV",
    name: "Toyota RAV4 2023",
    price: "₲ 350.000.000",
    year: "2023",
    transmission: "Automático",
    image: "https://th.bing.com/th/id/OIP.NY04i2ZOEvOng_KjoPHUkQHaEK?rs=1&pid=ImgDetMain",
    isNew: true,
  },
  {
    id: "2",
    type: "Sedan",
    name: "Nissan Sentra",
    price: "₲ 180.000.000",
    year: "2023",
    transmission: "Automático",
    image: "https://th.bing.com/th/id/OIP.nQaeDt7umlsj_-lArfJxPwHaEK?rs=1&pid=ImgDetMain",
    isNew: true,
  },
  {
    id: "3",
    type: "Moto",
    name: "Honda CBR 650R",
    price: "₲ 120.000.000",
    year: "2023",
    transmission: "Manual",
    image: "https://lemotard.eu/wp-content/uploads/2021/02/Honda-CBR-650R.jpg",
    isNew: true,
  },
  {
    id: "4",
    type: "Camioneta",
    name: "Ford Ranger Limited",
    price: "₲ 280.000.000",
    year: "2022",
    mileage: "15.000 km",
    transmission: "Automático",
    image: "https://th.bing.com/th/id/OIP.OiLlOgipgKfwvPSqt1chiAHaE8?rs=1&pid=ImgDetMain",
    isNew: false,
  },
  {
    id: "5",
    type: "Moto",
    name: "Yamaha MT-07",
    price: "₲ 85.000.000",
    year: "2022",
    mileage: "8.500 km",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isNew: false,
  },
  {
    id: "6",
    type: "Sedan",
    name: "Hyundai Elantra",
    price: "₲ 145.000.000",
    year: "2022",
    mileage: "12.000 km",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    isNew: false,
  },
  {
    id: "7",
    type: "SUV",
    name: "Kia Sportage 2023",
    price: "₲ 310.000.000",
    year: "2023",
    transmission: "Automático",
    image: "https://www.carpixel.net/w/869b70cf5ba2669aded681627d3e4390/kia-sportage-hev-wallpaper-hd-107452.jpg",
    isNew: true,
  },
  {
    id: "8",
    type: "Sedan",
    name: "Chevrolet Onix Plus",
    price: "₲ 135.000.000",
    year: "2022",
    mileage: "10.000 km",
    transmission: "Automático",
    image: "https://cdn.motor1.com/images/mgl/Rv3g3/s1/chevrolet-presento-los-nuevos-onix-rs-y-onix-plus-midnight.jpg",
    isNew: false,
  },
  {
    id: "9",
    type: "Camioneta",
    name: "Chevrolet S10 High Country",
    price: "₲ 270.000.000",
    year: "2023",
    transmission: "Automático",
    image: "https://cuyomotor.com.ar/wp-content/uploads/2023/06/Chevrolet-s10-Midnight-002.jpg",
    isNew: true,
  },
  {
    id: "10",
    type: "Moto",
    name: "Kawasaki Ninja 400",
    price: "₲ 90.000.000",
    year: "2023",
    transmission: "Manual",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQ8O6HN2dK4dL8JsK9RraJ_w9RtJz68yfXA&s",
    isNew: true,
  },
  {
    id: "11",
    type: "SUV",
    name: "Mazda CX-5",
    price: "₲ 330.000.000",
    year: "2023",
    transmission: "Automático",
    image: "https://autohusetvestergaard.imgix.net/7531/2022_mazda_cx-5_launch_roed_front_vej_1920x1080.jpg?q=80",
    isNew: true,
  },
  {
    id: "12",
    type: "Sedan",
    name: "Volkswagen Virtus",
    price: "₲ 140.000.000",
    year: "2022",
    mileage: "13.500 km",
    transmission: "Automático",
    image: "https://cdn.motor1.com/images/mgl/KbJyll/s1/2022-vw-virtus.jpg",
    isNew: false,
  },
]

// =================== TESTIMONIALS DATA ===================
const testimonials = [
  {
    quote:
      "Excelente servicio, encontré mi auto soñado en Motor Nation. El proceso de compra fue rápido y el personal muy profesional.",
    author: "Carlos Martínez",
    position: "Empresario",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    quote:
      "La mejor experiencia comprando una moto. Tienen mucha variedad y los precios son competitivos. Recomiendo Motor Nation al 100%.",
    author: "Laura González",
    position: "Diseñadora",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    quote:
      "Me atendieron de manera personalizada y pudieron asesorarme con todas mis dudas. Sin duda volvería a comprar aquí.",
    author: "Roberto Sánchez",
    position: "Ingeniero",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
]

// =================== FAQ DATA ===================
const faqItems = [
  {
    question: "¿Ofrecen garantía en los vehículos usados?",
    answer:
      "Sí, todos nuestros vehículos usados vienen con una garantía de 3 meses en motor y caja. Además, realizamos una inspección completa de 150 puntos antes de ponerlos a la venta para asegurar su calidad.",
  },
  {
    question: "¿Cuáles son las formas de pago disponibles?",
    answer:
      "Aceptamos pagos en efectivo, transferencias bancarias, y financiamiento a través de nuestros bancos aliados. También aceptamos vehículos como parte de pago previa tasación.",
  },
  {
    question: "¿Realizan envíos a todo el país?",
    answer:
      "Sí, contamos con servicio de entrega a domicilio en todo Paraguay. El costo del envío depende de la distancia y el tipo de vehículo.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso de compra?",
    answer:
      "Una vez seleccionado el vehículo y aprobado el financiamiento (si aplica), el proceso de compra puede completarse en 24-48 horas. Para pagos al contado, el proceso es aún más rápido.",
  },
]

// =================== BLOG DATA ===================
const blogPosts = [
  {
    title: "Los 5 autos más económicos en combustible del 2023",
    date: "12 Mayo, 2023",
    excerpt:
      "Descubre cuáles son los vehículos que te ayudarán a ahorrar en combustible sin sacrificar comodidad ni estilo.",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    slug: "autos-economicos-2023",
  },
  {
    title: "Guía definitiva para comprar tu primera moto",
    date: "28 Abril, 2023",
    excerpt: "Todo lo que necesitas saber antes de adquirir tu primera motocicleta: desde tipos hasta mantenimiento.",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    slug: "guia-comprar-primera-moto",
  },
  {
    title: "¿Cómo financiar tu vehículo con las mejores tasas?",
    date: "15 Abril, 2023",
    excerpt: "Aprende a conseguir el mejor financiamiento para tu próximo auto o moto con estos consejos financieros.",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    slug: "financiamiento-vehiculos",
  },
]

// =================== RENDER VEHICLES ===================
const vehiclesGrid = document.getElementById("vehicles-grid")
const filterButtons = document.querySelectorAll(".filter-btn")
let activeFilter = "all"

function renderVehicles(filter = "all") {
  vehiclesGrid.innerHTML = ""

  const filteredVehicles =
    filter === "all" ? vehicles : vehicles.filter((v) => v.type.toLowerCase() === filter.toLowerCase())

  filteredVehicles.forEach((vehicle) => {
    const vehicleCard = document.createElement("div")
    vehicleCard.className = "vehicle-card"

    vehicleCard.innerHTML = `
      <div class="vehicle-image">
        <img src="${vehicle.image}" alt="${vehicle.name}">
        ${vehicle.isNew ? `<span class="vehicle-badge">Nuevo</span>` : ""}
      </div>
      <div class="vehicle-content">
        <h3 class="vehicle-title">${vehicle.name}</h3>
        <div class="vehicle-price">${vehicle.price}</div>
        <div class="vehicle-details">
          <div class="vehicle-detail">
            <svg viewBox="0 0 24 24">
              <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-16a1 1 0 0 0-1 1v5a1 1 0 0 0 .4.8l3 2a1 1 0 0 0 1.2-1.6L13 11.4V7a1 1 0 0 0-1-1z"/>
            </svg>
            ${vehicle.year}
          </div>
          <div class="vehicle-detail">
            <svg viewBox="0 0 24 24">
              <path d="M16 6l3 4h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a3 3 0 0 1-6 0H8a3 3 0 0 1-6 0H1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2l3-4h10zm3 5.5L17 9H7l-2 2.5H16z"/>
            </svg>
            ${vehicle.transmission}
          </div>
          ${
            vehicle.mileage
              ? `
          <div class="vehicle-detail">
            <svg viewBox="0 0 24 24">
              <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.54a5 5 0 0 1 7.08 0 1 1 0 0 1-1.42 1.42 3 3 0 0 0-4.24 0 1 1 0 0 1-1.42-1.42zM9 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
            ${vehicle.mileage}
          </div>
          `
              : ""
          }
        </div>
      </div>
    `

    vehiclesGrid.appendChild(vehicleCard)
  })

  // Show empty state if no vehicles found
  if (filteredVehicles.length === 0) {
    vehiclesGrid.innerHTML = `
      <div class="empty-state">
        <p>No se encontraron vehículos para esta categoría.</p>
      </div>
    `
  }
}

// Initialize vehicles
renderVehicles()

// Handle filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const filter = this.getAttribute("data-filter")
    activeFilter = filter

    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    this.classList.add("active")

    // Render filtered vehicles
    renderVehicles(filter)
  })
})

// =================== RENDER TESTIMONIALS ===================
const testimonialsContainer = document.getElementById("testimonials-container")
const testimonialDotsContainer = document.getElementById("testimonial-dots")
let activeTestimonial = 0

function renderTestimonials() {
  // Create testimonial slides container
  const testimonialSlide = document.createElement("div")
  testimonialSlide.className = "testimonial-slide"

  testimonials.forEach((testimonial, index) => {
    const testimonialCard = document.createElement("div")
    testimonialCard.className = "testimonial-card"

    testimonialCard.innerHTML = `
      <div class="testimonial-quote">${testimonial.quote}</div>
      <div class="testimonial-author">
        <img src="${testimonial.image}" alt="${testimonial.author}" class="testimonial-avatar">
        <div class="testimonial-info">
          <h4>${testimonial.author}</h4>
          <p>${testimonial.position}</p>
        </div>
      </div>
    `

    testimonialSlide.appendChild(testimonialCard)

    // Create dot for this testimonial
    const dot = document.createElement("div")
    dot.className = `testimonial-dot ${index === 0 ? "active" : ""}`
    dot.addEventListener("click", () => {
      goToTestimonial(index)
    })
    testimonialDotsContainer.appendChild(dot)
  })

  testimonialsContainer.appendChild(testimonialSlide)
}

function goToTestimonial(index) {
  activeTestimonial = index

  // Update slide position
  const testimonialSlide = document.querySelector(".testimonial-slide")
  testimonialSlide.style.transform = `translateX(-${index * 100}%)`

  // Update dots
  const dots = document.querySelectorAll(".testimonial-dot")
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active")
    } else {
      dot.classList.remove("active")
    }
  })
}

// Initialize testimonials
renderTestimonials()

// Set up testimonial navigation
document.getElementById("prev-testimonial").addEventListener("click", () => {
  const newIndex = activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1
  goToTestimonial(newIndex)
})

document.getElementById("next-testimonial").addEventListener("click", () => {
  const newIndex = activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1
  goToTestimonial(newIndex)
})

// Auto rotate testimonials
setInterval(() => {
  const newIndex = activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1
  goToTestimonial(newIndex)
}, 6000)

// =================== RENDER FAQ ===================
const faqContainer = document.getElementById("faq-container")

function renderFAQ() {
  faqItems.forEach((item, index) => {
    const faqItem = document.createElement("div")
    faqItem.className = "faq-item"

    faqItem.innerHTML = `
      <div class="faq-question">
        ${item.question}
        <span>+</span>
      </div>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    `

    faqContainer.appendChild(faqItem)

    // Add click handler for toggle
    const faqQuestion = faqItem.querySelector(".faq-question")
    const faqAnswer = faqItem.querySelector(".faq-answer")

    faqQuestion.addEventListener("click", () => {
      const isActive = faqAnswer.classList.contains("active")

      // Close all answers first
      document.querySelectorAll(".faq-answer").forEach((answer) => {
        answer.classList.remove("active")
      })
      document.querySelectorAll(".faq-question span").forEach((span) => {
        span.textContent = "+"
      })

      // Open clicked answer if it was closed before
      if (!isActive) {
        faqAnswer.classList.add("active")
        faqQuestion.querySelector("span").textContent = "-"
      }
    })
  })
}

// Initialize FAQ
renderFAQ()

// =================== RENDER BLOG POSTS ===================
const blogGrid = document.getElementById("blog-grid")

function renderBlogPosts() {
  blogPosts.forEach((post) => {
    const blogCard = document.createElement("div")
    blogCard.className = "blog-card"

    blogCard.innerHTML = `
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="blog-content">
        <div class="blog-date">${post.date}</div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="/blog/${post.slug}" class="blog-link">
          Leer más
          <svg viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    `

    blogGrid.appendChild(blogCard)
  })
}

// Initialize blog posts
renderBlogPosts()

// =================== FORM SUBMISSION ===================
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const formData = {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    interest: document.getElementById("interest").value,
    message: document.getElementById("message").value,
  }

  // Here you would typically send this data to your server
  console.log("Form submission:", formData)

  // Show success message (in a real app, you'd wait for server response)
  alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto!")

  // Reset form
  contactForm.reset()
})

// =================== NEWSLETTER FORM ===================
const newsletterForm = document.querySelector(".newsletter-form")

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const email = this.querySelector("input").value

  // Here you would typically send this data to your server
  console.log("Newsletter subscription:", email)

  // Show success message
  alert("¡Gracias por suscribirte a nuestro newsletter!")

  // Reset form
  this.reset()
})

// =================== INTERSECTIONS OBSERVER FOR ANIMATIONS ===================
// Add animation when elements come into view
const observerOptions = {
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("about-content")) {
        entry.target.classList.add("slide-left")
      } else if (entry.target.classList.contains("about-image")) {
        entry.target.classList.add("slide-right")
      } else {
        entry.target.classList.add("fade-in")
      }
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe elements
document
  .querySelectorAll(
    ".section-title, .section-subtitle, .about-content, .about-image, .feature, .contact-info, .contact-form-card, .blog-card, .vehicle-card",
  )
  .forEach((el) => {
    observer.observe(el)
  })