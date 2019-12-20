/*These are the variables that assign where the funtion is working in the page by using the query selctor */
const textColor = document.querySelectorAll('#scroll-screen-1')
const listColor = document.querySelectorAll('#location-list li')



/* Script that is running the loading animation on the index.html page as you first open the site*/
function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loading").style.display = "block";
  }

/* The javascript powering the change of the fonts in the event list on the regional series page */
  for (list of listColor){
    list.addEventListener('click', function(){
      this.classList.toggle('list-change');
    });
  }

/* functions for the smooth moving down to certain secion of the page */

  const scroll1 = document.getElementById('scrollSouthend');

  scroll1.addEventListener('click', () => window.scrollTo({
    top: 850,
    behavior: 'smooth',
  }));
 
  const scroll2 = document.getElementById('scrollHNMC');  
 
  scroll2.addEventListener('click', () => window.scrollTo({
    top: 1620,
    behavior: 'smooth',
  }));
 
  const scroll3 = document.getElementById('scrollBoughton');
 
  scroll3.addEventListener('click', () => window.scrollTo({
    top: 2430,
    behavior: 'smooth',
  }));





                        /*    CURRENTLY NOT ACTIVE IN THE WEBSITE.
                              ONLY APPLY TO HTML IN THE JAVASPARE FILE  */

/* This is the for loop that is changing the plain text in to larger yellow writing with the click property*/
  for (text of textColor){
    text.addEventListener("click", function() {
      this.style.color = "Yellow";
      this.style.fontSize = "25px";
    });
  }


  /* The on and off funtions for the overlay affect being swtiched on and off again*/
  /* This overlay feature was found on the W3 website, i then changed some of the css to my own liking */
  function on() {
    document.querySelector("#overlay").style.display = "block";
  }
  
  function off() {
    document.querySelector("#overlay").style.display = "none";
  }


  /* This is the function that uses an if else statment based on the users input of a number value to 
  display one of several messages back to the user on the screen  */
function numberFunction(){

let message;
let number = document.getElementById("user-input").value;


if (isNaN(number)) {
  message = (number + " " + "Hang on ... That doesn't look like a number to me!");
}
else if (number  < 10 ) {
  message = ("low Number");
}
else if (number >=11 && number < 50) {
  message = ('medium number');
}
else if (number >= 50 && number <= 100) {
  message = ('high number');
}
else {
  message = ('To high of a number for me!')
}
 
document.getElementById("displayed-message").innerHTML = message;
}