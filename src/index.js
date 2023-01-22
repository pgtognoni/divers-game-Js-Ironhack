/*/--- Image Src ---/*/
/*/--- Image Src ---/*/

const srcObj = {
    50: [
        '../images/50/crab.png',
    ],
    75: [
        '../images/75/goldenfish.png',
        '../images/75/greyfish.png',
        '../images/75/nemo.png',
        '../images/75/redfish.png',
    ],
    100: [
        '../images/100/blueFish.png',
        '../images/100/boy1.png',
        '../images/100/erizo.png',
        '../images/100/orangefish.png',
        '../images/100/camera.png',
        '../images/100/cocan.png'
    ],
    300: [
        '../images/300/girl1.png',
        '../images/300/jelly1.png',
        '../images/300/jelly2.png',
        '../images/300/plasticbag.png',
        '../images/300/plasticbag1.png',
        '../images/300/plasticbag2.png',
    ],
    500: [
        '../images/500/seaHorse1.png',
        '../images/500/shark.png',
        '../images/500/shark3.png',
        '../images/500/shark4.png',
        '../images/500/turtle1.png',
        '../images/1000/octopus.png',
        '../images/1000/seaHorse.png',
        '../images/500/turtle2.png',
        '../images/500/plasticbottle.png',
        '../images/500/plasticbottle1.png',
    ],
    1000: [
        '../images/1000/submarine/submarine1.png',
        '../images/1000/submarine/submarine2.png',
        '../images/1000/diverHarpoon.png',
    ],
    5000: [
        '../images/5000/aquaman.png',
        '../images/5000/mine.png'
    ],
    bullets: [
        '../images/bullets/shell.png',
        '../images/bullets/star.png',
    ],
    scores: [
        '../images/buttons/G50.png',
        '../images/buttons/G75.png',
        '../images/buttons/G100.png',
        '../images/buttons/G300.png',
        '../images/buttons/G500.png',
        '../images/buttons/G1000.png',
        '../images/buttons/G5000.png',
        '../images/buttons/R50.png',
        '../images/buttons/R75.png',
        '../images/buttons/R100.png',
        '../images/buttons/R300.png',
        '../images/buttons/R500.png',
        '../images/buttons/R1000.png',
        '../images/buttons/R5000.png',
    ],
    explosion: [
        '../images/explosion.png',
    ]
}

const createNew = (srcObj) => {

    const lifeArr = [];
    const humansArr = [] 
    const scoresArr = [];
    const bulletsArr = [];
    const explosionArr = [];
    
    for(let value in srcObj) {
        if(value == 50 || value == 75 || value == 100 || value == 300 || value == 500) {
            srcObj[value].forEach(src => {
                const val =  {
                    family: 'life',
                    src: src,
                    value: parseInt(value)
                }
                lifeArr.push(val)
            });
        } else if(value == 5000 || value == 1000) {
            //console.log(srcObj[value])
            srcObj[value].forEach(src => {
                const val =  {
                    family: 'humans',
                    src: src,
                    value: parseInt(value)
                }
                humansArr.push(val)
            });
        } else if(value == 'explosion') {
            srcObj[value].forEach(src => {
                const explosion =  {
                    family: 'explosion',
                    src: src,
                    value: value
                }
                explosionArr.push(explosion)
            });
        } else if(value == 'scores') {
            
            srcObj[value].forEach(src => {
                let value = 0;
                let green = ""
                if (src.match(/G/g)) {
                    let num = src.split('G').filter(item => item.match(/.png/)).map(item => item.replace(".png", "")).toString()
                    const score =  {
                        family: 'scores',
                        src: src,
                        value: parseInt(num),
                        action: 'sum'
                    }
                    scoresArr.push(score)
                } else if (src.match(/R/g)) {
                    let num = src.split('R').filter(item => item.match(/.png/)).map(item => item.replace(".png", "")).toString()
                    const score =  {
                        family: 'scores',
                        src: src,
                        value: parseInt(num),
                        action: 'substract'
                    }
                    scoresArr.push(score)
                }
            });
        } else if(value == 'bullets') {
            srcObj[value].forEach(src => {
                const bullet =  {
                    family: 'bullets',
                    src: src,
                    value: value
                }
                bulletsArr.push(bullet)
            });
        }   
    }

    return  [lifeArr, humansArr, scoresArr, bulletsArr, explosionArr]
}

const imageArr = createNew(srcObj);
console.log(imageArr)

/*/--- End ---/*/

/*/--- Background Image ---/*/
/*/--- Background Image ---/*/
let height = 0;
let width = 0;

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
let pipY = canvasY*4;
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

/*/--- AQUA LIFE ---/*/
/*/--- AQUA LIFE ---/*/

let fishY = canvasY;
let fishX = canvasX*10;

const drawFish = () => {

    let src = imageArr[0][0].src;
    const fish = new Image();
    fish.src = src;

    ctx.drawImage(fish, fishX, fishY, canvasX*2, canvasY*2)
    
    fishX -= 50
         
}

/*/--- End ---/*/

/*/--- Animate ---/*/

const animate = () => {
    bgctx.clearRect(0, 0, bgX, bgY)
    ctx.clearRect(0, 0, canvasX*10, canvasY*10)
    drawBG()
    drawPip()
    drawFish()

    if(!gameOver) {
        animateGameID = requestAnimationFrame(animate)
    } else { 
        cancelAnimationFrame(animateGameId);
    }
    
    if (animateGameID % 100 === 0) {
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