document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar elementos del DOM
  const videoSlides = document.querySelectorAll('.video-slide');
  const playButtons = document.querySelectorAll('.play-button');
  const prevButton = document.querySelector('.video-nav.prev');
  const nextButton = document.querySelector('.video-nav.next');
  
  // Variable para rastrear el slide activo
  let activeSlideIndex = 0;
  let currentlyPlaying = null; // Para rastrear qué video se está reproduciendo
  
  // Función para actualizar el slide activo
  const updateActiveSlide = (newIndex) => {
    // Pausar cualquier video que se esté reproduciendo si no es el del nuevo slide
    if (currentlyPlaying && currentlyPlaying.closest('.video-slide') !== videoSlides[newIndex]) {
      currentlyPlaying.pause();
      
      // Restablecer el botón de reproducción correspondiente
      const playingSlideIndex = Array.from(videoSlides).findIndex(slide => 
        slide.contains(currentlyPlaying));
      
      if (playingSlideIndex !== -1) {
        const playingButton = playButtons[playingSlideIndex];
        playingButton.textContent = playingButton.getAttribute('data-play-text') || 'Watch';
      }
      
      currentlyPlaying = null;
    }
    
    // Quitar la clase active de todos los slides
    videoSlides.forEach(slide => slide.classList.remove('active'));
    
    // Actualizar el índice activo
    activeSlideIndex = newIndex;
    
    // Añadir la clase active al nuevo slide
    videoSlides[activeSlideIndex].classList.add('active');
  };
  
  // Manejar la navegación con los botones prev/next
  prevButton.addEventListener('click', () => {
    const newIndex = (activeSlideIndex - 1 + videoSlides.length) % videoSlides.length;
    updateActiveSlide(newIndex);
  });
  
  nextButton.addEventListener('click', () => {
    const newIndex = (activeSlideIndex + 1) % videoSlides.length;
    updateActiveSlide(newIndex);
  });
  
  // Configurar cada botón de reproducción
  playButtons.forEach((button, index) => {
    // Guardar el texto original del botón como atributo de datos
    const originalText = button.textContent.trim();
    button.setAttribute('data-play-text', originalText);
    
    button.addEventListener('click', () => {
      const slide = videoSlides[index];
      const video = slide.querySelector('video');
      
      if (video) {
        // Si hay otro video reproduciéndose que no es este, pausarlo primero
        if (currentlyPlaying && currentlyPlaying !== video) {
          currentlyPlaying.pause();
          
          // Restablecer el botón del video que estaba reproduciéndose
          const playingSlideIndex = Array.from(videoSlides).findIndex(slide => 
            slide.contains(currentlyPlaying));
          
          if (playingSlideIndex !== -1) {
            const playingButton = playButtons[playingSlideIndex];
            playingButton.textContent = playingButton.getAttribute('data-play-text') || 'Watch';
          }
        }
        
        // Alternar reproducción/pausa para este video
        if (video.paused) {
          video.play();
          button.textContent = 'Pause';
          currentlyPlaying = video;
          
          // Si este slide no es el activo, hacerlo activo
          if (index !== activeSlideIndex) {
            updateActiveSlide(index);
          }
        } else {
          video.pause();
          button.textContent = originalText;
          currentlyPlaying = null;
        }
      }
    });
  });
  
  // Manejar el evento de finalización de video
  videoSlides.forEach((slide, index) => {
    const video = slide.querySelector('video');
    if (video) {
      video.addEventListener('ended', () => {
        // Restablecer el botón cuando el video termina
        const button = playButtons[index];
        button.textContent = button.getAttribute('data-play-text');
        currentlyPlaying = null;
      });
    }
  });
  
  // Inicializar el primer slide como activo
  updateActiveSlide(0);
});
