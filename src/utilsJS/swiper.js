const swiper = () => {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        601: {
            slidesPerView: 2,
        }
    }
  });
};

export default swiper;
