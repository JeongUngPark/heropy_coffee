const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

// 검색창 요소를 클릭하면 넓어짐
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소가 focus 되면 실행
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색창 요소 내부 실제 input 요소가 focus 해제되면(blur) 실행
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 저작권 연도
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();