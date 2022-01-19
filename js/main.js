const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__swiper-button--next',
    prevEl: '.slider__swiper-button--prev',
  },
});



document.addEventListener('keydown', function(event){
  if (event.code == 'ArrowLeft')
  {
    document.querySelector(".slider__swiper-button--prev").click();
  }
});

document.addEventListener('keydown', function(event){
  if (event.code == 'ArrowRight')
  {
    document.querySelector(".slider__swiper-button--next").click();
  }
});
