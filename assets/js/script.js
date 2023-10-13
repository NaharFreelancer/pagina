var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


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
  