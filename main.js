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


  for (text of textColor){
    text.addEventListener("click", function() {
      this.style.color = "Yellow";
      this.style.fontSize = "25px";
    });
  }


  for (list of listColor){
    list.addEventListener('click', function(){
      this.classList.toggle('list-change');
    });
  }

