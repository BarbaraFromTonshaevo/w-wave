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
const playlistCheckbox = document.querySelectorAll('.playlist__genre-label');
if(playlistCheckbox){
  playlistCheckbox.forEach((checkbox)=>{
    checkbox.addEventListener("keydown",(e)=>{
			if(e.keyCode === 13){
        checkbox.querySelector('input').checked = !checkbox.querySelector('input').checked;
      }
    })
  })
}
const agreementCheckbox = document.querySelector(".about__form-agreement-label");
if(agreementCheckbox){
  agreementCheckbox.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
      document.querySelector('.about__form-agreement-input').checked = !document.querySelector('.about__form-agreement-input').checked;
    }
  })
}