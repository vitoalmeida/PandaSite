var prevScrollpos = window.pageYOffset;
var navBar = document.querySelector(".navbar");

var sobre = document.querySelector(".sobre")
var sobreImagem = document.querySelector(".imagem");
var sobreTexto = document.querySelector(".texto");

var download = document.querySelector(".download");
var downloadImagem = document.querySelector(".img-download");
var downloadTexto = document.querySelector(".texto-download");

window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0"; 
  } else {
    navBar.style.top = "-5.2rem";
  }
  prevScrollpos = currentScrollPos;

  if(window.scrollY > navBar.clientHeight*2) {
    navBar.style.background = "#000000"; 
    navBar.style.transition = "0.6s";  
  } else{
    navBar.style.background = "linear-gradient(      #000000, #00000000)";  
  }

  if(window.scrollY > sobre.clientHeight*0.3 && window.scrollY < sobre.clientHeight*1.7) {
    sobreImagem.classList.add('fade-sobre');
    sobreTexto.classList.add('fade-sobre');
  } else {
    sobreImagem.classList.remove('fade-sobre');
    sobreTexto.classList.remove('fade-sobre');
  }
  
  if(window.scrollY > download.clientHeight*1.8) {
    downloadImagem.classList.add('slide-download');
    downloadTexto.classList.add('fade-download');
  } else {
    downloadImagem.classList.remove('slide-download');
    downloadTexto.classList.remove('fade-download');
  }
}