document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById('dia3-quiz');
    const resultBox = document.getElementById('quiz-result');
    const scoreText = document.getElementById('score-text');
    const feedbackText = document.getElementById('feedback-text');
    const btnRetry = document.getElementById('btn-retry');

    // Respuestas correctas del Día 3
    const correctAnswers = {
        q1: 'b', // Base de datos asociada
        q2: 'c', // Simbología Categorizada
        q3: 'b'  // Datos cuantitativos (rangos)
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
                feedbackText.textContent = "¡Perfecto! Has dominado la diferencia entre categorizar cualidades y graduar cantidades.";
            } else if (score >= totalQuestions / 2) {
                feedbackText.textContent = "Buen trabajo. Recuerda: Categorizada para texto/tipos, Graduada para números/rangos.";
            } else {
                feedbackText.textContent = "Te recomendamos revisar la teoría nuevamente. ¡La tabla de atributos y la simbología son el corazón del análisis espacial!";
            }
        });

        btnRetry.addEventListener('click', function() {
            quizForm.reset();
            resultBox.classList.add('hidden');
            quizForm.classList.remove('hidden');
        });
    }
});