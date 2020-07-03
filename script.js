//declare variables
var homeCounter = 0;
var easterButton = document.getElementById('easterButton');
var backToTopButton = document.getElementById("backToTopButton");
//make buttons scroll to div + easter egg
document.getElementById('introButton').addEventListener('click', () => { 
  document.getElementById('introDiv').scrollIntoView();
});
document.getElementById('myWorkButton').addEventListener('click', () => {  
document.getElementById('myWorkDiv').scrollIntoView();
});
document.getElementById('myEquipmentButton').addEventListener('click', () => { 
  document.getElementById('myEquipmentDiv').scrollIntoView();
});
document.getElementById('contactButton').addEventListener('click', () => { 
  document.getElementById('contactDiv').scrollIntoView();  
});
easterButton.addEventListener('click', () => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
//count n° times home is clicked for easter egg
var homeButton = document.getElementById('homeButton').addEventListener('click', () => {
  homeCounter += 1;
  if (homeCounter > 10) {
    easterButton.style.display = "inline-block";
    } else {
      easterButton.style.display = "none";
    }   
}); 
//makes back to top button appear on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("backToTopButton").style.display = "block";
  } else {
    document.getElementById("backToTopButton").style.display = "none";
  }
}
//declares back to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
if(window.innerHeight > window.innerWidth){
  alert("This page is best viewed in landscape mode and on tablets/desktops.");
}