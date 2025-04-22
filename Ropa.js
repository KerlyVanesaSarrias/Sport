document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('#multiCardCarousel');
    const carouselInner = carouselElement.querySelector('.carousel-inner');
    const cards = carouselInner.querySelectorAll('.card');
  
    // Añadir animación suave al cambio de slide usando eventos de Bootstrap Carousel
    carouselElement.addEventListener('slide.bs.carousel', (event) => {
      // Añadir clase para animar salida de los cards
      cards.forEach(card => {
        card.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        card.style.opacity = '0.5';
        card.style.transform = 'scale(0.95)';
      });
    });
  
    carouselElement.addEventListener('slid.bs.carousel', (event) => {
      // Restaurar estilo tras animación
      cards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      });
    });
  
    // Animación suave al pasar el cursor sobre cada tarjeta
    cards.forEach(card => {
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        card.style.zIndex = '10';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        card.style.zIndex = '1';
      });
    });
  });