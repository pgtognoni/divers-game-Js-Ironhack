let height = 0;
let width = 0;

/*/--- Background Image ---/*/
/*/--- Background Image ---/*/

const canvasbg = document.querySelector('#canvas-bg')
const bgctx = canvasbg.getContext('2d');
const bgX = canvasbg.width;
const bgY = canvasbg.height;

const bgImg = new Image();
bgImg.src = '../images/seaBGCrop.png';
let seaX = -50;
let seaY = -50; 
let bgMove = .1;

const drawBG = () => {
    bgctx.globalAlpha = 0.5;
    bgctx.drawImage(bgImg, seaX, seaY, bgX + 50, bgY+50);
    
    seaX += bgMove
    
    if(seaX > -1) {
        bgMove = -.1
    } else if (seaX < -50) {
        bgMove = .1
    }
}

/*/--- End ---/*/

/*/--- GAME CANVAS ---/*/
/*/--- GAME CANVAS ---/*/

const canvas = document.querySelector('#canvas-game')
const ctx = canvas.getContext('2d');

canvas.width = 1920;
canvas.height = 1080;

const canvasX = canvas.width;
const canvasY = canvas.height;
ctx.scale(.1,.1)
//console.log(canvasX, canvasY)

/*/--- Global Variables ---/*/
let isMovingUP = false
let isMovingDown = false
let gameOver = false;
let score = 0;

/*/--- End ---/*/

/*/--- PIP ---/*/
/*/--- PIP ---/*/
const pip = new Image();
const pipX = canvasX/2;
let pipY = canvasY;
let pipSpeed = 100;
pip.src = '../images/scuba.png';

const drawPip = () => {

    ctx.drawImage(pip, pipX, pipY, canvasX*2, canvasY*2)

    if (isMovingUP && pipY > canvasY/3) {
        pipY -= pipSpeed
    }
    if (isMovingDown && pipY < canvasY*10 - canvasY*10/4) {
        pipY += pipSpeed
    }
}
/*/--- End ---/*/

/*/--- Animate ---/*/

const animate = () => {
    bgctx.clearRect(0, 0, bgX, bgY)
    ctx.clearRect(0, 0, canvasX*10, canvasY*10)
    drawBG()
    drawPip()

    if(!gameOver) {
        animateGameID = requestAnimationFrame(animate)
    } else { 
        cancelAnimationFrame(animateGameId);
    }

}

/*/--- End ---/*/

function setCanvasSize(){

    height = window.innerHeight;
    width = window.innerWidth;

    document.getElementById('canvas-bg').style.height = height + "px";
    document.getElementById('canvas-bg').style.width = width + "px";

    console.log(document.getElementById('canvas-bg').style.height,
    document.getElementById('canvas-bg').style.width);
}

window.onload = () => {

    setCanvasSize()
    animate()

    window.addEventListener("resize",setCanvasSize,false);

    document.addEventListener('keydown', event => {
    
        if (event.key === "ArrowUp") {
          // move paddle to the left
          isMovingUP = true
        }
        if (event.key === "ArrowDown") {
          // move paddle to the right
          isMovingDown = true
        }
    })

    document.addEventListener('keyup', () => {
        // Stop moving the paddle
        isMovingUP = false
        isMovingDown = false    
    })
    
}