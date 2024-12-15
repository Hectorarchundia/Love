// script.js

// Cuando se hace clic en el corazón principal
document.getElementById('heart').addEventListener('click', function () {
    const heart = document.getElementById('heart');
    // Cambiar color y pausar la animación
    if (heart.style.animationPlayState === 'paused') {
      heart.style.animationPlayState = 'running';
      heart.style.backgroundColor = '#ff5a5f';
    } else {
      heart.style.animationPlayState = 'paused';
      heart.style.backgroundColor = '#ffb3b3'; // Color más suave al hacer clic
    }
  
    // Ruta al archivo PDF (para el primer corazón)
    const pdfUrl = 'mensaje.pdf'; // Cambia esto por la URL de tu archivo PDF
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'archivo.pdf';
    a.click(); // Inicia la descarga
  });
  
  // Reproducir audio y mostrar imagen cuando se hace clic en un corazón de la parte inferior
  const audioHearts = document.querySelectorAll('.audio-heart');
  const audioPlayer = document.getElementById('audio-player');
  const imageContainer = document.getElementById('image-container');
  const imageDisplay = document.getElementById('image-display');
  
  audioHearts.forEach(heart => {
    heart.addEventListener('click', function () {
      // Obtener la URL del audio y la imagen asociada
      const audioUrl = heart.getAttribute('data-audio');
      const imageUrl = heart.getAttribute('data-image');
      
      // Asignar la fuente del audio y reproducirlo
      audioPlayer.src = audioUrl;
      audioPlayer.play();
  
      // Asignar la imagen y mostrarla
      imageDisplay.src = imageUrl;
      imageContainer.style.display = 'block'; // Mostrar la imagen
    });
  });
