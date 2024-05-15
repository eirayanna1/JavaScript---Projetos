function clicar() {
    var numInput = document.getElementById("num");
    var num = Number(numInput.value);

    if (num <= 0 || isNaN(num)) {
        alert("Número inválido!");
        return;
    }

    var caixa = document.getElementById("text");
    
    var tabuada = "";
    // Para cada i de 1 até 10 , faz
    for (let i = 1; i <= 10; i++) { // Para de 1 até 10
        // Atribui a cada linha da tabuada com uma quebra de linha 
        tabuada += num + " x " + i + " = " + num * i + "\n";
    }
    
    caixa.style.fontSize = "14px";
    // Exibe a tabuada disponibilizando nos textos
    caixa.textContent = tabuada; /* tabuada é do tipo string*/
}








  
