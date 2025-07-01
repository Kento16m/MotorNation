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
    id: 4,
    type: "auto",
    brand: "Kia", 
    name: "Kia Seltos EX Full",
    price: "₲ 120.000.000",
    year: "2021",
    transmission: "Automático",
    fuel: "Diesel",
    mileage: "60.000 km",
    status: "disponible",
    engine: "1.5",
    details: "Ficha en Garden, Único dueño",
    image: "https://ik.imagekit.io/cvxtd4voq/AUTO-KIA%20SELTOS%202021/1.jpeg?updatedAt=1750871784164",
    detailPage: "catalogo/autos/catalogo 4 KIA SELTOS EX FULL 2021.html"
  },
  // VOLVO XC60
  {
    id: 5,
    type: "auto", 
    brand: "Volvo",
    name: "Volvo XC60 Ultimate Dark",
    price: "$ 33.600",
    year: "2025",
    transmission: "Automático",
    fuel: "Híbrido Enchufable",
    mileage: "20.000 km",
    status: "disponible",
    engine: "2.0",
    power: "462 HP",
    details: "Tracción Integral, Ficha en Garden",
    financing: {
      entry: 9500,
      monthly: 779,
      reinforcements: [3840, 3840, 3840, 3840, 33600]
    },
    image: "https://ik.imagekit.io/cvxtd4voq/AUTO-VOLVO%20XC60%202025/1.jpeg?updatedAt=1750872315680",
    detailPage: "catalogo/autos/catalogo 5 VOLVO XC60 ULTIMATE DARK 2025.html"
  },

  // MERCEDES C300
  {
    id: 6,
    type: "auto",
    brand: "Mercedes",
    name: "Mercedes-Benz C300 Cabriolet AMG Line",
    price: "$ 38.500",
    year: "2018",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "70.000 km",
    status: "disponible",
    engine: "2.0L Turbo",
    power: "245 CV",
    image: "https://ik.imagekit.io/cvxtd4voq/AUTO-MERCEDES-BENZ%20C300%20CABRIOLET%20AMG%20LINE/1.jpeg?updatedAt=1750873775014",
    detailPage: "catalogo/autos/catalogo 6 MERCEDES-BENZ C300 CABRIOLET AMG LINE 2018.html"
  },

  // TOYOTA HILUX
  {
    id: 7,
    type: "auto",
    brand: "Toyota",
    name: "Toyota Hilux SRV Limited",
    price: "$ 39.000",
    year: "2019",
    transmission: "Automática",
    fuel: "Diesel",
    mileage: "30.300 km",
    status: "disponible",
    engine: "2.8 Turbo",
    details: "4x4, Ficha en Toyotoshi",
    image: "https://ik.imagekit.io/cvxtd4voq/AUTO-TOYOTA%20HILUX%20SRV%202019/1.jpeg?updatedAt=1750872529429",
    detailPage: "catalogo/autos/catalogo 7 TOYOTA HILUX SRV LIMITED 2019.html"
  },

  // JEEP GRAND CHEROKEE
  {
    id: 8,
    type: "auto",
    brand: "Jeep",
    name: "Jeep Grand Cherokee Laredo",
    price: "$ 17.500",
    year: "2018",
    transmission: "Automática",
    fuel: "Gasolina",
    mileage: "42.900 km",
    status: "disponible",
    details: "4x2, Único dueño, De Garden",
    image: "https://ik.imagekit.io/cvxtd4voq/AUTO-JEEP%20GRAND%20CHEROKEE%202018/1.jpeg?updatedAt=1750871734126",
    detailPage: "catalogo/autos/catalogo 8 JEEP GRAND CHEROKEE LAREDO 2018.html"
  },

  // POLARIS RZR
  {
    id: 9,
    type: "utv",
    brand: "Polaris",
    name: "Polaris RZR S",
    price: "$ 9.200",
    year: "2023",
    transmission: "Automática",
    mileage: "5.200 km",
    status: "vendido",
    engine: "800cc",
    details: "4x4 Alta y Baja, Suspensiones Fox",
    image: "https://ik.imagekit.io/cvxtd4voq/UTV-POLARIS%20RZR%20S/1.jpeg?updatedAt=1750872175071",
    detailPage: "catalogo/utv/catalogo 9 UTV POLARIS RZR S 800CC.html"
  },
]

// =================== TESTIMONIALS DATA ===================
const testimonials = [
  {
    quote:
      "escribir el comentario del cliente",
    author: "Usuario 1",
    position: "Empresario",
    image:
      "",
  },
  {
    quote:
      "escribir el comentario del cliente.",
    author: "Usuario 2",
    position: "Diseñadora",
    image:
      "",
  },
  {
    quote:
      "escribir el comentario del cliente.",
    author: "Usuario 3",
    position: "Ingeniero",
    image:
      "",
  },
]

// =================== FAQ DATA ===================
const faqItems = [
  {
    question: "¿El vehiculo es mantenido en el representante?",
    answer:
      "Depende de cada vehiculo, algunos clientes optan por mantener en el representante y otros prefieren llevar a un taller de confianza. ",
  },
  {
    question: "¿Ustedes compran vehiculos en venta?",
    answer:
      "Si, compramos vehiculos en venta en oferta, el pago siempre es al contado y depende del estado del vehiculo.",
  },
  {
    question: "¿Hace cuanto estan en el rubro en compra y venta?",
    answer:
      "Hace casi una decada, y esperamos seguir por muchos años mas",
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