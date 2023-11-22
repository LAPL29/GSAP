let cepilloMovible = false; // Variable para controlar si el cepillo se puede mover
Draggable.create(".pasta", { // Hacer arrastrable el cepillo y detectar la colisión con los dientes
  bounds: "body",
  onDrag: function () {   // Establecer la variable cepilloMovible a true si la pasta de dientes pasa por el cepillo
    if (this.hitTest('.cepillo')) {
      cepilloMovible = true;
    }
  }
});

Draggable.create(".cepillo", { // Hacer arrastrable el cepillo y detectar la colisión con los dientes
  bounds: "body",
  draggable: false, // Bloquear el movimiento del cepillo
  onDrag: function () {
    if (cepilloMovible) {
      let cepilloRect = this.target.getBoundingClientRect();    // Obtener la posición del cepillo al arrastrar
      let dientesRect = document.querySelector('.dientes').getBoundingClientRect();

      if (this.hitTest('.dientes')) {  // Detectar la colisión entre el cepillo y los dientes
        let progresoLimpieza = (cepilloRect.right - dientesRect.left) / (dientesRect.width); // Calcular el progreso de limpieza basado en la posición del cepillo
        console.log(progresoLimpieza);
        document.querySelector('.dientesLimpios').style.opacity = progresoLimpieza; // Ajustar la opacidad de los dientes limpios gradualmente
      } else {
        document.querySelector('.dientesLimpios').style.opacity = 0;  // Si no hay colisión, ocultar los dientes limpios
      }
    }
  }
});