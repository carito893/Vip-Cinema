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