function calcular() {
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
        return;
    }

    
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num2 !== 0 ? num1 / num2 : "Não é possível dividir por zero";

    document.getElementById("resultado").innerHTML = `
        <p>Soma: ${soma}</p>
        <p>Subtração: ${subtracao}</p>
        <p>Multiplicação: ${multiplicacao}</p>
        <p>Divisão: ${divisao}</p>
    `;
}