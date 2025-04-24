document.addEventListener('DOMContentLoaded', function() {
  const reveladorImagen = () => {
    const deslizador = document.getElementById('deslizador-imagen');
    const imagenRevelada = document.querySelector('.imagen-revelada');
    const manijaDeslizador = document.querySelector('.manija-deslizador');
    
    if (!deslizador || !imagenRevelada) return;
    
    // Posición inicial
    actualizarRevelacionImagen(deslizador.value);
    
    // Actualizar al cambiar el deslizador
    deslizador.addEventListener('input', function() {
      actualizarRevelacionImagen(this.value);
    });
    
    function actualizarRevelacionImagen(valor) {
      // Actualizar clip path basado en el valor del deslizador
      imagenRevelada.style.clipPath = `polygon(0 0, ${valor}% 0, ${valor}% 100%, 0 100%)`;
      
      // Actualizar posición de la manija del deslizador
      if (manijaDeslizador) {
        manijaDeslizador.style.left = `${valor}%`;
      }
    }
  };
  
  // Inicializar el revelador de imágenes
  reveladorImagen();
});
