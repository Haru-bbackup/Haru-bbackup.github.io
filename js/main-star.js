const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star";
   const starClassUnactive = "rating__star far fa-star";
   const starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
      
   });
}

function printRatingResult(result, num = 0) {
   // result.textContent = `${num}/10`;
}

executeRating(ratingStars, ratingResult);


// -----------------------------------------------------------------





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
  
    
    setInterval(nextSlide, 3000);
  
  
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
  
    
    setInterval(nextSlide2, 2000);
  
  
    updateCarousel2();