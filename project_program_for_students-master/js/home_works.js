const input = document.getElementById('gmail_input')
const button = document.getElementById('gmail_button')
const result = document.getElementById('gmail_result')
const regExp = /\@gmail.com$/
button.addEventListener('click', ()=>{
    if (regExp.test(input.value)){
        result.innerHTML= 'CORRECT'
    }else {
        result.innerHTML = 'INCORRECT'
    }
})

const block = document.querySelector('.child_block')
let position = 0
function move (){
    block.style.left = position+'px'
    position+=5
    if (position >=448){
        return
    }
    setTimeout(move,10)

}
move()