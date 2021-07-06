window.addEventListener("load", function () {
  document.getElementById("mainBanner").style = "width: 750px;height: 75px;";
  let n = 0;
  let ev = null;
  toggleCards(n, ev);
});

function toggleCards(n, ev) {
  // Start Slider
  var card1 = document.getElementById("card1");
  var card2 = document.getElementById("card2");
  var card3 = document.getElementById("card3");
  var card4 = document.getElementById("card4");
  var card5 = document.getElementById("card5");
  var card6 = document.getElementById("card6");

  var tempC1 = card1.innerHTML;
  var tempC2 = card2.innerHTML;
  var tempC3 = card3.innerHTML;
  var tempC4 = card4.innerHTML;
  var tempC5 = card5.innerHTML;
  var tempC6 = card6.innerHTML;

  var n = 0;

  setInterval(() => {
    card1.style.opacity = 0.3;
    card2.style.opacity = 0.3;
    card3.style.opacity = 0.3;

    setTimeout(() => {
      switch (n) {
        case 1:
          card1.innerHTML = tempC4;
          card2.innerHTML = tempC5;
          card3.innerHTML = tempC6;
          break;
        default:
          n = 0;
          card1.innerHTML = tempC1;
          card2.innerHTML = tempC2;
          card3.innerHTML = tempC3;
      }

      card1.style.opacity = 1;
      card2.style.opacity = 1;
      card3.style.opacity = 1;
    }, 250);

    n++;
  }, 20000);

  setTimeout(() => {
    document.getElementById("introSection").style.opacity = 1;
  }, 2000);

  setTimeout(() => {
    document.getElementById("mainSection").style.opacity = 1;
  }, 5000);

  // if(n === 0){
  //   n=1;
  // }
  // else{
  //   n=0;
  // }

  // return n;
}

function flipImage() {
  if (event.target.id === "resumeButton") {
    document.getElementById("resumeButton").style =
      "transition: all .8s ease; background-color: #496d7e;";
    document.getElementById("contactButton").style =
      "transition: all .8s ease; background-color: #723d46;";
    document.getElementById("DougThumbnail").style =
      "transition: all 1s ease; transform: scaleX(-1);-webkit-transform: scaleX(-1);";
  } else {
    document.getElementById("contactButton").style =
      "transition: all .8s ease; background-color: #496d7e;";
    document.getElementById("resumeButton").style =
      "transition: all .8s ease; background-color: #723d46;";
    document.getElementById("DougThumbnail").style =
      "transition: all 1s ease; transform: scaleX(1);-webkit-transform: scaleX(1);";
  }
}

function openDialog(ev) {
  var element = document.getElementById("dialogWrapper");
  element.style.zIndex = 99;
  element.style.opacity = 1;

  var details = document.getElementById("details");
  details.style.visibility = "hidden";

  var dialog = document.getElementById("dialog");
  dialog.style.visibility = "visible";
  dialog.style.zIndex = 100;
  dialog.style.opacity = 1;
}
function openDetails(ev) {
  var child1 = document.getElementById("child1");
  var child2 = document.getElementById("child2");
  var child3 = document.getElementById("child3");
  var child4 = document.getElementById("child4");
  var child5 = document.getElementById("child5");
  var child6 = document.getElementById("child6");

  var element = document.getElementById("dialogWrapper");
  element.style.zIndex = 99;
  element.style.opacity = 1;

  var details = document.getElementById("details");
  details.style.visibility = "visible";

  details.style.zIndex = 100;
  details.style.opacity = 1;

  var dialog = document.getElementById("dialog");
  dialog.style.visibility = "hidden";
  console.log(ev.target.id);
  if (ev.target.id === "mappingDetails") {
    child2.style.display = "none";
    child1.style.display = "block";
    child3.style.display = "none";
    child4.style.display = "none";
    child5.style.display = "none";
    child6.style.display = "none";
  }
  if (ev.target.id === "insuredDetails") {
    child1.style.display = "none";
    child2.style.display = "block";
    child3.style.display = "none";
    child4.style.display = "none";
    child5.style.display = "none";
    child6.style.display = "none";
  }
  if (ev.target.id === "adjusterDetails") {
    child1.style.display = "none";
    child3.style.display = "block";
    child2.style.display = "none";
    child4.style.display = "none";
    child5.style.display = "none";
    child6.style.display = "none";
  }
  if (ev.target.id === "haDetails") {
    child2.style.display = "none";
    child1.style.display = "none";
    child3.style.display = "none";
    child4.style.display = "block";
    child5.style.display = "none";
    child6.style.display = "none";
  }
  if (ev.target.id === "portDetails") {
    child1.style.display = "none";
    child2.style.display = "none";
    child3.style.display = "none";
    child4.style.display = "none";
    child5.style.display = "block";
    child6.style.display = "none";
  }
  if (ev.target.id === "sealcoatDetails") {
    child1.style.display = "none";
    child3.style.display = "none";
    child2.style.display = "none";
    child4.style.display = "none";
    child5.style.display = "none";
    child6.style.display = "block";
  }
}
function clearDialog() {
  var element = document.getElementById("dialogWrapper");

  element.style.opacity = 0;
  setTimeout(() => {
    element.style.zIndex = -1;
  }, 500);
}
