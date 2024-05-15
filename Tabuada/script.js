function clicar() {
    // Obtém o valor do input com id "num"
    var numInput = document.getElementById("num");
    var num = Number(numInput.value);

    // Verifica se o número é válido (positivo e não é NaN)
    if (num <= 0 || isNaN(num)) {
        alert("Número inválido!"); // Mostra um alerta se o número for inválido
        return; // Sai da função se o número for inválido
    }

    // Obtém o elemento com id "text" onde a tabuada será exibida
    var caixa = document.getElementById("text");
    
    var tabuada = "";
    // Loop de 1 até 10 para gerar a tabuada
    for (let i = 1; i <= 10; i++) {
        // Concatena cada linha da tabuada à variável "tabuada"
        tabuada += num + " x " + i + " = " + num * i + "\n";
    }
    
    // Define o tamanho da fonte para 14px
    caixa.style.fontSize = "14px";
    // Exibe a tabuada dentro do elemento com id "text"
    caixa.textContent = tabuada; // tabuada é uma string que contém a tabuada gerada
}
