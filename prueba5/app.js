
const circulo_1 = document.querySelector('.circulo_1').getBoundingClientRect();
const circulo_2 = document.querySelector('.circulo_2');
const circulo_3 = document.querySelector('.circulo_3');

const circulo_1offsetTop = circulo_1.top;
const circulo_1offsetLeft = circulo_1.left;
const circulo_1offsetRigth = circulo_1.right;


let tl = gsap.timeline({
    repeat: 0,
});

tl.from('.circulo_1', {
    duration: 1.5,
    scale: 5,
    //  x: 0+circulo_1offsetRigth, // Debe ir Positivos
    x: 0 + circulo_1offsetTop,
    y: 90 - circulo_1offsetTop, // Debe ir Negativo
  
});
tl.to('.circulo_2', {
    duration: 1.5,
    scale: 0.3,
    x: 500,

}, '-=1.5');
tl.from('.circulo_3', {
    duration: 1.5,
    borderRadius: '50%',
    x: 500,
});
tl.to('.circulo_4', {
    duration: 1.5,
    rotate: '360deg',
    x: 500,
});