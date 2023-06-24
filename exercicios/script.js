function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var sec = document.getElementById('sec')

    var data = new Date()
    var hora =  23  //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        img.style.backgroundImage = 'url(img/manha.jpg)'
        document.body.style.background = 'tan'
        sec.style.background = 'wheat'

    } else if (hora >= 12 && hora < 18) {
        img.style.backgroundImage = 'url(img/tarde.jpg)'
        document.body.style.background = 'cadetblue'
        sec.style.background = 'wheat'

    } else {
        img.style.backgroundImage = 'url(img/noite.jpg)'
        document.body.style.background = 'blueviolet'
        sec.style.background = '#2f3944'
    }
}