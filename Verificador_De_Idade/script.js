function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano").value;
    var idade = ano - fano;
    var res = document.getElementById("res");

    if (fano.length == 0 || fano > ano) {
        alert("Erro: verifique os dados e tente novamente");
        return;
    }

    var fsex = document.getElementsByName("radsex");
    var genero = "";

    if (fsex[0].checked) {
        genero = "Homem";
        if (idade >= 0 && idade < 10) {
            console.log("Adicionando imagem bebem.png");
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/bebem.png" width="250" height="250">';
        } else if (idade < 21) {
            console.log("Adicionando imagem menino.png");
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/menino.png" width="250" height="250">';
        } else if (idade < 60) {
            console.log("Adicionando imagem homem.png");
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/homem.png" width="250" height="250">';
        } else {
            console.log("Adicionando imagem idoso.png");
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/idoso.png" width="250" height="250">';
        }
    } else {
        genero = "Mulher";
        if (idade >= 0 && idade < 10) {
            console.log("Adicionando imagem bebef.png");
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/bebef.png" width="250" height="250">';
        } else if (idade < 21) {
            console.log("Adicionando imagem menina.png");
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/menina.png" width="250" height="250">';
        } else if (idade < 60) {
            console.log("Adicionando imagem mulher.png");
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/mulher.png" width="250" height="250">';
        } else {
            console.log("Adicionando imagem idosa.png");
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.innerHTML += '<img id="foto" src="img/idosa.png" width="250" height="250">';
        }
    }
    res.style.textAlign = 'center';
}
