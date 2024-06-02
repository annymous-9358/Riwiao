var menuBtn = document.getElementById('menuBtn');
var mobile = document.getElementById('mhalfpage');
var mhead = document.getElementById('mheader');
var msuper = document.getElementById('msupernavi');
var mheadcntent = document.getElementById("mobileHeadContent");
var mbodycntent = document.getElementById('mobileContent');
var cntent = document.getElementById('content');
var mfooter = document.getElementById('footer1');
var gaps = document.getElementsByClassName('xtraspace');
var lists = document.getElementsByClassName('mnavli');

function sleep(ms) {
  return new Promise(
  resolve => setTimeout(resolve, ms));
}

async function mheaderDisplayer() {
  await sleep(500);
  mhead.style.display = "block";
  msuper.style.display = "block";
  cntent.style.display = "block";
  mfooter.style.display = "block";
  /* for(var i=0 ; i < gaps.length ; i++)
  {
    gaps[i].style.display = "block";
  } */
  mheadcntent.style.height = "auto";
  for(var k=0 ; k < lists.length ; k++)
  {
    lists[k].style.transition = "all 0.6s ease-in";
    lists[k].style.background = "white";
  }
}

async function listeraser() {
  await sleep(500);
  for(var l=0 ; l < lists.length ; l++)
  {
    lists[l].style.transition = "none";
    lists[l].style.background = "none";
  }
}

menuBtn.addEventListener('click', function() {
  if (mhead.style.display === "none") {
    mheadcntent.style.borderRadius = "0";
    mobile.classList.remove('navigation');
    mobile.style.background = "none";
    mheaderDisplayer();
  } else {
    mobile.style.background = "#131a20";
    mhead.style.display = "none";
    msuper.style.display = "none";
    cntent.style.display = "none";
    mfooter.style.display = "none";
    /* for(var j=0 ; j < gaps.length ; j++)
    {
      gaps[j].style.display = "none";
    }  */
    mheadcntent.style.borderRadius = "25px";
    mheadcntent.style.height = "100vh";
    mobile.classList.add('navigation');
    listeraser();
  }
}, false);
