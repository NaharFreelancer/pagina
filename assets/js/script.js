var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1040: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 16,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is less than 768px
//     1040: {
//       slidesPerView: 2,
//     },
//   },
//   breakpoints: {
//     // when window width is less than 768px
//     425: {
//       slidesPerView: 1,
//     },
//   },
//   breakpoints: {
//     // when window width is less than 768px
//     375: {
//       slidesPerView: 1,
//     },
//   },
// });



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  autoplay:true,
  autoplayTimeout:2000,
  stagePadding:50,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:5
      },
      1000:{
          items:8
      }
  }
})


// navbar fixed
  $(document).ready(function() {
    var navbar = $(".navbar");
    var scrollPosition = navbar.offset().top;
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > scrollPosition) {
        navbar.addClass("fixed");
      } else {
        navbar.removeClass("fixed");
      }
    });
  });


// Gallary Slide
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  