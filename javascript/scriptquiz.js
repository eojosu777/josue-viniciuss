let pontuacao = 0;

// Função para verificar a resposta
function checkAnswer(questionNumber, answer) {
    const correctAnswers = {
        1: 'a', // Miroslav Klose
        2: 'c', // Alemanha
        3: 'b'  // Real Madrid
    };

    if (answer === correctAnswers[questionNumber]) {
        pontuacao++;
    }

    // Ocultar a pergunta atual e exibir a próxima
    document.getElementById('question' + questionNumber).style.display = 'none';
    if (questionNumber < 3) {
        document.getElementById('question' + (questionNumber + 1)).style.display = 'block';
    } else {
        // Exibir a pontuação final
        document.getElementById('score').innerText = pontuacao;
        document.getElementById('finalScore').style.display = 'block';
    }
}

// Função para reiniciar o quiz
function restartQuiz() {
    score = 0;
    document.getElementById('finalScore').style.display = 'none';
    document.getElementById('question1').style.display = 'block';
}