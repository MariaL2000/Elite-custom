// Asegúrate de que GSAP y ScrollTrigger estén registrados
gsap.registerPlugin(ScrollTrigger);

// Selecciona el elemento que quieres observar
const elemento = document.querySelector(".navbar");
const navbar = document.querySelector(".navbar-new");

// Configura el estado inicial
gsap.set(navbar, {opacity: 0, visibility: "hidden"});

// Configura el ScrollTrigger
ScrollTrigger.create({
  trigger: elemento,
  start: "top bottom",
  end: "bottom top",
  onEnter: () => {
    //console.log("¡Elemento dentro del viewport! (onEnter)");
    gsap.to(navbar, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.3,
    });
  },
  onLeave: () => {
    //console.log("¡Elemento fuera del viewport! (onLeave)");
    gsap.to(navbar, {
      opacity: 1,
      visibility: "visible",
      duration: 0.3,
    });
  },
  onEnterBack: () => {
    //console.log("¡Elemento dentro del viewport! (onEnterBack)");
    gsap.to(navbar, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.3,
    });
  },
  onLeaveBack: () => {
    //console.log("¡Elemento fuera del viewport! (onLeaveBack)");
    gsap.to(navbar, {
      opacity: 1,
      visibility: "visible",
      duration: 0.3,
    });
  },
  markers: false,
});
