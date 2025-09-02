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

   const backToTopButton = document.getElementById('back-to-top');

    // Adiciona um evento de rolagem na janela
    window.addEventListener('scroll', () => {
        // Se a rolagem for maior que 200px, mostra o botão
        if (window.scrollY > 200) {
            backToTopButton.classList.add('show');
            backToTopButton.classList.remove('hidden');
        } else {
            // Caso contrário, esconde o botão
            backToTopButton.classList.remove('show');
            backToTopButton.classList.add('hidden');
        }
    });

    // Adiciona um evento de clique para rolar para o topo
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' /* Rolagem suave */
        });
    });




});




