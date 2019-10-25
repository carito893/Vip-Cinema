// JavaScript del proyecto CINEMA -VIP Zone

const box2= document.getElementsByClassName("box2");
const box= document.getElementsByClassName("box");

for (let i=0; i< box2.length; i++) {
    //Añades un evento a cada elemento
    box2[i].addEventListener("mouseenter",()=>{
    box2[i].classList.replace("hover_play", "box2background");//primer parametro el que se va a borrar y el segundo el que voy a aplicar
    box[i].classList.replace("boximg", "boxh");
    });
    
    box2[i].addEventListener("mouseleave",()=>{
        box2[i].classList.replace("box2background", "hover_play");
        box[i].classList.replace("boxh", "boximg");
    });
}

for (let i=0; i< box.length; i++) {
    //Añades un evento a cada elemento
    box[i].addEventListener("mouseenter",()=>{
    box2[i].classList.replace("hover_play", "box2background");
    box[i].classList.replace("boximg", "boxh");
    });
    
    box[i].addEventListener("mouseleave",()=>{
        box2[i].classList.replace("box2background", "hover_play");
        box[i].classList.replace("boxh", "boximg");
    });
}

//--------------------------AQUÍ VA LA PARTE DEL MODAL DE YOUTUBE---------------------

// Toma el modal
var modal = document.getElementById("myModal");
//var modal = document.getElementsByClassName("myModal")[0];

//Toma el botòn que va a abrir el modal
var btn = document.getElementById("myBtn");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[0];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn.onclick = function() {
  modal.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* -----------------------------------imagen 2 modal */

// Toma el modal
var modal2 = document.getElementById("myModal2");
//var modal = document.getElementsByClassName("myModal")[0];

//Toma el botòn que va a abrir el modal
var btn2 = document.getElementById("myBtn2");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[1];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn2.onclick = function() {
  modal2.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal2.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

/* -----------------------------------imagen 3 modal */

// Toma el modal
var modal3 = document.getElementById("myModal3");
//var modal = document.getElementsByClassName("myModal")[0];
//document.getElementById("myBtn").onclick = function()

//Toma el botòn que va a abrir el modal
var btn3 = document.getElementById("myBtn3");


//Toma el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[2];

//Cuando el usuario da click en la imagen de "play", abre el cuadro del video
btn3.onclick = function() {
  modal3.style.display = "block";
}

//Cuando el usuario da click en la equis X (el span), cierra el cuadro del video
span.onclick = function() {
  modal3.style.display = "none";
}

// Cuando el usuario da click en cualquier parte fuera del vìdeo, se cierra.
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
//--------------------------------------------------------AQUÍ EMPIEZA EL SLIDER NO LO BORREN-------------------
var slideIndex = 0;
showSlides();

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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//------------------------------------------------------------ AQUÍ ACABA EL SLIDER--------------------------


