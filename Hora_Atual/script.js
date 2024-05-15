function carregar() {
    // Obtém os elementos do HTML que serão modificados
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    
    // Obtém a hora atual
    var data = new Date();
    var hora = data.getHours();
    
    // Atualiza a mensagem com a hora atual
    msg.innerHTML = `Agora são ${hora} horas!`;
    
    // Define a imagem e a cor de fundo de acordo com a hora do dia
    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.jpg"; // Define a imagem da manhã
        document.body.style.background = "#BDB76B"; // Define a cor de fundo para a manhã
    } else if (hora >= 12 && hora < 18) {
        img.src = "img/tarde.jpg"; // Define a imagem da tarde
        document.body.style.background = "#FF7F50"; // Define a cor de fundo para a tarde
    } else {
        img.src = "img/noite.jpg"; // Define a imagem da noite
        document.body.style.background = "#4B0082"; // Define a cor de fundo para a noite
    }
}
