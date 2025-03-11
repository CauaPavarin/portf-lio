/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});

// Animar todos os itens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})

// Ativar carregamento no botão de enviar formulário para

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", ()=>{
  btnEnviarLoader.style.display = "block";
  btnEnviar.style.display = "none"
})

// Tira a mensagem de sucesso depois de 5 segundos

setTimeout(() => {
  document.querySelector('#alerta').style.display = 'none';
}, 5000)

// Função para destacar o link ativo na barra lateral
function highlightNavLink() {
  const sections = document.querySelectorAll('section'); // Seleciona todas as seções
  const navLinks = document.querySelectorAll('.nav-link'); // Seleciona todos os links da barra lateral

  window.addEventListener('scroll', () => {
      let current = '';

      // Verifica em qual seção o scroll está
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
          }
      });

      // Adiciona a classe 'active' ao link correspondente
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });
  });
}

highlightNavLink();