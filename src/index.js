/*/--- Image Src ---/*/
/*/--- Image Src ---/*/
//import { imageArr, srcObj } from "./imagesGen.js";
const srcObj = {
    50: [
        '../images/50/crab.png',
        '../images/100/erizo.png',
        '../images/1000/seaHorse.png',
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
        '../images/100/orangefish.png',
    ],
    300: [
        '../images/300/girl1.png',
        '../images/300/jelly1.png',
        '../images/5000/mine.png'
    ],
    500: [
        '../images/500/seaHorse1.png',
        '../images/500/turtle1.png',
        '../images/1000/octopus.png',
        '../images/500/turtle2.png',
    ],
    1000: [
        '../images/1000/submarine/submarine1.png',
        '../images/1000/submarine/submarine2.png',
        '../images/1000/diverHarpoon.png',
    ],
    2000: [
        '../images/500/shark3.png',
        '../images/500/shark4.png',
    ],
    5000: [
        '../images/5000/aquaman.png',
    ],
    scores: [
        '../images/buttons/G50.png',
        '../images/buttons/G75.png',
        '../images/buttons/G100.png',
        '../images/buttons/G300.png',
        '../images/buttons/G500.png',
        '../images/buttons/G1000.png',
        '../images/buttons/G2000.png',
        '../images/buttons/G5000.png',
        '../images/buttons/R50.png',
        '../images/buttons/R75.png',
        '../images/buttons/R100.png',
        '../images/buttons/R300.png',
        '../images/buttons/R500.png',
        '../images/buttons/R1000.png',
        '../images/buttons/R2000.png',
        '../images/buttons/R5000.png',
    ],
    garbage: [
        '../images/100/camera.png',
        '../images/100/cocan.png',
        '../images/300/plasticbag.png',
        '../images/300/plasticbag1.png',
        '../images/300/plasticbag2.png',
        '../images/500/plasticbottle.png',
        '../images/500/plasticbottle1.png',
    ]
}

const createNew = (srcObj) => {

    const lifeArr = [];
    const humansArr = [] 
    const scoresArr = [];
    const bulletsArr = [];
    const explosionArr = [];
    const garbageArr = [];
    
    for(let value in srcObj) {
        if(value == 50 || value == 75 || value == 100 || value == 300 || value == 500 || value == 2000) {
            srcObj[value].forEach(src => {
                const val =  {
                    family: 'life',
                    src: src,
                    value: parseInt(value)
                }
                lifeArr.push(val)
            });
        } else if(value == 5000 || value == 1000) {
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
        } else if(value == 'garbage') {
            srcObj[value].forEach(src => {
                const garbage =  {
                    family: 'garbage',
                    src: src,
                    value: 100
                }
                garbageArr.push(garbage)
            });
        }
           
    }

    return  [lifeArr, humansArr, scoresArr, bulletsArr, explosionArr, garbageArr]
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

const boat = new Image();
boat.src = '../images/naufragio.png'

const drawBG = () => {
    bgctx.globalAlpha = 0.5;
    bgctx.drawImage(bgImg, seaX, seaY, bgX + 50, bgY+50);
    bgctx.drawImage(boat, bgX/1.45, bgY/2.8, 90, 60)

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

const CANVAS_X = canvas.width;
const CANVAS_Y = canvas.height;
ctx.scale(.1,.1)

/*/--- Global Variables ---/*/
const minY = CANVAS_Y/2;
const maxY = CANVAS_Y*10 - CANVAS_Y*10/4.5
const positionX = CANVAS_X*10
let isMovingUP = false
let isMovingDown = false
let gameOver = false;
let GameScore = 0;
let positionY = 0;
let speedX = 20;

/*/--- End ---/*/

/*/--- PIP ---/*/
/*/--- PIP ---/*/
const pip = new Image();
const pipX = CANVAS_X/2;
let pipY = CANVAS_Y*4;
let pipSpeed = 100;
pip.src = '../images/scuba.png';

const coral = new Image();
coral.src = '../images/coral.png'

const drawPip = () => {

    ctx.drawImage(pip, pipX, pipY, CANVAS_X*2, CANVAS_Y*2)
    ctx.drawImage(coral, CANVAS_X/0.35, CANVAS_Y*6.2, CANVAS_X*4, CANVAS_Y*4)
   
    if (isMovingUP && pipY > minY) {
        pipY -= pipSpeed
    }
    if (isMovingDown && pipY < maxY) {
        pipY += pipSpeed
    }
}
/*/--- End ---/*/

/*/--- OBSTACLES ---/*/
/*/--- OBSTACLES ---/*/

const objArr = {
    array50: [],
    array75: [],
    array100: [],
    array300: [],
    array500: [],
    array1000: [],
    array2000: [],
    garbageArr: [],
}
const humanObj = {
    array1000: [],
    array5000: [],
}

const scoreArr= [];
const bulletArr = [];


class Objstacle {
    constructor(positionX, positionY, width, height, src, family, value) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.src = src;
        this.name = family;
        this.value = value;
    }

    createObject = () => {
        const obstacle = new Image();
        obstacle.src = this.src;
        obstacle.setAttribute('data-name', this.name);
        obstacle.setAttribute('data-value', this.value);

        ctx.drawImage(obstacle, this.positionX, this.positionY, this.width, this.height)
    }
}

const createElement = (array, width, height) => {

    const index = Math.floor(Math.random() * array.length);
    const src = array[index].src;
    const value = array[index].value;
    const family = array[index].family;
    const posY = positionY
    const newObstacle = new Objstacle(positionX, posY, width, height, src, family, value);

    return newObstacle;
}

const createHuman = (array, width, height) => {
    
    const maxHumanY = CANVAS_Y*5.5
    let humanY = Math.floor(Math.random() * (maxHumanY - minY + 1) + minY);

    const index = Math.floor(Math.random() * array.length);
    const src = array[index].src;
    const value = array[index].value;
    const family = array[index].family;
    const posY = humanY
    const newObstacle = new Objstacle(positionX, posY, width, height, src, family, value);

    return newObstacle;
}

const drawFish = (count) => {

    positionY = Math.floor(Math.random() * (maxY - minY + 1) + minY);
    
    if (count % 100 == 0) {
        const arr = imageArr[0].filter(item => item.value == 50)
        const width = CANVAS_X;
        const height = CANVAS_Y*1.5;
        const newObstacle = createElement(arr, width, height)
        objArr.array50.push(newObstacle)
    } else if (count % 35 == 0) {
        const arr = imageArr[5]
        const width = CANVAS_X;
        const height = CANVAS_Y*1.2;
        const newObstacle = createElement(arr, width, height)
        objArr.garbageArr.push(newObstacle)
    } else if (count % 1200 == 0) {
        const arr = imageArr[1].filter(item => item.value == 5000)
        const width = CANVAS_X*4;
        const height = CANVAS_Y*4;
        const newObstacle = createHuman(arr, width, height)
        humanObj.array5000.push(newObstacle)
    } else if (count % 670 == 0) {
        const arr = imageArr[1].filter(item => item.value == 1000)
        const width = CANVAS_X*5;
        const height = CANVAS_Y*5;
        const newObstacle = createHuman(arr, width, height)
        humanObj.array1000.push(newObstacle)
    } else if (count % 630 == 0) {
        const arr = imageArr[0].filter(item => item.value == 2000)
        console.log(arr)
        const width = CANVAS_X*5;
        const height = CANVAS_Y*5;
        const newObstacle = createElement(arr, width, height)
        objArr.array2000.push(newObstacle)
    } else if (count % 240 == 0) {
        const arr = imageArr[0].filter(item => item.value == 75)
        const width = CANVAS_X;
        const height = CANVAS_Y*1.2;
        const newObstacle = createElement(arr, width, height)
        objArr.array75.push(newObstacle)
    } else if (count % 165 == 0) {
        const arr = imageArr[0].filter(item => item.value == 100)
        const width = CANVAS_X*1.7;
        const height = CANVAS_Y*1.8;
        const newObstacle = createElement(arr, width, height)
        objArr.array100.push(newObstacle)
    } else if (count % 385 == 0) {
        const arr = imageArr[0].filter(item => item.value == 300)
        const width = CANVAS_X*1.4;
        const height = CANVAS_Y*2;
        const newObstacle = createElement(arr, width, height)
        objArr.array300.push(newObstacle)
    } else if (count % 140 == 0) {
        const arr = imageArr[0].filter(item => item.value == 500)
        const width = CANVAS_X*1.5;
        const height = CANVAS_Y*1.7;
        const newObstacle = createElement(arr, width, height)
        objArr.array500.push(newObstacle)
    }        
}

/*/--- End ---/*/

/*/--- BULLETS ---/*/
/*/--- BULLETS ---/*/

const bulletscr = '../images/bullets/star.png'
const bulletW = CANVAS_X *0.8;
const bulletH = CANVAS_Y;
let bulletX = undefined;
let bulletY = undefined;
let bulletSpeed = 300;
let isShooting = false;
let shot = false;

const drawBullet = () => {
    bulletArr.forEach((item, index) => {
        item.createObject();
        item.positionX += bulletSpeed
        bulletX = item.positionX;
        bulletY = item.positionY;
        if(item.positionX > CANVAS_X*10) {
            shot = false;
            isShooting = false;
            bulletY = undefined;
            bulletX = undefined;
            bulletArr.shift()
        }
    })
}

const bulletShoot = () => {
    if(isShooting && !shot) {
        bulletY = pipY + CANVAS_Y/2;
        bulletX = CANVAS_X*2;
        shot = true;
        const newBullet = new Objstacle(bulletX, bulletY, bulletW, bulletH, bulletscr, 'bullet', 0);
        bulletArr.push(newBullet)
    }
}

const gotShot = (item, index, array) => {
    const itemY = item.positionY; 
    const itemX = item.positionX;
    const value = item.value;
    const width = item.width;
    const name = item.name;
    const height = item.height;

    if(itemX  < bulletX
        && bulletY  < itemY + height-100
        && bulletY  > itemY - height+100) {
            array.splice(index,1)
            shot = false;
            isShooting = false;
            bulletY = undefined;
            bulletX = undefined;
            bulletArr.splice(0,1)
            displayScore(name, value, itemY, itemX);
    }
}

/*/--- End ---/*/

/*/--- SCORES ---/*/
/*/--- SCORES ---/*/

let scoreX = undefined;
const scoreSpeed = 100

const displayScore = (name, value, itemY, itemX) => {
    const score = imageArr[2];
    let newScore;
    scoreX = itemX
    if(name != 'humans') {
        GameScore -= value
        score.map(item => {
            if(item['value'] === value && item['action'] === 'substract') {
            newScore = item
            }
        }) 
        const element = new Objstacle(itemX, itemY, CANVAS_X/1.2, CANVAS_Y/1.2, newScore.src, newScore.family, newScore.value)
        scoreArr.push(element) 
    } else if (name == 'humans') {
        GameScore -= value
        score.map(item => {
            if(item['value'] === value && item['action'] === 'sum') {
            newScore = item
            }
        }) 
        const element = new Objstacle(itemX, itemY, CANVAS_X/1.2, CANVAS_Y/1.2, newScore.src, newScore.family, newScore.value)
        scoreArr.push(element) 
    }
}

const drawScore = (posX) => {
    scoreArr.forEach((item, index) => {
        item.createObject();
        item.positionY -= scoreSpeed;
        if(item.positionY < 0) {
            scoreArr.shift()
        }
    })
}

/*/--- End ---/*/

/*/--- Animate ---/*/
let countForPush = 0; 
let fishMvY = -10;
let countMov = 0;

const animate = () => {
    bgctx.clearRect(0, 0, bgX, bgY)
    ctx.clearRect(0, 0, CANVAS_X*10, CANVAS_Y*10)
    drawBG()
    drawPip()
    if (isShooting){
        bulletShoot()
    }
    if(scoreArr[0]){
        drawScore()
    }
    if(bulletArr[0]){
        drawBullet()
    }

   

    for (let array in objArr) {
        objArr[array].forEach((item, index) => {
            item.createObject();
            item.positionX -= speedX
            item.positionY += fishMvY
            countMov += fishMvY
            gotShot(item, index, objArr[array])
            if(countMov < -750) {
                fishMvY = 3
            } else if (countMov > 750) {
                fishMvY = -3
            }

            if(item.positionX < -2500) {
                objArr[array].shift()
            }
        })
    }

    if(humanObj.array5000.length >= 1 || humanObj.array1000.length >= 1) {
        for(let array in humanObj) {
            humanObj[array].forEach((item,index) => {
                item.createObject();
                item.positionX -= 30
                item.positionY += fishMvY
                countMov += fishMvY
                gotShot(item, index, humanObj[array])
                if(countMov < -750) {
                    fishMvY = 2
                } else if (countMov > 750) {
                    fishMvY = -2
                }
    
                if(item.positionX < -10000) {
                    humanObj[array].shift()
                }
            })
        }
    }

    if(!gameOver) {
        animateGameID = requestAnimationFrame(animate)
    } else { 
        cancelAnimationFrame(animateGameId);
    }
    

    if (animateGameID % 10 === 0) {
        countForPush +=  1
        if(countForPush % 100 === 0) {
            drawFish(countForPush)
        } else if (countForPush % 35 === 0) {
            drawFish(countForPush)
        } else if (countForPush % 1200 === 0) {
            drawFish(countForPush)
        } else if (countForPush % 670 === 0) {
            drawFish(countForPush)
        } else if (countForPush % 240 === 0) {
            drawFish(countForPush)
        } else if (countForPush % 165 === 0) {
            drawFish(countForPush)
        } else if (countForPush % 385 === 0) {
            drawFish(countForPush)
        } else if (countForPush % 140 === 0) {
            drawFish(countForPush)
        } else if (countForPush % 630 === 0) {
            drawFish(countForPush)
        }
    }
}

/*/--- End ---/*/

function setCanvasSize(){

    height = window.innerHeight;
    width = window.innerWidth;

    document.getElementById('canvas-bg').style.height = height + "px";
    document.getElementById('canvas-bg').style.width = width + "px";
}

window.onload = () => {

    setCanvasSize()
    animate()
    drawFish(100)
    

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
        if(event.key === " ") {
            // shoot 
            isShooting = true;
            
        }
    })

    document.addEventListener('keyup', () => {
        // Stop moving the paddle
        isMovingUP = false
        isMovingDown = false 
    })
    
}