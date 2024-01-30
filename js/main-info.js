const carousel2 = document.getElementById('carousel2');
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carousel2.children.length;
      updateCarousel();
    }
  
    function updateCarousel() {
      const translateValue = -currentIndex * 100 + '%';
      carousel2.style.transform = 'translateX(' + translateValue + ')';
    }
  
    
    setInterval(nextSlide, 2000);
  
  
    updateCarousel();



   //  -------------------------------
   const carousel = document.getElementById('carousel');
    let currentIndexx = 0;
  
    function nextSlide2() {
      currentIndexx = (currentIndexx + 1) % carousel.children.length;
      updateCarousel2();
    }
  
    function updateCarousel2() {
      const translateValue = -currentIndexx * 100 + '%';
      carousel.style.transform = 'translateX(' + translateValue + ')';
    }
  
    
    setInterval(nextSlide2, 3000);
  
  
    updateCarousel2();