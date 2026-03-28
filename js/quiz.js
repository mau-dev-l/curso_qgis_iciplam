document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById('qgis-quiz');
    const resultBox = document.getElementById('quiz-result');
    const scoreText = document.getElementById('score-text');
    const feedbackText = document.getElementById('feedback-text');
    const btnRetry = document.getElementById('btn-retry');

    // Respuestas correctas basadas en la presentacion
    const correctAnswers = {
        q1: 'b', // Grados [cite: 13, 14, 15]
        q2: 'c', // EPSG 3857 [cite: 45, 46]
        q3: 'b', // No cambiarlo [cite: 60, 61, 62]
        q4: 'a'  // Ubicar con GPS [cite: 43, 44]
    };

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;
        const formData = new FormData(quizForm);

        // Evaluar respuestas
        for (let [question, answer] of Object.entries(correctAnswers)) {
            if (formData.get(question) === answer) {
                score++;
            }
        }

        // Mostrar resultados
        quizForm.classList.add('hidden');
        resultBox.classList.remove('hidden');
        
        scoreText.textContent = "Obtuviste " + score + " de " + totalQuestions;

        if (score === totalQuestions) {
            feedbackText.textContent = "Excelente trabajo. Tienes dominados los conceptos base de coordenadas.";
        } else if (score >= totalQuestions / 2) {
            feedbackText.textContent = "Buen intento. Dale un repaso rapido a los codigos EPSG en la guia principal.";
        } else {
            feedbackText.textContent = "No te preocupes. Vuelve a la guia, revisa los conceptos y vuelve a intentarlo.";
        }
    });

    // Reiniciar cuestionario
    btnRetry.addEventListener('click', function() {
        quizForm.reset();
        resultBox.classList.add('hidden');
        quizForm.classList.remove('hidden');
    });
});