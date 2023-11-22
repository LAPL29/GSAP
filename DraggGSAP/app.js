const elementsToDrag = document.querySelectorAll('.box:not(.container)');
const container = document.querySelectorAll('.container');

Draggable.create(elementsToDrag, {
    bounds: "body",
    onRelease: function () {
        const targetElement = this.target;
        let find = false;
        container.forEach((circulo) => {
            if (this.hitTest(circulo, '80%') && (!find) && circulo.id == `cont-${targetElement.id}`) {
                this.endDrag();
                gsap.to(targetElement, {
                    duration: 0.5,
                    x: circulo.offsetLeft - targetElement.offsetLeft + (circulo.offsetWidth - targetElement.offsetWidth) / 2,
                    y: circulo.offsetTop - targetElement.offsetTop + (circulo.offsetHeight - targetElement.offsetHeight) / 2,
                });
                find = true;
            }

        });

        if (!find) {
            gsap.to(targetElement, {
                duration: 0.5,
                x: 0,
                y: 0
            });
        }
    }
});