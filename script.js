var canvas=document.querySelector("canvas");
var context=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let blockX=window.innerWidth/2-50;
let blockY=window.innerHeight/2-50;
var block1=context.fillRect(blockX, blockY, 50,50);
let block_dx=10;
let block_dy=10;

function moveBlockRight(){
    context.clearRect(50,50,blockX, blockY+50);
    if(blockX<window.innerWidth){
        blockX+=block_dx;
    }else{
        blockX=window.innerWidth;
    }
    block1=context.fillRect(blockX, blockY, 50,50);
};
function moveBlockLeft(){
    context.clearRect(50,50,blockX, blockY+50);
    if(blockX>0){
        blockX-=block_dx;
    }else{
        blockX=0;
    };
    block1=context.fillRect(blockX, blockY, 50,50);
};
function moveBlockUp(){
    context.clearRect(50,50,blockX, blockY+50);
    blockY-=block_dy;
    block1=context.fillRect(blockX, blockY, 50,50);
};
function moveBlockDown(){
    context.clearRect(50,50,blockX, blockY+50);
    blockY+=block_dy;
    block1=context.fillRect(blockX, blockY, 50,50);
};
function moveDioganalyRightUp(){
    context.clearRect(50,50,blockX, blockY+50);
    blockX+=block_dx;
    blockY-=block_dy;
    block1=context.fillRect(blockX, blockY, 50,50);
};
function moveDioganalyLeftUp(){
    context.clearRect(50,50,blockX, blockY+50);
    blockY-=block_dy;
    blockX-=block_dx;
    block1=context.fillRect(blockX, blockY, 50,50);
};
function moveDioganalyRightDown(){
    context.clearRect(50,50,blockX, blockY+50);
    blockY+=block_dy;
    blockX+=block_dx;
    block1=context.fillRect(blockX, blockY, 50,50);
};
function moveDioganalyLeftDown(){
    context.clearRect(50,50,blockX, blockY+50);
    blockY+=block_dy;
    if(blockX>0){
        blockX-=block_dx;
    }else if(blockX<0){
        blockX=0;
    };
    block1=context.fillRect(blockX, blockY, 50,50);
};


function shootBullet(){
    console.log('SHOOT');
    let bulletX=blockX+50;
    let bulletY=blockY;
    let bullet=context.fillRect(10,10,bulletX, bulletY);
    
};

document.addEventListener("keydown",function(keyInput){
    switch(keyInput.code){
        case 'KeyD':
            moveBlockRight();
            break;
        case 'KeyA':
            moveBlockLeft();
            break;
        case 'KeyW':
            moveBlockUp();
            break;
        case 'KeyS':
            moveBlockDown();
            break;
        case "KeyY":
            shootBullet();
            break;
    }
});
//Liikuuminen dioganalilla 
let keysPressed = {};
document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    if (keysPressed['w'] && event.key == 'a' || keysPressed['a'] && event.key == 'w') {
        moveDioganalyLeftUp();
    }else if(keysPressed['w'] && event.key == 'd' || keysPressed['d'] && event.key == 'w'){
        moveDioganalyRightUp();
    }else if(keysPressed['s'] && event.key == 'a' || keysPressed['a'] && event.key == 's'){
        moveDioganalyLeftDown()
    }else if(keysPressed['s'] && event.key == 'd' || keysPressed['d'] && event.key == 's'){
        moveDioganalyRightDown();
    }
 });
 
 document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});