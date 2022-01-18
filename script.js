var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0"; 
  } else {
    document.querySelector(".navbar").style.top = "-5.2rem";
  }
  prevScrollpos = currentScrollPos;

  if(window.scrollY > document.querySelector(".navbar").clientHeight*2) {
    document.querySelector(".navbar").style.background = "#000000"; 
    document.querySelector(".navbar").style.transition = "0.6s";  
  }else{
    document.querySelector(".navbar").style.background = "linear-gradient(      #000000, #00000000)";  
  }
}