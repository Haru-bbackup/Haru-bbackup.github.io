// 영화 상세 설명 더보기 누르면 텍스트 확장
document.getElementById('moreLink').addEventListener('click', function(event) {
  event.preventDefault();

  var textMore = document.getElementById('text_more');

  textMore.classList.toggle('expanded');

  var moreLink = document.getElementById('moreLink');

  // moreLink.innerHTML = (textMore.classList.contains('expanded')) ? '더보기<strong> ∧</strong>' : '더보기<strong> ∨</strong>';
  
});
