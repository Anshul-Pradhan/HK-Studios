// Small Screen Menu Toggle
$(document).ready(function () {
    $('.hamburger').click(function(){
        $('.mob-header').addClass('open-state');
    })
});
$(document).ready(function () {
    $('.menu-close').click(function(){
        $('.mob-header').removeClass('open-state');
    })
});

// Exposure Carousel
$('.exposure .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 7000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Awards Ticker Section
$(document).ready(function () {
    $('.ana .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 8000,
        autoplaySpeed: 8000,
        autoplayHoverPause: false
    });
});

// Custom Cursor 
var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$("a, button").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a, button").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});