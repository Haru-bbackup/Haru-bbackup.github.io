    // 로그인 창
    function openLoginPopup() {
        document.getElementById("loginPopup").style.display = "flex";
        document.querySelector('.item4').style.display = 'none'
    }
    
    function closeLoginPopup() {
        document.getElementById("loginPopup").style.display = "none";
        document.querySelector('.item4').style.display ='inline-block'}
    
        // 더보기 버튼
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
// 로그인 페이지 링크 추가!!!!!
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