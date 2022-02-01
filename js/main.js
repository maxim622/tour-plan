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

document.addEventListener('keydown', function(event){
  if (event.code == 'Escape')
  {
    modalClose.click();
  }
});

$(".modal__area").validate({
  errorClass: "modal__error",
  messages: {
    name: { 
      required: "*Please specify your name",
      minlength: "*name must be no shorter than 2 characters"
    }, 
    phone: "*Please specify your phone number",
    modalEmail: {
      required: "*We need your email address to contact you",
      modalEmail: "*Your email address must be in the format of name@domain.com"
    }
  }
});


$(".form__area").validate({
  errorClass: "form__error",
  messages: {
    name: { 
      required: "*Please specify your name",
      minlength: "*name must be no shorter than 2 characters"
    }, 
    phone: "*Please specify your phone number",
  }
});

$(".subscribe__field").validate({
  errorClass: "subscribe__error",
  messages: {
    email: {
      required: "*We need your email address to contact you",
      email: "*Your email address must be in the format of name@domain.com"
    }
  }
});

$(document).ready(function(){
   $('.input-phone').mask('+7 (000) 000-00-00');
});