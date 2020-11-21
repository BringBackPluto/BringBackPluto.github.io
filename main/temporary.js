// Emile Leonhardt







window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
if (currentScrollPos > 80) {
    document.getElementById("scrollimg").style.bottom = "-50px"
    document.getElementById("scrollimg").style.opacity = "0,4";
} else {
    document.getElementById("scrollimg").style.bottom = "0";
    document.getElementById("scrollimg").style.opacity = "0.4";
  }
}


function moreabout() {
  window.scrollTo(0,window.innerHeight+70)
}

function initialscroll() {
  window.scrollTo(0,40)
}

function findoutabout() {
  window.open("../features/features.html");
}

function findoutaboutp() {
  window.open("../key_partners/key_partners.html");
}

function downloadpage() {
  window.open("../download/download.html");
}

function emailus(){
  var link = "mailto:eleon079@uOttawa.ca"
  ;
  window.location.href = link
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





// Slideshow ----------------------------------

    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

    // ----------------------------------------------------

