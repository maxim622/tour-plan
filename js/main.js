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

var menuButton = document.querySelector(".navigation-buttons");

menuButton.addEventListener("click", function() {
  document.querySelector(".navbar-menu").classList.toggle("navbar-menu--mobile--hidden"),
  document.querySelector(".navigation-buttons").classList.toggle("navigation-buttons--close"),
  document.querySelector(".navigation-buttons__line-1").classList.toggle("navigation-buttons__line--invisible")
  document.querySelector(".navigation-buttons__line-2").classList.toggle("navigation-buttons__line--invisible")
  document.querySelector(".navigation-buttons__line-3").classList.toggle("navigation-buttons__line--invisible")
});

var modal  = $(".booking__button")
var modalClose = $(".modal__close-button")

modal.on("click", function() {
  $(".modal__overlay").addClass("modal__overlay--visible")
  $(".modal__dialog").addClass("modal__dialog--visible")
});

modalClose.on("click", function() {
  event.preventDefault()
  $(".modal__overlay").removeClass("modal__overlay--visible")
  $(".modal__dialog").removeClass("modal__dialog--visible")
});

