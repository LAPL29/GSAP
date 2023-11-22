
gsap.to(".green", {rotation: 360, x: 100, duration: 1});
gsap.from(".purple", {rotation: -360, x: -100, duration: 1});
gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1});

let nav = document.querySelector('.nav')
let tween = gs", {
  duration: 2, ap.to(".flair
  x: () => nav.offsetWidth, // animate by the px width of the nav
  xPercent: -100, // offset by the width of the box
  rotation: 360, 
  ease: "none", 
  paused: true
});

let playButtonClicked = false; // Variable para verificar si el botón ya ha sido clickeado

function iniciar() {
    const playButton = document.querySelector("#play");
    
    if (!playButtonClicked) { // Verificar si el botón no ha sido clickeado previamente
        playButton.addEventListener('click', () => {
            tween.restart(); // Reiniciar la animación antes de reproducirla
            tween.play();
        });
        
        playButtonClicked = true; // Actualizar la bandera para indicar que el botón ha sido clickeado
    }
}


iniciar(); // Llamar a la función iniciar
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();