function calcularIMC() {
    // Obter os valores de peso e altura
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Validar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        document.getElementById("classificacao").innerText = "";
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Exibir o IMC
    document.getElementById("resultado").innerText = `Seu IMC é: ${imc.toFixed(2)}`;

    // Classificação do IMC
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3 (obesidade mórbida)";
    }

    // Exibir a classificação
    document.getElementById("classificacao").innerText = `Classificação: ${classificacao}`;
}