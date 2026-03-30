document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById('recap-quiz');
    const resultBox = document.getElementById('quiz-result');
    const scoreText = document.getElementById('score-text');
    const feedbackText = document.getElementById('feedback-text');
    const btnRetry = document.getElementById('btn-retry');

    // Respuestas correctas del Día 1
    const correctAnswers = {
        q1: 'c', // EPSG 32615
        q2: 'a', // CVE_MUN = '101'
        q3: 'b', // Raster
        q4: 'b'  // Polígonos y Líneas
    };

    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let score = 0;
            let totalQuestions = Object.keys(correctAnswers).length;
            const formData = new FormData(quizForm);

            for (let [question, answer] of Object.entries(correctAnswers)) {
                if (formData.get(question) === answer) {
                    score++;
                }
            }

            quizForm.classList.add('hidden');
            resultBox.classList.remove('hidden');
            
            scoreText.textContent = "Obtuviste " + score + " de " + totalQuestions;

            if (score === totalQuestions) {
                feedbackText.textContent = "¡Excelente! Tienes las bases sólidas para continuar con la sesión de hoy.";
            } else if (score >= totalQuestions / 2) {
                feedbackText.textContent = "Buen trabajo. Repasa rápidamente los conceptos que fallaron en el resumen superior antes de avanzar.";
            } else {
                feedbackText.textContent = "Te recomendamos leer el resumen de la sesión nuevamente para afianzar estos conceptos clave.";
            }
        });

        btnRetry.addEventListener('click', function() {
            quizForm.reset();
            resultBox.classList.add('hidden');
            quizForm.classList.remove('hidden');
        });
    }
});