var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var mnavbar = document.getElementById("mnavbar");
var msticky = mnavbar.offsetTop;
var x = window.matchMedia("(min-width: 1025px)");

function loadDloader() {
if (document.documentElement.scrollTop > 2285 && document.documentElement.scrollTop < 3000) {
   document.body.style.background = "black";
  }
  else if (document.documentElement.scrollTop > 3000)
  {
   document.body.style.background = "white";
  }
  else
  {
   document.body.style.background = "white";
  }

  var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

  var hTT = $('#scroll-too').offset().top,
       hHH = $('#scroll-too').outerHeight(),
       wHH = $(window).height(),
       wSS = $(this).scrollTop();

  if (wSS < (hTT+hHH-wHH+479)  && wS > (hT+hH-wH-160)) {
       $('#scrollingbar').css("display", "block");
       // $('#staticvcle').css("display", "none");
   }
   else
   {
       $('#scrollingbar').css("display", "none");
       // $('#staticvcle').css("display", "block");
   }

   var hTps = $('#products-start').offset().top,
       hHps = $('#products-start').outerHeight(),
       wHps = $(window).height(),
       wSps = $(this).scrollTop();

   var hTpe = $('#products-end').offset().top,
       hHpe = $('#products-end').outerHeight(),
       wHpe = $(window).height(),
       wSpe = $(this).scrollTop();

   if (wSps > (hTps+hHps-wHps+500) && wSpe < (hTpe+hHpe-wHpe+456))
   {
       $('#producthder').addClass('aactive');
       $('#productnaavbar').addClass('proactive');
   }
   else
   {
       $('#producthder').removeClass('aactive');
       $('#productnaavbar').removeClass('proactive');
   }

   if (wSpe < (hTpe+hHpe-wHpe+1096) && wSpe > (hTpe+hHpe-wHpe+456))
   {
       $('#pricinghder').addClass('aactive');
       $('#pricingnaavbar').addClass('proactive');
   }
   else
   {
       $('#pricinghder').removeClass('aactive');
       $('#pricingnaavbar').removeClass('proactive');
   }
}

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

function windowFunction(x) {
  if (x.matches) {
    window.onscroll = function() {
      loadDloader();
      loadStickynav();
    };
  } else {
     window.onscroll = function() {  loadMstickynav();  };
  }
}
