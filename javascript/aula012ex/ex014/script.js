function carregar() {
    var msg = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var data = new Date();
    var hora =  data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >= 0 && hora < 12 ) {
        img.src = 'imagens/imagem-manha.jpg'
        document.body.style.background = '#6E85A0'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/imagem-tarde.jpg'
        document.body.style.background = '#A65729'
    } else {
        img.src = 'imagens/imagem-noite.jpg'
        document.body.style.background = '#A488BF'
    }
};
