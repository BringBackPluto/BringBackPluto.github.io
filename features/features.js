function adjustHeight() {
    document.getElementById('pic').style.height = (document.getElementById('feature').offsetHeight - 20)+ "px";
}

function makeNavVertical() {
    if (document.getElementById('updates').offsetHeight != document.getElementById('feature').offsetHeight) {
        liElements = document.getElementsByClassName('nav');
        for (var i = 0; i < liElements.length; i++){
            liElements[i].style.float = 'bottom';
        }
    }
}