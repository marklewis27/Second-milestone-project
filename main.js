/*These are the variables that assign where the funtion is working in the page by using the query selctor */
const textColor = document.querySelectorAll('#scroll-screen-1')
const listColor = document.querySelectorAll('#example-list li')



/* Script that is running the loading animation on the index.html page as you first open the site*/
function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loading").style.display = "block";
  }

/* This is the for loop that is changing the plain text in to larger yellow writing with the click property*/
  for (text of textColor){
    text.addEventListener("click", function() {
      this.style.color = "Yellow";
      this.style.fontSize = "25px";
    });
  }

  /* The for loop that lopps through the list items and adds the css properties when clicked on,
  and then returns the list item to default with a second click*/
  for (list of listColor){
    list.addEventListener('click', function(){
      this.classList.toggle('list-change');
    });
  }

  /* The on and off funtions for the overlay affect being swtiched on and off again*/
  function on() {
    document.querySelector("#overlay").style.display = "block";
  }
  
  function off() {
    document.querySelector("#overlay").style.display = "none";
  }


function numberFunction(){

let message;
let number = document.getElementById("user-input").value;

if (number <= 10 ) {
  message = ("low number");
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