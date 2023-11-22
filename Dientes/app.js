// Hacer arrastrable el cepillo y detectar la colisión con los dientes
Draggable.create(".cepillo", {
    bounds: "body",
    onDrag: function () {
        // Obtener la posición del cepillo al arrastrar
        let cepilloRect = this.target.getBoundingClientRect();
        let dientesRect = document.querySelector('.dientes').getBoundingClientRect();

        // Detectar la colisión usando la función hitTest de GSAP
        if (this.hitTest('.dientes')) {

            let progresoLimpieza = (cepilloRect.right - dientesRect.left) / (dientesRect.width);    // Calcular el progreso de limpieza basado en la posición del cepillo
            document.querySelector('.dientesLimpios').style.opacity = progresoLimpieza; // Ajustar la opacidad de los dientes limpios gradualmente
        } else {
            // Si no se superpone, ocultar los dientes limpios
            document.querySelector('.dientesLimpios').style.opacity = 0;
        }
    }
});