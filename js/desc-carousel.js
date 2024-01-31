const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// 다음 버튼을 누르면 이벤트 발생
nextBtn.addEventListener('click', ()=>{
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// 이전 버튼을 누르면 이벤트 발생
prevBtn.addEventListener('click', ()=>{
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  console.log('Fired');
})

carouselSlide.addEventListener('transitioned', () => {
  if(carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.trasition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})