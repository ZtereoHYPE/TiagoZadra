var contactButton = document.getElementById('contactButton'); //creates contact button variable
var homeButton = document.getElementById('homeButton'); //creates home button variable
var homeCounter = 0;  //creates a counter
var introButton = document.getElementById('introButton'); //creates intro button variable
var myEquipmentButton = document.getElementById('myEquipmentButton'); //creates equipment button variable
var myWorkButton = document.getElementById('myWorkButton'); //creates work variable
var easterButton = document.getElementById('easterButton'); // creates easter egg button variable
var mybutton = document.getElementById("backToTopButton");  // creates my button variable
var checkbox = document.getElementById("checkbox"); // creates checkbox variable
var header = document.getElementById("header"); // creates header variable
var myWorkDiv = document.getElementById("myWorkDiv")
var myEquipmentDiv = document.getElementById("myEquipmentDiv")
introButton.addEventListener('click', () => { //scrolls the screen on click
  document.getElementById('introDiv').scrollIntoView();
});
myWorkButton.addEventListener('click', () => {  //scrolls the screen on click
  document.getElementById('myWorkDiv').scrollIntoView();
});
myEquipmentButton.addEventListener('click', () => { //scrolls the screen on clickv
  document.getElementById('myEquipmentDiv').scrollIntoView();
});
contactButton.addEventListener('click', () => { //scrolls the screen on click
  document.getElementById('contactDiv').scrollIntoView();  
});
easterButton.addEventListener('click', () => {  //takes to never gonna gibe you up video on click
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
homeButton.addEventListener('click', () => {  //count how many times you click home and makes the easter egg appear after 10 clicks
  homeCounter += 1;
  if (homeCounter > 10) {
    easterButton.style.display = "inline-block";
    } else {
      easterButton.style.display = "none";
    }   
}); 
window.onscroll = function() {scrollFunction()};  //makses the back to top button appear when you scroll more than 200 pixels
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {  //creates the scroll back to top function
  document.body.scrollTop = 0;  // For Safari
  document.documentElement.scrollTop = 0; // For all other browsers i guess
}
function parallaxEffect() {
  if (checkbox.checked == true) {
    header.style.backgroundAttachment = "scroll";
    myWorkDiv.style.backgroundAttachment = "scroll";
    myEquipmentDiv.style.backgroundAttachment = "scroll";
  }
  if (checkbox.checked == false) {
    header.style.backgroundAttachment = "fixed";
    myWorkDiv.style.backgroundAttachment = "fixed";
    myEquipmentDiv.style.backgroundAttachment = "fixed";
  }
  console.log(header.style.backgroundAttachment)
}
if(window.innerHeight > window.innerWidth){
  alert("This page is best viewed in landscape mode and on tablets/desktops.");
}