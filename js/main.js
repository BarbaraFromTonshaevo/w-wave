const guestSwiper = new Swiper('.about__guest-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.about__guest-swiper-btn.btn-next',
      prevEl: '.about__guest-swiper-btn.btn-prev',
    },
  
  });