import { preloader } from './common/preloader';
// import { slider } from './common/slider';

preloader();
// slider();

$('.slider__video').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});