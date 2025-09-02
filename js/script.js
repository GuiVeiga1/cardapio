document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto', 
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, 
    watchOverflow: true,
    on: {
      init: function () {
        updateAlignment(this);
      },
      resize: function () {
        updateAlignment(this);
      }
    }

  });

  const swiperMenu = new Swiper('.menu-carrossel-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: {
      enabled: true,
      momentum: false,
    },
    pagination: {
      el: '.swiper-pagination-menu',
      clickable: true,
    },
    watchOverflow: true,
    on: {
      init: function () {
        updateAlignment(this);
      },
      resize: function () {
        updateAlignment(this);
      }
    }
  });

  // Função para atualizar o alinhamento
  function updateAlignment(swiper) {
    const wrapper = swiper.wrapperEl;
    const slidesWidth = Array.from(wrapper.children)
      .reduce((sum, slide) => sum + slide.offsetWidth + swiper.params.spaceBetween, 0);

    if (slidesWidth < swiper.width) {
      // poucos slides → centraliza
      wrapper.style.justifyContent = 'center';
    } else {
      // muitos slides → distribui normal
      wrapper.style.justifyContent = 'flex-start';
    }
  }


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


  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' /* Rolagem suave */
    });
  });

  const precos = document.querySelectorAll(".preco-atual");

  precos.forEach(preco => {

    const valorFinal = parseFloat(
      preco.textContent.replace("R$", "").replace(".", "").replace(",", ".").trim()
    );

    let valorAtual = 0;
    preco.textContent = "R$ 0,00"; // começa do zero

    const intervalo = setInterval(() => {
      valorAtual += 10;

      if (valorAtual >= valorFinal) {
        valorAtual = valorFinal; 
        clearInterval(intervalo);
      }

      preco.textContent = "R$ " + valorAtual.toFixed(2).replace(".", ",");
    }, 40); // velocidade (50ms por incremento)
  });




});




