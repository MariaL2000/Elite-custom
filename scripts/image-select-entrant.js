document.addEventListener('DOMContentLoaded', function() {
  // PARTE 1: Animación de secciones con bordes redondeados
  const sections = document.querySelectorAll('.services, .services-container, .revelador-imagen');
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const section = entry.target;
      
      if (entry.isIntersecting) {
        gsap.to(section, {
          borderRadius: '0px',
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        });
      } else {
        gsap.to(section, {
          borderRadius: '30px',
          scale: 0.95,
          opacity: 0.8,
          duration: 0.8,
          ease: 'power2.in'
        });
      }
    });
  }, options);
  
  sections.forEach(section => {
    gsap.set(section, {
      borderRadius: '30px',
      scale: 0.95,
      opacity: 0.8
    });
    
    observer.observe(section);
  });

  // PARTE 2: Animación de galería con scroll
  const gallerySection = document.querySelector('.scroll-gallery-section');
  if (gallerySection) {
    const images = document.querySelectorAll('.gallery-image');
    const texts = document.querySelectorAll('.gallery-text');
    const dots = document.querySelectorAll('.scroll-dot');
    let currentIndex = 0;
    let isScrolling = false;
    let scrollTimeout;
    
    // Función para cambiar el contenido activo
    function changeContent(index) {
      // Desactivar todos
      images.forEach(img => img.classList.remove('active'));
      texts.forEach(text => text.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Activar el actual
      images[index].classList.add('active');
      texts[index].classList.add('active');
      dots[index].classList.add('active');
      
      currentIndex = index;
    }
    
    // Manejar el evento de scroll dentro de la sección
    gallerySection.addEventListener('wheel', function(e) {
      e.preventDefault();
      
      if (!isScrolling) {
        isScrolling = true;
        
        // Determinar dirección del scroll
        if (e.deltaY > 0) {
          // Scroll hacia abajo
          const nextIndex = (currentIndex + 1) % images.length;
          changeContent(nextIndex);
        } else {
          // Scroll hacia arriba
          const prevIndex = (currentIndex - 1 + images.length) % images.length;
          changeContent(prevIndex);
        }
        
        // Permitir scroll nuevamente después de un tiempo
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          
          // Si estamos en el último índice y hacemos scroll hacia abajo, continuamos a la siguiente sección
          if (currentIndex === images.length - 1 && e.deltaY > 0) {
            // Desplazarse a la siguiente sección después de la galería
            const nextSection = gallerySection.nextElementSibling;
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 800);
      }
    }, { passive: false });
    
    // Permitir clic en los puntos indicadores
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        changeContent(index);
      });
    });
    
    // Configurar el observador para esta sección
    const galleryObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Reiniciar al primer slide cuando entramos en la sección
        changeContent(0);
      }
    }, { threshold: 0.5 });
    
    galleryObserver.observe(gallerySection);
  }



















  
});


