function verificar() {
    // Obtém a data atual
    var data = new Date();
    var ano = data.getFullYear();

    // Obtém o ano de nascimento digitado pelo usuário
    var fano = document.getElementById("txtano").value;

    // Calcula a idade
    var idade = ano - fano;

    // Obtém o elemento onde será exibido o resultado
    var res = document.getElementById("res");

    // Verifica se o ano de nascimento é válido
    if (fano.length == 0 || fano > ano) {
        alert("Erro: verifique os dados e tente novamente"); // Mostra um alerta se houver erro nos dados
        return; // Sai da função se houver erro
    }

    // Obtém o gênero selecionado pelo usuário
    var fsex = document.getElementsByName("radsex");
    var genero = "";

    // Determina o gênero com base na seleção do usuário e exibe a imagem correspondente
    if (fsex[0].checked) { // Se o gênero for homem
        genero = "Homem";
        if (idade >= 0 && idade < 10) {
            // Exibe imagem para bebê
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/bebem.png" width="250" height="250">';
        } else if (idade < 21) {
            // Exibe imagem para menino
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/menino.png" width="250" height="250">';
        } else if (idade < 60) {
            // Exibe imagem para homem
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/homem.png" width="250" height="250">';
        } else {
            // Exibe imagem para idoso
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/idoso.png" width="250" height="250">';
        }
    } else { // Se o gênero for mulher
        genero = "Mulher";
        if (idade >= 0 && idade < 10) {
            // Exibe imagem para bebê
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/bebef.png" width="250" height="250">';
        } else if (idade < 21) {
            // Exibe imagem para menina
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/menina.png" width="250" height="250">';
        } else if (idade < 60) {
            // Exibe imagem para mulher
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/mulher.png" width="250" height="250">';
        } else {
            // Exibe imagem para idosa
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/idosa.png" width="250" height="250">';
        }
    }
    res.style.textAlign = 'center'; // Centraliza o texto
}
