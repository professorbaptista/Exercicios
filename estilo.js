

verificar = () => {
    let data = new Date ()
    let anoAtual = data.getFullYear()
    let anoNasc = document.getElementById ('txtn1')
    let resposta = document.querySelector ('div#res')
    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        resposta.innerHTML ='Erro! Verifique os dados e tente novamente.'
    }
    else 
    {
       let sexo = document.getElementsByName ('radsex')
       let idade = anoAtual - Number(anoNasc.value)
       
       let genero = ''
       let img = document.createElement ('img')
       //img.setAttribute ('id', 'foto')
       let resposta = document.getElementById ('res')

       if(sexo [0].checked){
        genero = 'Homem'

        if( idade >= 0 && idade < 10){
            // Criança: carregar foto da criança homem.
            // alert('criança')
            img.setAttribute ('src', 'crianca-h.png')
          
           }

           else if (idade > 10 && idade < 18){

            //Adolescente
             img.setAttribute ('src', 'adole-h.png')
           }

           else if (idade > 18 && idade < 35 ){

            //Jovem         
            img.setAttribute ('src', 'jovem-h.png')
           
           }

           else if(idade > 35 && idade < 45) {

            // Adulto Jovem
            img.setAttribute ('src', 'adulto.png')
            
            
           }
            else if(idade > 45 && idade < 60) {

                //Adulto
                img.setAttribute ('src', 'adulto.png')
                
            }

            else {

                //Idoso
                img.setAttribute ('src', 'idoso.png')
            }
    

       } else if(sexo [1].checked){
        genero = 'Mulher'

        if( idade >= 0 && idade < 10){
            // Criança: carregar foto da criança homem.
            img.setAttribute ('src', 'crianca-m.png')
          
           }

           else if (idade > 10 && idade < 18){

            //adolescente
             img.setAttribute ('src', 'adole-m.png')
           }

           else if (idade > 18 && idade < 35 ){
            img.setAttribute ('src', 'joven-m.png')
           }

           else if(idade > 35 && idade < 45) {

            img.setAttribute ('src', 'adulta.png')
           }
            else if(idade > 45 && idade < 60) {

                img.setAttribute ('src', 'adulta.png')
            }

            else {

                img.setAttribute ('src', 'idosa.png')
            }
       }
       resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`

       resposta.appendChild (img)
    }

  
}
verificar()

