gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contenedor__imagenes',
        markers: true,
        start: 'top top',
        end : '+=700 0 ',
        scrub: 2, // Delay
        pin : true,
    },
});
var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contenedor__imagenes',
        markers: true,
        start: 'top top',
        end : '+=700 0 ',
        scrub: 2, // Delay
        pin : true,
    },
});


tl.to('.carro_1', {x: '1450', duration: 2});
t2.to('.carro_2', {x: '1300', duration: 2});