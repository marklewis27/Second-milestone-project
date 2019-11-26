/* Script that is running the loading animation on the index.html page as you first open the site*/
function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loading").style.display = "block";
  }


