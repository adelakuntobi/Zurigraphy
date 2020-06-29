
    var slideIndex = 0;
  function checkValue(){
    if(window.innerWidth <= '600'){
      var slideIndex = 0;
      showSlides();
    }
    else{
      var slides = document.getElementsByClassName("mySlides");
        slides.style.display = "block";
    }
  }  
   
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3500); 
  }

  function openNav() {
    if(document.getElementById("mySidenav").style.display === "none"){
      document.getElementById("mySidenav").style.display = "block";
    }
    else{
      document.getElementById("mySidenav").style.display = "none";
    }
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }