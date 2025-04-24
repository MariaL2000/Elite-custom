
  // Inicializar Smooth Scrollbar
  const scrollbar = Scrollbar.init(document.querySelector('#scrollbar-container'), {
      damping: 0.9,
      thumbMinSize: 40,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true
  });

  // Efecto de la barra de navegación al hacer scroll
  scrollbar.addListener(function(status) {
      const header = document.querySelector('header');
      
      if (status.offset.y > 50) {
          header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
          header.style.background = 'rgba(255, 255, 255, 0.95)';
      } else {
          header.style.boxShadow = 'none';
          header.style.background = 'rgba(255, 255, 255, 0.9)';
      }
  });

  // Navegación suave al hacer clic en los enlaces
  const links = document.vquerySelectorAll('nav a');
  
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              scrollbar.scrollIntoView(targetElement, {
                  offsetTop: 0,
                  onlyScrollIfNeeded: false
              });
          }
      });
  });

