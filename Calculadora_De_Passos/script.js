function clicar() {
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passos');
    let res = document.getElementById('res');
    
    
    // Verifica se os campos foram preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!');
    } else {
        res.innerHTML = '<br> <br> Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
    if(i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F448}`}
        }
    else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F448}`
        }   
    }

    }
}
