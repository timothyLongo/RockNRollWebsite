function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
//when you click on the button, show it, when clicked again, hide it

function changeColor() {
	document.getElementById("videoIntroDiv").style.color="red";
} //changes text above the fingerstyle video to the color red when moused over
function schangeColor() {
	document.getElementById("svideoIntroDiv").style.color="gold";
} //changes text above the fingerstyle video to the color gold when moused over

function pauseit() {
	document.getElementById("jungleVideo").style.border="none";
	document.getElementById("music").pause();
} //when mousing over the fingerstyle video, this paused the audio
  //at the top of the page so the viewer can play just the 
  //fingerstyle video
