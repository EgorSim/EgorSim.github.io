let player = document.querySelector('.player');
let score = document.querySelectorAll('.score');
let popup = document.querySelector('.popup');
let backgroud = document.querySelector('.background');




//Создание блоков==============================================
// let createBlock = setInterval(() => {
//     let div = document.createElement('img');
//     div.className = "block";
//     div.setAttribute('src', 'img/RTS_Crate.webp');
//     div.setAttribute('height', '50');
//     document.body.prepend(div);
// }, 5000);

setInterval(function(){
    block = document.querySelector('.block')
},1)

//Движение блока==========================================
let moveBlock = setInterval(function(){
    if(block != null){block.style.left = (block.offsetLeft - 2) +"px";}
}, 5)

//Удаление блока==========================================
setInterval(function(){
    if(block != null){
        if(block.offsetLeft < -50) {
            block.remove();
        };
    }
}, 100)


console.log(document.body.clientWidth)
//Создание фона===========================================
function createBackgroundL(){
    let left = document.createElement('img');
    left.className = "background_left";
    left.setAttribute('src', 'img/maxresdefault.jpg');
    document.body.prepend(left);
}
createBackgroundL();
function createBackgroundR(){
    let right = document.createElement('img');
    right.className = "background_right";
    right.setAttribute('src', 'img/maxresdefault.jpg');
    document.body.prepend(right);
    //Смещение правого фона===================================
    setTimeout(function(){
        if(backgroundR != null){
            console.log('ВОт')
            backgroundR.style.left = (document.body.clientWidth - 15) + "px";
        };
    },2)
}
createBackgroundR();

setInterval(function(){
    backgroundL = document.querySelector('.background_left')
},1)
setInterval(function(){
    backgroundR = document.querySelector('.background_right')
},1)

//Движение правого фона===================================
let moveBackgroundR = setInterval(function(){
    if(backgroundR != null){backgroundR.style.left = (backgroundR.offsetLeft - 2) +"px";}
}, 5)
// Движение левого фона===================================
let moveBackgroundL = setInterval(function(){
    if(backgroundL != null){backgroundL.style.left = (backgroundL.offsetLeft - 2) +"px";}
}, 5)

//Левый фон вышел=========================================
setInterval(function(){
    if(backgroundL != null){
        if(backgroundL.offsetLeft < -document.body.clientWidth) {
            backgroundL.remove();
            backgroundR.className = "background_left";
            createBackgroundR()
        };
    }
}, 100)



//Прыжок===============================================
function jump1(){
    if(event.keyCode == '32'){
        player.classList.add('jump');
        document.removeEventListener('keydown', jump1)
    }
    setTimeout(function(){
        player.classList.remove('jump');
        document.addEventListener('keydown', jump1)
    }, 600);
}
function jump(event) {
    document.addEventListener('keydown', jump1)
}
jump(); 




let i = 0;

let timerId = setInterval(function(){
    i ++;
    score[0].innerHTML = i;
    score[1].innerHTML = i;
},100)


// Проигрыш ===============================================================
setInterval(function(){
    let bot = document.body.clientHeight - player.offsetTop - player.offsetHeight;
    if(block != null){
        if(block.offsetLeft < 150 && block.offsetLeft > 60 && bot <= 161){
            popup.style.display = "block";
            document.removeEventListener('keydown', jump1);
            // Тут остановить выполнение функции scoreUp()
            clearInterval(timerId);
            clearInterval(moveBlock);
            clearInterval(createBlock);
        }
    }
}, 1)
// 1
