function flipImage() {

  if (event.target.id === "resumeButton"){
    document.getElementById("resumeButton").style = "transition: all 1s ease; background-color: lightblue;";
    document.getElementById("DougThumbnail").style =
      "transition: all 1s ease; transform: scaleX(-1);-webkit-transform: scaleX(-1);";}
  else {
    document.getElementById("contactButton").style = "transition: all 1s ease; background-color: lightblue;";
    document.getElementById("DougThumbnail").style =
      "transition: all 1s ease; transform: scaleX(1);-webkit-transform: scaleX(1);";
  }
}
