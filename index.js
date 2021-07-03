function loadOperations(){
  document.getElementById("mainBanner").style = "display: inline; width: 1000px;height: 100px;"
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

    document.getElementById("dialogWrapper").style = "visibility: visible;";

}

