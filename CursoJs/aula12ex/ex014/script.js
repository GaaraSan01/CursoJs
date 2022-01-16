function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#90e0ef'
    } else if (hora >= 12 && hora < 18){
        // Boa tarde!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#e85d04'
    } else{
        // Boa noite!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#dc2f02'
    }
}