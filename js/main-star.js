// const ratingStars = [...document.getElementsByClassName("rating__star")];
// const ratingResult = document.querySelector(".rating__result");

// printRatingResult(ratingResult);

// function executeRating(stars, result) {
//    const starClassActive = "rating__star fas fa-star";
//    const starClassUnactive = "rating__star far fa-star";
//    const starsLength = stars.length;
//    let i;
//    stars.map((star) => {
//       star.onclick = () => {
//          i = stars.indexOf(star);

//          if (star.className.indexOf(starClassUnactive) !== -1) {
//             printRatingResult(result, i + 1);
//             for (i; i >= 0; --i) stars[i].className = starClassActive;
//          } else {
//             printRatingResult(result, i);
//             for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
//          }
//       };
      
//    });
// }

// function printRatingResult(result, num = 0) {

// }

// executeRating(ratingStars, ratingResult);
// ------------------------------------------------------------------
const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);
executeRating(ratingStars, ratingResult);

function printRatingResult(result, rating) {
   // result.textContent = rating ? `You rated: ${rating} stars` : "";
}

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star";
   const starClassUnactive = "rating__star far fa-star";
   const starsLength = stars.length;

   stars.forEach((star, index) => {
      star.onclick = () => {
         if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, index + 1);
            for (let i = index; i >= 0; --i) stars[i].className = starClassActive;
            // You can customize the notification message here
            alert(`별점 ${index + 1} 점을 입력하셨습니다.`);
         } else {
            printRatingResult(result, index);
            for (let i = index; i < starsLength; ++i) stars[i].className = starClassUnactive;
            // You can customize the notification message here
            // alert(`You removed your rating!`);
         }
      };
   });
}


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