var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var mnavbar = document.getElementById("mnavbar");
var windowsize = window.matchMedia("(min-width: 1225px)");
var msticky = mnavbar.offsetTop;

function loadStickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById('naavbar').style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById('naavbar').style.display = "none";
  }

  if (document.documentElement.scrollTop > 1580 && document.documentElement.scrollTop < 2500) {
   if(windowsize.matches)
   {
   document.getElementById('holderportd').style.backgroundImage = "url('./common/white.jpg')";
   document.getElementById('holderportd').style.display = "none";
   }
   document.body.style.background = "black";
   document.getElementById('holder').style.display = "none";
   document.getElementById('holderport').style.display = "none";
   document.getElementById('prefooterspace').style.display = "block";
   document.getElementById('rgster-reason').style.position = "fixed" ;
   document.getElementById('rgster-reason').style.display = "block" ;
  }
  else if (document.documentElement.scrollTop > 2500)
  {
   if(windowsize.matches)
   {
   document.getElementById('holderportd').style.backgroundImage = "url('./common/bubbles.jpg')";
   document.getElementById('holderportd').style.display = "block";
   }
   document.body.style.background = "white";
   document.getElementById('holder').style.display = "block";
   document.getElementById('holderport').style.display = "block";
   document.getElementById('prefooterspace').style.display = "none";
   document.getElementById('rgster-reason').style.position = "absolute" ;
   document.getElementById('rgster-reason').style.display = "none" ;
  }
  else
  {
   document.body.style.background = "white";
   document.getElementById('holderport').style.display = "block";
   document.getElementById('holder').style.display = "block";
   document.getElementById('rgster-reason').style.position = "relative" ;
   document.getElementById('rgster-reason').style.display = "none" ;
  }
}

function loadMstickynav() {
  if (window.pageYOffset >= (msticky+20)) {
    mnavbar.classList.add("msticky");
    document.getElementById('mnaavbar').style.display = "block";
  } else {
    mnavbar.classList.remove("msticky");
    document.getElementById('mnaavbar').style.display = "none";
  }
}

window.onscroll = function() {
loadStickynav();
loadMstickynav();
};
