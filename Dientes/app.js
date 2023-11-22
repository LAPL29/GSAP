let elementsToDrag = document.querySelectorAll('.cepillo');

// Hacer arrastrables solo los elementos seleccionados
Draggable.create(elementsToDrag, {
    bounds: "body",
    onRelease: function () {
        var targetElement = this.target; // Guarda la referencia al elemento .box
        if (this.hitTest("#dentadura") && targetElement.classList.contains('cepillo')) {
            dentadura.style.backgroundColor = "blue";
            this.endDrag();
        } else {
            dentadura.style.backgroundColor = "white";
        }
    }
});

