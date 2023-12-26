

carregar = () =>{
    let img = document.getElementById ('img')
    let img1 = document.getElementById ('image')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 4
  
    img.innerHTML = `Agora são ${hora} horas`
    //Condição
    if((hora >= 0) && (hora < 12)){

        //Bom Dia
        img1.src ='foto-2.webp'
    }
    else if((hora >= 12) && (hora < 18)){
        // Boa Tarde

        img1.src='foto-3.webp'
    }
    else{
        //Boa Noite

        img1.src = "foto-1.webp"
    }

}

