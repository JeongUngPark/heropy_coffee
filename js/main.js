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

// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    // Badge 숨기기
    gsap.to(badgeEl, .4, {
      opacity: 0,
      display: 'none'
    });
    // 상단으로 이동 버튼 보이기
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });
  } else {
    gsap.to(badgeEl, .4, {
      opacity: 1,
      display: 'block'
    });
    // 상단으로 이동 버튼 숨기기
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});

toTopEl.addEventListener('click', function() {
  gsap.to(window, .6, {
    scrollTo: 0
  });
})

// fade-in 만들기
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// Sipwer 만들기
new Swiper('.notice .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: { //페이지 번호 사용
    el: '.promotion .swiper-pagination', //페이지 번호 요소
    clickable: true //사용자의 페이지 번호 제어 여부
  },
  navigation : {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation : {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next'
  }
});

// 프로모션 토글버튼
const promotionEl = document.querySelector('section.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')

promotionToggleBtn.addEventListener('click', function() {
  if(promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

// 유튜브 부유물
gsap.to('.floating1', 1.5, {
  delay: 1,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

gsap.to('.floating2', 2.5, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

// 스크롤매직
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// 저작권 연도
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();