let toggle = document.getElementById('toggle') //botao com id toggle
let themeSystem = localStorage.getItem('themeSystem') || 'dark' //padrao

mudarTema(themeSystem); //chama a varial com o tema que esta no localStorage

if(toggle){ //verifica se o botao existe
    toggle.addEventListener('click', () => { //add determinada acao quando eu 'clicar' 
    let temaAtual =document.documentElement.getAttribute('data-theme'); //le o valor atual que esta em data-theme

    let novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    
   localStorage.setItem('themeSystem',novoTema); //salva o novo tema no localstorage 
   
   mudarTema(novoTema)
    })
}
function mudarTema(theme){
    document.documentElement.setAttribute('data-theme',theme);
}

