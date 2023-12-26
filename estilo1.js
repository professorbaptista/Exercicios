

function verificar() {
    let data = new Date ()
    let anoAtual = data.getFullYear()
    let anoNasc = document.getElementById ('txtn1')
    let resposta = document.getElementById ('res')
    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        window.alert('Erro! Verifique os dados e tente novamente.')
    }
    else 
    {
       let sexo = document.getElementsByName ('radsex')
       let idade = anoAtual - Number(anoNasc.value)
       
       let genero = ''
       if(sexo [0].checked){
        genero = 'Masculino'
       } else if(sexo [1].checked){
        genero = 'Feminino'
       }
       resposta.innerHTML = `Detectamos género ${genero} com ${idade} anos.`
    }
  
}
verificar()

