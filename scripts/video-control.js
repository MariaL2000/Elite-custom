gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".background-video");
const videoControl = document.querySelector(".video-control");
const pauseIcon = document.querySelector(".pause-icon");
const playIcon = document.querySelector(".play-icon");
const textItems = gsap.utils.toArray(".text-item");

// Control de video
videoControl.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    gsap.to(playIcon, {opacity: 0, duration: 0.2});
    gsap.to(pauseIcon, {opacity: 1, duration: 0.2});
    gsap.to(videoControl, {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      duration: 0.3,
    });
  } else {
    video.pause();
    gsap.to(playIcon, {opacity: 1, duration: 0.2});
    gsap.to(pauseIcon, {opacity: 0, duration: 0.2});
    gsap.to(videoControl, {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      duration: 0.3,
    });
  }
});

// Check if it's a mobile device
const isMobile = () => {
  return window.innerWidth < 768; // You can adjust this breakpoint as needed
};

// Only initialize ScrollTrigger if not on mobile
if (!isMobile()) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-scroll-section",
      start: "top top",
      end: "+=400%", // Aumentamos el espacio de scroll
      scrub: 2, // Hacemos el scrub más suave
      pin: true,
      anticipatePin: 1,
      smoothScroll: true,
    },
  });
  gsap.set(textItems, {
    opacity: 0,
    y: 20,
  });

  textItems.forEach((text, i) => {
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 3, // Duración más larga
    }).to(
      text,
      {
        opacity: 0,
        y: -20,
        duration: 3,
      },
      "+=2"
    ); // Más tiempo entre textos
  });
} else {
  // For mobile, just show all text items without animation
  gsap.set(textItems, {
    opacity: 0,
    y: 0,
  });
}

// Handle resize events to disable/enable ScrollTrigger when screen size changes
window.addEventListener("resize", () => {
  // Refresh the page if crossing the mobile threshold
  // This is a simple approach - a more complex solution would cleanly kill and reinitialize the animations
  const wasMobile = isMobile();
  setTimeout(() => {
    if (wasMobile !== isMobile()) {
      location.reload();
    }
  }, 300);
});
