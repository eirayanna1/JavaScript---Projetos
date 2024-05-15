function clicar1() {
    var numInput = document.getElementById("num");
    var num = Number(numInput.value);

    if (num <= 0 || isNaN(num) || num > 100) {
        alert("Número inválido! Escolha um número entre 1 e 100!");
        return;
    } else {
        var caixa = document.getElementById("text");
        caixa.value += `O número escolhido foi ${num}\n`;
    }
}

function Numeros() {
    var conteudo = document.getElementById("text").value.trim();
    return conteudo.split(/\s+/).filter(n => !isNaN(Number(n))).map(Number);
}

function clicar2() {
    var numeros = Numeros();
    var quantidade = numeros.length;
    var maior = Math.max(...numeros);
    var menor = Math.min(...numeros);
    var soma = numeros.reduce((acc, cur) => acc + cur, 0);
    var media = soma / quantidade || 0; // Evita dividir por zero se não houver números

    var res = document.getElementById("resultado");
    res.innerHTML = "Quantidade de números: " + quantidade + "<br>";
    res.innerHTML += "Maior número: " + maior + "<br>";
    res.innerHTML += "Menor número: " + menor + "<br>";
    res.innerHTML += "Soma dos números: " + soma + "<br>";
    res.innerHTML += "Média dos números: " + media.toFixed(2); // Exibe a média com duas casas decimais
}









  
