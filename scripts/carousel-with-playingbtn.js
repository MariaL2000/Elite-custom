const carruselCards = () => {
  // Elementos DOM
  const cards = document.querySelectorAll(".card__carousel");
  const dotsContainer = document.querySelector(".dots");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const carousel = document.querySelector(".carousel__scroll");
  const containerPlay = document.querySelector(".container-play");

  // Variables de estado
  let currentIndex = 0;
  let slideInterval = null;
  let isScrolling = false;
  let scrollTimeout;

  // Inicializar GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Crear puntos de navegación
  cards.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Configurar animación inicial para los títulos
  cards.forEach((card, index) => {
    const title = card.querySelector("h1");
    gsap.set(title, {opacity: index === 0 ? 1 : 0, x: 50});
  });

  // Animación del contenedor de reproducción con ScrollTrigger
  gsap.fromTo(
    containerPlay,
    {
      y: "-25rem",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: containerPlay,
        start: "top bottom-=20%",
        end: "top center",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    }
  );

  // Evento de desplazamiento del carrusel
  carousel.addEventListener("scroll", () => {
    if (!isScrolling) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = carousel.scrollLeft;
        const cardWidth =
          cards[0].offsetWidth + parseInt(getComputedStyle(carousel).gap);
        const newIndex = Math.round(scrollPosition / cardWidth);

        if (newIndex !== currentIndex) {
          goToSlide(newIndex);
        }
      }, 50);
    }
  });

  // Función para actualizar el gradiente del punto activo
  function updateActiveDotGradient(isPlaying = true) {
    const dots = document.querySelectorAll(".dot");
    const activeDot = document.querySelector(".dot.active");

    // Resetear todos los puntos
    gsap.set(dots, {background: "#ccc"});

    if (!isPlaying) {
      return;
    }

    // Animar el punto activo con GSAP
    gsap.killTweensOf(activeDot);
    gsap.fromTo(
      activeDot,
      {background: "linear-gradient(to right, #000000 0%, #ccc 0%)"},
      {
        background: "linear-gradient(to right, #000000 100%, #ccc 100%)",
        duration: 5,
        ease: "linear",
        onComplete: () => {
          if (
            activeDot.classList.contains("active") &&
            playPauseBtn
              .querySelector("svg")
              .parentElement.classList.contains("playing")
          ) {
            nextSlide();
          }
        },
      }
    );
  }

  // Función para ir a una diapositiva específica
  function goToSlide(index) {
    if (index < 0 || index >= cards.length || index === currentIndex) return;

    isScrolling = true;

    // Calcular la posición de desplazamiento
    const cardWidth =
      cards[0].offsetWidth + parseInt(getComputedStyle(carousel).gap);

    // Animar el desplazamiento con GSAP
    gsap.to(carousel, {
      scrollLeft: cardWidth * index,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        isScrolling = false;
      },
    });

    // Animar la salida del título actual
    const currentTitle = cards[currentIndex].querySelector("h1");
    gsap.to(currentTitle, {
      opacity: 0,
      x: -50,
      duration: 0.4,
      ease: "power1.in",
    });

    // Actualizar clases y estado
    cards[currentIndex].classList.remove("active");
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));

    currentIndex = index;

    // Animar la entrada del nuevo título
    const newTitle = cards[currentIndex].querySelector("h1");
    gsap.fromTo(
      newTitle,
      {opacity: 0, x: 50},
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    // Actualizar clases activas
    cards[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

    // Actualizar animación del punto activo
    const isPlaying = playPauseBtn
      .querySelector("svg")
      .parentElement.classList.contains("playing");
    updateActiveDotGradient(isPlaying);
  }

  // Función para avanzar a la siguiente diapositiva
  function nextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= cards.length) nextIndex = 0;
    goToSlide(nextIndex);
  }

  // Función para alternar la reproducción automática
  function toggleSlideshow() {
    const svg = playPauseBtn.querySelector("svg");
    const isPlaying = !svg.parentElement.classList.contains("playing");

    svg.parentElement.classList.toggle("playing");

    if (isPlaying) {
      updateActiveDotGradient(true);
      // Ya no necesitamos setInterval porque GSAP maneja el timing
    } else {
      gsap.killTweensOf(document.querySelector(".dot.active"));
      gsap.set(document.querySelector(".dot.active"), {background: "#ccc"});
    }
  }

  // Evento de clic para el botón de reproducción/pausa
  playPauseBtn.addEventListener("click", toggleSlideshow);

  // Animación inicial para las tarjetas
  gsap.from(cards, {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Animación inicial para los puntos
  gsap.from(".dot", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.7)",
    delay: 0.5,
  });

  // Optimización para pantallas grandes (4K+)
  if (window.matchMedia("(min-width: 3840px)").matches) {
    // Ajustar la duración y el timing para pantallas grandes
    gsap.defaults({
      duration: 1.2,
      ease: "power3.out",
    });

    // Mejorar las animaciones para pantallas grandes
    ScrollTrigger.matchMedia({
      "(min-width: 3840px)": function () {
        gsap.set(containerPlay, {y: "-40rem"});

        gsap.fromTo(
          containerPlay,
          {y: "-40rem", opacity: 0},
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: containerPlay,
              start: "top bottom-=30%",
              end: "top center+=10%",
              scrub: 1.5,
              toggleActions: "play none none reverse",
            },
          }
        );
      },
    });
  }
};

// Iniciar el carrusel cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", carruselCards);
