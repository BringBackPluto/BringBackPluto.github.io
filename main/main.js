

function myFunction99() {
    var x = document.getElementById("myTopnav");
    var xy = document.getElementById("indexexp");
    if (x.className === "topnav") {
      x.className += " responsive";
      xy.className = "potent1";
    } else {
      x.className = "topnav";
      xy.className = "potent2";
    }
  }
