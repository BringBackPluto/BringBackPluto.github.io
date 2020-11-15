let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

function toggleMenu(){
    alert('Hi');
    mainNav.classList.toggle('active');
}

navBarToggle.addEventListener("click", toggleMenu);