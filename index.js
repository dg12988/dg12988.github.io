function loadOperations(){
  document.getElementById("mainBanner").style = "width: 750px;height: 75px;"

  // Start Slider
  var card1 = document.getElementById('card1').innerHTML;
  var card2 = document.getElementById('card2').innerHTML;
  var card3 = document.getElementById('card3').innerHTML;

  var tempC1 = card1;
  var tempC2 = card2;
  var tempC3 = card3;

  var n = 0;

setInterval(() => {
  

    switch (n < 3) {
      case 0:
        card1 = tempC1;
        card2 = tempC2;
        card3 = tempC3;
          break;
      case 1:
        card1 = tempC3;
        card2 = tempC1;
        card3 = tempC2;
        break;
      case 2:
        card1 = tempC2;
        card2 = tempC3;
        card3 = tempC1;
        break;
      default:
        n = 0;
    }
    
      n++;
    }, 3000);
   
  

  }

function flipImage() {

  if (event.target.id === "resumeButton"){
    document.getElementById("resumeButton").style = "transition: all .8s ease; background-color: #496d7e;";
    document.getElementById("contactButton").style = "transition: all .8s ease; background-color: #723d46;";
    document.getElementById("DougThumbnail").style =
      "transition: all 1s ease; transform: scaleX(-1);-webkit-transform: scaleX(-1);";}
  else {
    document.getElementById("contactButton").style = "transition: all .8s ease; background-color: #496d7e;";
    document.getElementById("resumeButton").style = "transition: all .8s ease; background-color: #723d46;";
    document.getElementById("DougThumbnail").style =
      "transition: all 1s ease; transform: scaleX(1);-webkit-transform: scaleX(1);";
  }
}

function openDialog(){

 var element = document.getElementById('dialogWrapper');
 element.style.zIndex = 99;
 element.style.opacity = 1;

 var temp = document.getElementById('dialog');
 temp.style.zIndex = 100;
 temp.style.opacity = 1;




}

function clearDialog(){
  var element = document.getElementById('dialogWrapper');
  
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.zIndex = -1;
  }, 500);
}


