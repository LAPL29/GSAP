// gsap.from('.cuadrado_1, .cuadrado_3',{
//     duration: 3,
//     x:600,
//     delay: 0.5,
//     borderRadius: 50,
//     ease: 'bounce.out'
// });
// gsap.to('.cuadrado_2, .cuadrado_4',{
//     duration: 3,
//     x:600,
//     delay: 0.5,
//     borderRadius: '50%',
//     ease: 'bounce.out'
// })

// gsap.to('.cuadrado_1', {
//     duration:2.5,
//     ease: "steps(12)",
//     y: 500
//     });


// gsap.to('.cuadrado_2, .cuadrado_4',{
//     duration: 3,
//     x:600,
//     delay: 0.5,
//     borderRadius: '50%',
//     ease: 'bounce.out'
// });

let tl = gsap.timeline({
   repeat: 0, 
});

tl.from('.cuadrado_1',{
    duration: 1.5,
    scale: 2,
    x: 500,
});
tl.to('.cuadrado_2',{
    duration: 1.5,
    scale: 0.3,
    x: 500,
   
},'-=1.5');
tl.from('.cuadrado_3',{
    duration: 1.5,
    borderRadius: '50%',
    x: 500,
});
tl.to('.cuadrado_4',{
    duration: 1.5,
    rotate: '360deg',
    x: 500,
});