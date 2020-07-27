let player = document.querySelector('.player');
let block = document.querySelector('.block');
let score = document.querySelectorAll('.score');
let popup = document.querySelector('.popup');


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

setInterval(function(){
    block.style.left = (block.offsetLeft - 2) +"px";
}, 5)

setInterval(function(){
    if(block.offsetLeft < -50) {
        block.remove();
    };
}, 100)


function scoreUp(){
    let i = 0;
    setInterval(function(){
        i ++;
        score[0].innerHTML = i;
        score[1].innerHTML = i;
    },100)
}
scoreUp();

// Проигрыш ===============================================================
setInterval(function(){
    let bot = document.body.clientHeight - player.offsetTop - player.offsetHeight;
    if(block.offsetLeft < 150 && block.offsetLeft > 60 && bot <= 161){
        popup.style.display = "block";
        document.removeEventListener('keydown', jump1);
    }
}, 1)







