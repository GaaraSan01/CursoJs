function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO!!!] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.querySelectorAll("input[type='radio']")
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >= 0 && idade < 12){
               //criança
               img.setAttribute('src','bebehomem.png')
           } else if (idade < 21){
               //jovem
               img.setAttribute('src','adolecentehomem.png')
           }else if (idade < 50){
               //adulto
               img.setAttribute('src','homemjoven.png')
           }else {
               //idoso
               img.setAttribute('src','homemidoso.png')
           }
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >= 0 && idade < 12){
            //criança
            img.setAttribute('src','bebemulher.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src','adolecentemulher.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','mulherjovem.png')
        }else {
            //idoso
            img.setAttribute('src','mulheridosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}