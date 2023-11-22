// Draggable.create(".green", { bounds: "body" });

// const { Tween } = require("gsap/gsap-core");

// Draggable.create(".purple", { inertia: true, bounds: "body" });

// Draggable.create(".orange", { inertia: true, bounds: "body" });

// Draggable.create(".red", { inertia: true, bounds: "body" });

// Selecciona todos los elementos con clase '.box' excepto '#bag'

let elementsToDrag = document.querySelectorAll('.box:not(#bag)');

// Hacer arrastrables solo los elementos seleccionados
Draggable.create(elementsToDrag, {
    bounds: "body",
    onRelease: function(){
        var targetElement = this.target; // Guarda la referencia al elemento .box
        if (this.hitTest("#bag") && targetElement.classList.contains('box')) {
            this.endDrag();
            gsap.to(targetElement, { duration: 1, opacity: 0, onComplete: function() {
                // Deshabilitar la capacidad de arrastre después de que el elemento se desvanezca
                Draggable.get(targetElement).disable();
            }});
        }
    }
});

