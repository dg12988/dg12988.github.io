function flipImage() {

  if (event.target.id === "resumeButton"){
    document.getElementById("resumeButton").style = "transition: all 1s ease; background-color: white;";
    document.getElementById("DougThumbnail").style =
      "transition: all 1s ease; transform: scaleX(-1);-webkit-transform: scaleX(-1);";}
  else {
    document.getElementById("DougThumbnail").style =
      "transition: all 1s ease; transform: scaleX(1);-webkit-transform: scaleX(1);";
  }
}
