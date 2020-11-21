function displayMenu(){
    mainNav = document.getElementById('js-menu');
    navBarToggle = document.getElementById('js-navbar-toggle');
    mainNav.classList.toggle('active');
}
function myFunction99() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
