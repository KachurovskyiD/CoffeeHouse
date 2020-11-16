// Slick slider

$(document).ready(function () {
  $('.reviews__slider').slick({
    arrows: false,
    fade: true
  });

  $('.reviews__controls-prev').click(function () {
    $('.reviews__slider').slick('slickPrev');
  });
  $('.reviews__controls-next').click(function () {
    $('.reviews__slider').slick('slickNext');
  });
});

$(window).resize(function () {
  $('.reviews__slider').slick('setPosition');
});