// Função para lidar com o clique no botão 1
function clicar1() {
    // Obtém o valor do input com id "num"
    var numInput = document.getElementById("num");
    var num = Number(numInput.value);

    // Verifica se o número é válido (entre 1 e 100)
    if (num <= 0 || isNaN(num) || num > 100) {
        alert("Número inválido! Escolha um número entre 1 e 100!");
        return;
    } else {
        // Adiciona o número escolhido ao elemento com id "text"
        var caixa = document.getElementById("text");
        caixa.value += `O número escolhido foi ${num}\n`;
    }
}

// Função para extrair números do conteúdo do elemento com id "text"
function Numeros() {
    var conteudo = document.getElementById("text").value.trim();
    // Usa expressão regular para dividir o conteúdo em números e os converte para números
    return conteudo.split(/\s+/).filter(n => !isNaN(Number(n))).map(Number);
}

// Função para lidar com o clique no botão 2
function clicar2() {
    // Chama a função Numeros para obter os números do conteúdo
    var numeros = Numeros();
    var quantidade = numeros.length;
    var maior = Math.max(...numeros);
    var menor = Math.min(...numeros);
    var soma = numeros.reduce((acc, cur) => acc + cur, 0);
    var media = soma / quantidade || 0; // Evita dividir por zero se não houver números

    // Atualiza o conteúdo do elemento com id "resultado" com as estatísticas calculadas
    var res = document.getElementById("resultado");
    res.innerHTML = "Quantidade de números: " + quantidade + "<br>";
    res.innerHTML += "Maior número: " + maior + "<br>";
    res.innerHTML += "Menor número: " + menor + "<br>";
    res.innerHTML += "Soma dos números: " + soma + "<br>";
    res.innerHTML += "Média dos números: " + media.toFixed(2); // Exibe a média com duas casas decimais
}
