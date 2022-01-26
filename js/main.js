const hotelSwiper = new Swiper('.hotel-swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-swiper__button--next',
    prevEl: '.hotel-swiper__button--prev',
  },
});

document.addEventListener('keydown', function(event){
  if (event.code == 'ArrowLeft')
  {
    document.querySelector(".hotel-swiper__button--prev").click();
  }
});

document.addEventListener('keydown', function(event){
  if (event.code == 'ArrowRight')
  {
    document.querySelector(".hotel-swiper__button--next").click();
  }
});

const reviewsSwiper = new Swiper('.reviews-swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-swiper__button--next',
    prevEl: '.reviews-swiper__button--prev',
  },
});