function clicar() {
    // Obtém os elementos do HTML
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passos');
    let res = document.getElementById('res');

    // Verifica se os campos foram preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!');
    } else {
        // Inicializa o texto do resultado
        res.innerHTML = '<br> <br> Contando: <br>';

        // Converte os valores dos campos para números
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        // Verifica a direção da contagem e realiza a contagem
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                // Adiciona o número ao resultado e um emoji para indicar contagem
                res.innerHTML += `${c} \u{1F448}`;
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                // Adiciona o número ao resultado e um emoji para indicar contagem
                res.innerHTML += `${c} \u{1F448}`;
            }
        }
    }
}
