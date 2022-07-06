var botao1 = document.querySelectorAll('.botao')
var botao = Array.from(botao1)
var som = document.querySelectorAll('audio')
var sons = Array.from(som)


function executar(index){
    sons[index].currentTime = -0.1
    sons[index].play()
}

function evento(evento){

    switch(evento.key){
        case 'q': letra = 0;
        break
        case 'w': letra = 1;
        break
        case 'e': letra = 2;
        break
        case 'r': letra = 3;
        break
        case 'a': letra = 4;
        break
        case 's': letra = 5;
        break
        case 'd': letra = 6;
        break
        case 'f': letra = 7;
        break
        case 'z': letra = 8;
        break
        case 'x': letra = 9;
        break
        case 'c': letra = 10;
        break
        case 'v': letra = 11;
        break;
        //default: window.alert('som não existe')
    }
botao[letra].style.backgroundColor = 'green'
sons[letra].currentTime = -0.1
sons[letra].play()

}
function evento2(){
    botao[letra].style.backgroundColor = 'rgb(31,31,31)'
}


botao.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        executar(index)
    })

})
botao.forEach((item)=>{
    item.addEventListener('keydown', evento)
    })

    botao.forEach((item)=>{
        item.addEventListener('keyup', evento2)
        })    
    

