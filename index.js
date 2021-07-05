window.addEventListener('load', function () {
  document.getElementById("mainBanner").style = "width: 750px;height: 75px;"
  

  // Start Slider
  var card1 = document.getElementById('card1');
  var card2 = document.getElementById('card2');
  var card3 = document.getElementById('card3');
  var card4 = document.getElementById('card4');
  var card5 = document.getElementById('card5');
  var card6 = document.getElementById('card6');

  var tempC1 = card1.innerHTML;
  var tempC2 = card2.innerHTML;
  var tempC3 = card3.innerHTML;
  var tempC4 = card4.innerHTML;
  var tempC5 = card4.innerHTML;
  var tempC6 = card4.innerHTML;

  var n = 0;

  card1.style.opacity = .9;
  card2.style.opacity = 1;
  card3.style.opacity = .9;

setInterval(() => {
  card1.style.opacity = .3;
  card2.style.opacity = .3;
  card3.style.opacity = .3;

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

      card1.style.opacity = .9;
      card2.style.opacity = 1;
      card3.style.opacity = .9;

      n++;
    }, 250);

 

   
    }, 10000);

    setTimeout(() => {
      document.getElementById('introSection').style.opacity = 1;

    
     
    }, 500);    

setTimeout(() => {

 document.getElementById('mainSection').style.opacity = 1;

 
}, 1500);    
   
})



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

  var details = document.getElementById('details');
  details.style.visibility = "hidden";
  
 var dialog = document.getElementById('dialog');
 dialog.style.visibility = "visible";
 dialog.style.zIndex = 100;
 dialog.style.opacity = 1;



}
function openDetails(ev){

  var element = document.getElementById('dialogWrapper');
  element.style.zIndex = 99;
  element.style.opacity = 1;

  var details = document.getElementById('details');
  details.style.visibility = "visible";

  details.style.zIndex = 100;
  details.style.opacity = 1;
  
  var dialog = document.getElementById('dialog');
  dialog.style.visibility = "hidden";

  if(ev.target.id = "mappingDetails")
  details.innerHTML="<h1>Mapping Assignment Tool</h1><img src='https://dg12988.github.io/assets/mapping1.png' width='55%;'  alt='thisSiteBanner' id='thisSiteBanner'/><img  src='https://dg12988.github.io/assets/mapping2.png' width='40%;' alt='thisSiteBanner' id='thisSiteBanner/><br><p style='color:white'>Enterprise Software used by Claims Managers to assign claims to Insurance Adjusters via multiple methods, including a Google Map. <br>In the process of development and deployement for this project, I served as Project Manager, as well as the sole Front End Developer.  <br>The skills utilized for this project are, but not limited to: Angular 7, Angular Google Maps API, Angular Material, Typescript, HTML, CSS and The Marker-Clusterer Library.</p>";
  


}
function clearDialog(){
  var element = document.getElementById('dialogWrapper');
  
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.zIndex = -1;
  }, 500);
}



