document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    // Configuraciones específicas para mejorar la experiencia táctil en móviles
    touchEventsTarget: "container",
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    // Resistencia al final del deslizamiento
    resistance: true,
    resistanceRatio: 0.85,
    // Configuración para evitar problemas con el desplazamiento de la página
    touchMoveStopPropagation: false,
    touchStartPreventDefault: false,
    // Configuración para mejorar la experiencia en dispositivos con pantalla táctil
    touchStartForcePreventDefault: false,
    breakpoints: {
      560: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1344: {
        slidesPerView: 3,
        spaceBetween: "1%",
      },
    },
  });

  var swiper = new Swiper(".swiper2", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    // Configuraciones específicas para mejorar la experiencia táctil en móviles
    touchEventsTarget: "container",
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    // Resistencia al final del deslizamiento
    resistance: true,
    resistanceRatio: 0.85,
    // Configuración para evitar problemas con el desplazamiento de la página
    touchMoveStopPropagation: false,
    touchStartPreventDefault: false,
    // Configuración para mejorar la experiencia en dispositivos con pantalla táctil
    touchStartForcePreventDefault: false,
    breakpoints: {
      560: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1344: {
        slidesPerView: 3,
        spaceBetween: "1%",
      },
    },
  });
  var swiper = new Swiper(".swiper3", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next3",
      prevEl: ".prev3",
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    // Configuraciones específicas para mejorar la experiencia táctil en móviles
    touchEventsTarget: "container",
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    // Resistencia al final del deslizamiento
    resistance: true,
    resistanceRatio: 0.85,
    // Configuración para evitar problemas con el desplazamiento de la página
    touchMoveStopPropagation: false,
    touchStartPreventDefault: false,
    // Configuración para mejorar la experiencia en dispositivos con pantalla táctil
    touchStartForcePreventDefault: false,
  });
});
