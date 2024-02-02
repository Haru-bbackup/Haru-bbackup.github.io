    // 로그인  팝업 창 
    function openLoginPopup() {
        document.getElementById("loginPopup").style.display = "flex";
        document.querySelector('.item4').style.display = 'none'
    }
    
    function closeLoginPopup() {
        document.getElementById("loginPopup").style.display = "none";
        document.querySelector('.item4').style.display ='inline-block'}
    
        // 더보기  토글
    const button = document.getElementById('testButton');
    const section = document.getElementById('testSection');
    
    function toggleSectionHeight() {
    section.classList.toggle('more');
    }
    
    button.addEventListener('click', toggleSectionHeight);
    
        // 별점 아이콘
    
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
    result.textContent = `${num}/5`;
    }
    
    executeRating(ratingStars, ratingResult);

// 아이콘 클릭시 로그인 alert

function handleClick(buttonType) {

    const isUserLoggedIn = false;

    if (!isUserLoggedIn) {
    alert("로그인이 필요합니다");
    window.location.href = "../html/log-in.html"
} else {
    switch (buttonType) {
        case 'bookmark':
        break;
        case 'eye':
        break;
        case 'check':
        break;
        case 'ellipsis':
        break;
        default:
        break;
}}}

function goBack() {
    window.history.back();
}

// 좋아요 싫어요 버튼클릭
	function change_btn(e) {
	var btns = document.querySelectorAll(".button1");
	btns.forEach(function (btn, i) {
		if (e.currentTarget == btn) {
	btn.classList.add("active");
		} else {
		btn.classList.remove("active");
		}
	});
	console.log(e.currentTarget);
	}	


// 캐러셀
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