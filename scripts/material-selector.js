document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos del DOM
    const circleSelectors = document.querySelectorAll('.circle-selector');
    const mainImage = document.getElementById('main-material-image');
    const materialName = document.getElementById('material-name');
    const materialDescription = document.getElementById('material-description');
    
    // Precargar todas las imágenes inmediatamente
    const imageCache = {};
    
    // Función para precargar imágenes de forma agresiva
    const preloadImages = () => {
      circleSelectors.forEach(selector => {
        const imageUrl = selector.getAttribute('data-image');
        if (imageUrl && !imageCache[imageUrl]) {
          const img = new Image();
          img.src = imageUrl;
          imageCache[imageUrl] = img;
        }
      });
    };
    
    // Ejecutar precarga inmediatamente
    preloadImages();
    
    // Función para cambiar el material seleccionado con efecto de zoom
    const changeMaterial = (selector) => {
      // Quitar la clase active de todos los selectores
      circleSelectors.forEach(circle => circle.classList.remove('active'));
      
      // Añadir la clase active al selector clickeado
      selector.classList.add('active');
      
      // Obtener datos del material
      const imageUrl = selector.getAttribute('data-image');
      const name = selector.getAttribute('data-name');
      const description = selector.getAttribute('data-description');
      
      // Actualizar la información del material inmediatamente
      materialName.textContent = name;
      materialDescription.textContent = description;
      
      // Reiniciar la animación de zoom
      mainImage.classList.add('zoom-reset');
      
      // Forzar un reflow para que la animación se reinicie
      void mainImage.offsetWidth;
      
      // Cambiar la imagen y aplicar la animación
      mainImage.src = imageUrl;
      mainImage.classList.remove('zoom-reset');
    };
    
    // Añadir event listeners a los selectores de círculo
    circleSelectors.forEach(selector => {
      selector.addEventListener('click', () => {
        if (!selector.classList.contains('active')) {
          changeMaterial(selector);
        }
      });
    });
  });
  