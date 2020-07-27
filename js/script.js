let player = document.querySelector('.player');
let score = document.querySelectorAll('.score');
let popup = document.querySelector('.popup');


function createBlock(){
    let div = document.createElement('img');
    div.className = "block";
    div.setAttribute('src', 'img/RTS_Crate.webp');
    div.setAttribute('height', '50');
    document.body.append(div);
}

let create = setInterval(createBlock(), 5000);

let block = document.querySelector('.block');

function jump1(){
    if(event.keyCode == '32'){
        player.classList.add('jump');
        document.removeEventListener('keydown', jump1)
    }
    setTimeout(function(){
        player.classList.remove('jump');
        document.addEventListener('keydown', jump1)
    }, 700);
}

function jump(event) {
    document.addEventListener('keydown', jump1)
}

jump();

let moveBlock = setInterval(function(){
    block.style.left = (block.offsetLeft - 2) +"px";
}, 5)

setInterval(function(){
    if(block.offsetLeft < -50) {
        block.remove();
    };
}, 100)


let i = 0;

let timerId = setInterval(function(){
    i ++;
    score[0].innerHTML = i;
    score[1].innerHTML = i;
},100)


// Проигрыш ===============================================================
setInterval(function(){
    let bot = document.body.clientHeight - player.offsetTop - player.offsetHeight;
    if(block.offsetLeft < 150 && block.offsetLeft > 60 && bot <= 161){
        popup.style.display = "block";
        document.removeEventListener('keydown', jump1);
        // Тут остановить выполнение функции scoreUp()
        clearInterval(timerId);
        clearInterval(moveBlock);
    }
}, 1)






