 // Gerar um número aleatório entre 1 e 100
 let secretNumber = Math.floor(Math.random() * 100) + 1;
 let attempts = 0;

 // Função para verificar o palpite
 function checkGuess() {
     let userGuess = parseInt(document.getElementById("userGuess").value);
     attempts++;

     if (userGuess < secretNumber) {
         document.getElementById("message").innerText = "Maior! Tente novamente.";
     } else if (userGuess > secretNumber) {
         document.getElementById("message").innerText = "Menor! Tente novamente.";
     } else {
         document.getElementById("message").innerText = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
         document.getElementById("restartButton").style.display = 'inline-block';
     }
 }

 // Função para reiniciar o jogo
 function restartGame() {
     secretNumber = Math.floor(Math.random() * 100) + 1; // novo número aleatório
     attempts = 0;
     document.getElementById("userGuess").value = "";
     document.getElementById("message").innerText = "";
     document.getElementById("restartButton").style.display = 'none';
 }