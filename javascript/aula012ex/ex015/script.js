function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('#txtano');
    let res = document.querySelector('#res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados e tente Novamente!!!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        let genero  = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'crianca-menino.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.jpg');
            } else {
                img.setAttribute('src', 'idoso-homem.jpg');
            };
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'crianca-menina.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.jpg');
            } else {
                img.setAttribute('src', 'idoso-mulher.jpg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    };
};