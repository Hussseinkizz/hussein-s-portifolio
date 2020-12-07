// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size and action btn
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mobi-nav").style.paddingTop = "20px";
    document.getElementById("mobi-nav").style.paddingBottom = "8px";
    document.getElementById("mobi-nav").style.paddingLeft = "5px";
    document.getElementById("mobi-nav").style.paddingRight = "5px";
    document.getElementById("mobi-logo").style.height = "1.5rem";
    document.getElementById("mobi-btn").style.fontSize = "small";
  } else {
    document.getElementById("mobi-nav").style.paddingTop = "10px";
    document.getElementById("mobi-nav").style.paddingBottom = "6px";
    document.getElementById("mobi-nav").style.paddingLeft = "1px";
    document.getElementById("mobi-nav").style.paddingRight = "1px";
    document.getElementById("mobi-logo").style.height = "2rem";
    document.getElementById("mobi-btn").style.fontSize = "medium";

  }
}