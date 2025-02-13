function converter() {
    // Obter o valor inserido
    const valor = parseFloat(document.getElementById("valor").value);
    
    if (isNaN(valor)) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
        return;
    }

    // Obter o tipo de conversão selecionado
    const tipoConversao = document.getElementById("tipoConversao").value;

    let resultado = "";

    switch (tipoConversao) {
        case "celsiusFahrenheit":
            // Conversão de Celsius para Fahrenheit
            resultado = (valor * 9/5) + 32;
            document.getElementById("resultado").innerText = `${valor}° Celsius é igual a ${resultado}° Fahrenheit`;
            break;

        case "metrosCentimetros":
            // Conversão de metros para centímetros
            resultado = valor * 100;
            document.getElementById("resultado").innerText = `${valor} metros é igual a ${resultado} centímetros`;
            break;

        case "quilosLibras":
            // Conversão de quilos para libras
            resultado = valor * 2.20462;
            document.getElementById("resultado").innerText = `${valor} quilos é igual a ${resultado.toFixed(2)} libras`;
            break;

        default:
            document.getElementById("resultado").innerText = "Tipo de conversão inválido.";
            break;
    }
}