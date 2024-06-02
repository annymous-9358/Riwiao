var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var mnavbar = document.getElementById("mnavbar");
var msticky = mnavbar.offsetTop;

function loadStickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById('naavbar').style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById('naavbar').style.display = "none";
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
