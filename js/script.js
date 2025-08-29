document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  // Lógica para nav links
  const links = document.querySelectorAll("nav ul li a");
  const containers = document.querySelectorAll(".container");

  links.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 
      links.forEach(l => l.classList.remove("active"));
      containers.forEach(c => c.classList.remove("active"));
      link.classList.add("active");
      containers[index].classList.add("active");
    });
  });




});




