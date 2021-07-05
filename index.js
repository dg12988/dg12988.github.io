window.addEventListener('load', function () {
  document.getElementById("mainBanner").style = "width: 750px;height: 75px;"

  this.startSlider();

  
   
})

function startSlider(){
  // Start Slider
  var card1 = document.getElementById('card1');
  var card2 = document.getElementById('card2');
  var card3 = document.getElementById('card3');

  var tempC1 = card1.innerHTML;
  var tempC2 = card2.innerHTML;
  var tempC3 = card3.innerHTML;

  var n = 0;



setInterval(() => {
  card1.style.opacity = .4;
  card2.style.opacity = .4;
  card3.style.opacity = .4;

 

    setTimeout((n) => {
      switch (n) {
        case 1:
       card1.innerHTML = tempC3;
         card2.innerHTML = tempC1;
           card3.innerHTML = tempC2;
          break;
        case 2:
          card1.innerHTML = tempC2;
          card2.innerHTML = tempC3;
          card3.innerHTML = tempC1;
          break;
        default:
          n = 0;
          card1.innerHTML = tempC1;
          card2.innerHTML = tempC2;
          card3.innerHTML = tempC3;
      }

      card1.style.opacity = .9;
      card2.style.opacity = 1;
      card3.style.opacity = .9;
    }, 250);

      n++;

   
    }, 10000);

    setTimeout(() => {
      document.getElementById('introSection').style.opacity = 1;

    
     
    }, 500);    

setTimeout(() => {

 document.getElementById('mainSection').style.opacity = 1;

 
}, 1500);    
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

function openDialog(ev){

  var element = document.getElementById('dialogWrapper');
  element.style.zIndex = 99;
  element.style.opacity = 1;

  
 var dialog = document.getElementById('dialog');
 dialog.style.zIndex = 100;
 dialog.style.opacity = 1;

}

function clearDialog(){
  var element = document.getElementById('dialogWrapper');
  
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.zIndex = -1;
  }, 500);
}



