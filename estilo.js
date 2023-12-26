

carregar = () =>{
    let img = document.getElementById ('img')
    let img1 = document.getElementById ('imagem')
    let data = new Date()
    let hora = data.getHours()
    
  
    img.innerHTML = `Agora são ${hora} horas`
    //Condição
    if((hora >= 0) && (hora < 12)){

        //Bom Dia
        img1.src ='manha-1.png'
    }
    else if((hora >= 12) && (hora < 18)){
        // Boa Tarde

        img1.src='template.png'
    }
    else{
        //Boa Noite

        img1.src = "foto-1.webp"
    }

}
