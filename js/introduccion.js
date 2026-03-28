document.addEventListener("DOMContentLoaded", function() {
    // Interacción sencilla para resaltar la definición del SIG
    const definitionBox = document.getElementById('interactive-definition');

    if (definitionBox) {
        definitionBox.addEventListener('mouseenter', function() {
            this.classList.add('highlight');
        });

        definitionBox.addEventListener('mouseleave', function() {
            this.classList.remove('highlight');
        });
    }
});