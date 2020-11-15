function adjustHeight() {
    document.getElementById('pic').style.height = (document.getElementById('feature').offsetHeight - 19.5)+ "px";
}

function displayMenu(){
    mainNav = document.getElementById('js-menu');
    navBarToggle = document.getElementById('js-navbar-toggle');
    mainNav.classList.toggle('active');
}
