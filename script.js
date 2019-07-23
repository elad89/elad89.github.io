$(document).ready(function(){
  
var menu = document.querySelector('.menu');
var origOffsetY = menu.offsetTop;

function scroll () {
  if ($(window).scrollTop() >= origOffsetY) {
    $('.menu').addClass('sticky');
    $('section header').addClass('offset');
  } else {
    $('.menu').removeClass('sticky');
    $('section header').removeClass('offset');
  }  
  
}

document.onscroll = scroll;

});