import { preloader } from './common/preloader';
// import { slider } from './common/slider';

preloader();
// slider();

$('.slider__video').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  prevArrow: '<button class="slider__btn-prev"><img src="./assets/images/arrow-prev.png" alt=""></button>',
  nextArrow: '<button class="slider__btn-next"><img src="./assets/images/arrow-next.png" alt=""></button>',
});