/*/--- Image Src ---/*/
/*/--- Image Src ---/*/
const srcObj = {
    500: [
        './images/50/crab.png',
        './images/100/erizo.png',
        './images/1000/seaHorse.png',
    ],
    750: [
        './images/75/goldenfish.png',
        './images/75/greyfish.png',
        './images/75/nemo.png',
        './images/75/redfish.png',
    ],
    1250: [
        './images/100/blueFish.png',
        './images/100/boy1.png',
        './images/100/orangefish.png',
    ],
    1750: [
        './images/300/girl1.png',
        './images/300/jelly1.png',
        './images/300/jelly2.png',
    ],
    1500: [
        './images/500/seaHorse1.png',
        './images/500/turtle1.png',
        './images/1000/octopus.png',
        './images/500/turtle2.png',
    ],
    1000: [
        './images/1000/submarine/submarine1.png',
        './images/1000/submarine/submarine2.png',
        './images/1000/diverHarpoon.png',
    ],
    2000: [
        './images/500/shark3.png',
        './images/500/shark4.png',
    ],
    2500: [
        './images/5000/mine.png',
    ],
    5000: [
        './images/5000/aquaman.png',
    ],
    scores: [
        './images/buttons/G50.png',
        './images/buttons/G75.png',
        './images/buttons/G100.png',
        './images/buttons/G300.png',
        './images/buttons/G500.png',
        './images/buttons/G1000.png',
        './images/buttons/G2000.png',
        './images/buttons/G2500.png',
        './images/buttons/G5000.png',
        './images/buttons/R50.png',
        './images/buttons/R75.png',
        './images/buttons/R100.png',
        './images/buttons/R300.png',
        './images/buttons/R750.png',
        './images/buttons/R1250.png',
        './images/buttons/R1500.png',
        './images/buttons/R1750.png',
        './images/buttons/R500.png',
        './images/buttons/R1000.png',
        './images/buttons/R2000.png',
        './images/buttons/R5000.png',
    ],
    garbage: [
        './images/100/camera.png',
        './images/100/cocan.png',
        './images/300/plasticbag.png',
        './images/300/plasticbag1.png',
        './images/300/plasticbag2.png',
        './images/500/plasticbottle.png',
        './images/500/plasticbottle1.png',
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
        if(value == 500 || value == 750 || value == 1250 || value == 1750 || value == 1500 || value == 2000) {
            srcObj[value].forEach(src => {
                const val =  {
                    family: 'life',
                    src: src,
                    value: parseInt(value)
                }
                lifeArr.push(val)
            });
        } else if(value == 5000 || value == 1000 || value == 2500) {
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
                    value: 300
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
bgImg.src = './images/seaBGCrop.png';
let seaX = -50;
let seaY = -50; 
let bgMove = .1;

const boat = new Image();
boat.src = './images/naufragio.png'

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
const audio = document.getElementById('transition')
audio.volume = 0.2
const waterAudio = document.getElementById('underWater')
waterAudio.volume = 0.2
const music = document.getElementById('musicGame')
music.volume = 0.1
const minY = CANVAS_Y/2;
const maxY = CANVAS_Y*10 - CANVAS_Y*10/3
const positionX = CANVAS_X*10
let isMovingUP = false
let isMovingDown = false
let gameOver = false;
let gameScore = 0;
let positionY = 0;
let speedX = 35;

/* variables for recursive images */

let recursive1 = 37;
let recursive2 = 27;
let recursive3 = 67;
let recursive4 = 117;
let recursive5 = 97;
let recursive6 = 107;
let recursive7 = 127;
let recursive8 = 57;
let recursive9 = 77;

/*/--- End ---/*/

/*/--- PIP ---/*/
/*/--- PIP ---/*/
const pip = new Image();
const pipX = CANVAS_X/2;
const pipWidth = CANVAS_X*2;
const pipHeight = CANVAS_Y*2;
let pipY = CANVAS_Y*4;
let pipSpeed = 100;
pip.src = './images/pip.png';

const coral = new Image();
coral.src = './images/coral.png'

const drawPip = () => {

    ctx.drawImage(pip, pipX, pipY, pipWidth, pipHeight)
    ctx.drawImage(coral, CANVAS_X/0.35, CANVAS_Y*6.2, CANVAS_X*4, CANVAS_Y*4)
   
    if (isMovingUP && pipY > minY) {
        pipY -= pipSpeed
    }
    if (isMovingDown && pipY < CANVAS_Y*10 - CANVAS_Y*10/4.5) {
        pipY += pipSpeed
    }
}
/*/--- End ---/*/

/*/--- OBSTACLES ---/*/
/*/--- OBSTACLES ---/*/

const objArr = [];
const humanObj = [];
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
    
    if (count % recursive1 == 0) {
        const arr = imageArr[0].filter(item => item.value == 500)
        const width = CANVAS_X;
        const height = CANVAS_Y*1.5;
        const newObstacle = createElement(arr, width, height)
        objArr.push(newObstacle)
    } else if (count % recursive2 == 0) {
        const arr = imageArr[5]
        const width = CANVAS_X;
        const height = CANVAS_Y*1.4;
        const newObstacle = createElement(arr, width, height)
        //objArr.garbageArr.push(newObstacle)
        objArr.push(newObstacle)
    } else if (count % recursive3 == 0) {
        const arr = imageArr[1].filter(item => item.value == 2500)
        const width = CANVAS_X;
        const height = CANVAS_Y*1.4;
        const newObstacle = createHuman(arr, width, height)
        humanObj.push(newObstacle)
        //objArr.array50.push(newObstacle)
    }  else if (count % recursive4 == 0) {
        const arr = imageArr[1].filter(item => {if (item.value == 1000 || item.value == 5000) return item })
        const width = CANVAS_X*4;
        const height = CANVAS_Y*4;
        const newObstacle = createHuman(arr, width, height)
        humanObj.push(newObstacle)
        // objArr.array50.push(newObstacle)
    } else if (count % recursive5 == 0) {
        const arr = imageArr[0].filter(item => item.value == 2000)
        const width = CANVAS_X*3.5;
        const height = CANVAS_Y*3;
        const newObstacle = createElement(arr, width, height)
        //objArr.array2000.push(newObstacle)
        objArr.push(newObstacle)
    } 
    else if (count % recursive6 == 0) {
        const arr = imageArr[0].filter(item => item.value == 750)
        const width = CANVAS_X;
        const height = CANVAS_Y*1.2;
        const newObstacle = createElement(arr, width, height)
        //objArr.array75.push(newObstacle)
        objArr.push(newObstacle)
    } else if (count % recursive7 == 0) {
        const arr = imageArr[0].filter(item => item.value == 1250)
        const width = CANVAS_X*1.7;
        const height = CANVAS_Y*1.8;
        const newObstacle = createElement(arr, width, height)
        //objArr.array100.push(newObstacle)
        objArr.push(newObstacle)
    } else if (count % recursive8 == 0) {
        const arr = imageArr[0].filter(item => item.value == 1750)
        const width = CANVAS_X*1.4;
        const height = CANVAS_Y*2;
        const newObstacle = createElement(arr, width, height)
        //objArr.array300.push(newObstacle)
        objArr.push(newObstacle)
    } else if (count % recursive9 == 0) {
        const arr = imageArr[0].filter(item => item.value == 1500)
        const width = CANVAS_X*1.5;
        const height = CANVAS_Y*1.7;
        const newObstacle = createElement(arr, width, height)
        //objArr.array500.push(newObstacle)
        objArr.push(newObstacle)
    }        
}

/*/--- End ---/*/

/*/--- BULLETS ---/*/
/*/--- BULLETS ---/*/

const bulletscr = './images/bullets/star.png'
const bulletW = CANVAS_X *0.8;
const bulletH = CANVAS_Y;
let bulletX = undefined;
let bulletY = undefined;
let bulletSpeed = 300;
let isShooting = false;
let shot = false;

const drawBullet = () => {
    const audio = document.getElementById('bullet')
    audio.play()

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
        bulletX = CANVAS_X*2.3;
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

    if(itemX - width/2 < bulletX
        && bulletY - bulletH/2 < itemY + height/2
        && bulletY + bulletH/2 > itemY - height/2) {
            shot = false;
            isShooting = false;
            bulletY = undefined;
            bulletX = undefined;
            bulletArr.splice(0,1)
            if(name == 'garbage' || value == '2500') {
                return
            } if (name == 'humans'){
                const audio = document.getElementById('waterExplosion')
                audio.play()
                array.splice(index,1)
                displayScore(name, value, itemY, itemX);
            } else {
                const audio = document.getElementById('fishShot')
                audio.play()
                array.splice(index,1)
                displayScore(name, value, itemY, itemX);
            }
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
    if (name == 'humans' || name == 'garbage') {
        gameScore += value
        score.map(item => {
            if(item['value'] === value && item['action'] === 'sum') {
            newScore = item
            }
        }) 
        const element = new Objstacle(itemX, itemY, CANVAS_X/1.2, CANVAS_Y/1.2, newScore.src, newScore.family, newScore.value)
        scoreArr.push(element) 
    } else {
        gameScore -= value
        score.map(item => {
            if(item['value'] === value && item['action'] === 'substract') {
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

/*/--- COLLISION ---/*/
/*/--- COLLISION ---/*/
const pipCollided = (item, index, array) => {
    const itemY = item.positionY; 
    const itemX = item.positionX;
    const width = item.width;
    const height = item.height;
    const value = item.value;
    const group = item.name;

    if(itemX + width/2 < pipX + pipWidth
        && itemX + width/2 > pipX 
        && pipY - pipHeight/3.5  < itemY + height/2
        && pipY + pipHeight/3  > itemY - height/2) {
            array.splice(index,1)
        if(group == 'garbage') {
            gameScore += value;
            const audio = document.getElementById('garbage')
            audio.play()
        } else if (value === 2000 || value === 1000 || value === 5000 || value === 2500) {
            gameOver = true;
        } else {
            gameScore -= value;
            const audio = document.getElementById('collision')
            audio.play()
        }
            
    }
}

const pipCollidedHuman = (item, index, array) => {
    const itemY = item.positionY; 
    const itemX = item.positionX;
    const width = item.width;
    const height = item.height;
    const value = item.value;
    const group = item.name;

    if(itemX - width/3 < pipX 
        && itemX + width/3 > pipX - pipWidth/3
        && pipY - pipHeight/3  < itemY + height/3
        && pipY + pipHeight/3  > itemY - height/3) {
            array.splice(index,1)
            gameOver = true;
    }
}
/*/--- End ---/*/

/*/--- Animate ---/*/
let countForPush = 0; 
let fishMvY = -10;
let countMov = 0;
let countForSpeed = 0;

const animate = () => {
    bgctx.clearRect(0, 0, bgX, bgY)
    ctx.clearRect(0, 0, CANVAS_X*10, CANVAS_Y*10)
    
    if (gameScore < 0) {
        document.getElementById('score').innerHTML = 0
    } else document.getElementById('score').innerHTML = gameScore

    drawBG()
    drawPip()
    
    countForSpeed += 1;

    if (isShooting){
        bulletShoot()
    }
    if(scoreArr[0]){
        drawScore()
    }
    if(bulletArr[0]){
        drawBullet()
    }

    if (countForSpeed % 550 == 0 && countForSpeed != 0) {
        speedX += 3;
        if (recursive4 > 40) {
            if(recursive2 > 10) {
                recursive1 -= 4;
                recursive2 -= 4;
                recursive8 -= 4;
            }
            if (recursive3 > 30) {
                recursive3 -= 10;
                recursive5 -= 10;
                recursive9 -= 10;
            }
            recursive4 -= 20;
            recursive6 -= 20;
            recursive7 -= 20;
        }
    }

    if (gameScore < 0) {
        gameOver = true
    }

    if (gameScore > 10000) {
    }

    objArr.forEach((item, index) => {
        item.createObject();
        item.positionX -= speedX
        item.positionY += fishMvY
        countMov += fishMvY
        if(isShooting && shot) {
            gotShot(item, index, objArr)
        }
        if (item.value === 2000) {
            pipCollidedHuman(item, index, objArr)
        }
        pipCollided(item, index, objArr)
        if(countMov < -750) {
            fishMvY = 3
        } else if (countMov > 750) {
            fishMvY = -3
        }

        if(item.positionX < -2500) {
            objArr.shift()
        }
    })

    
    humanObj.forEach((item,index) => {
        item.createObject();
        item.positionX -= speedX
        item.positionY += fishMvY
        countMov += fishMvY
        if (isShooting && shot) {
            gotShot(item, index, humanObj)
        }
        pipCollidedHuman(item, index, humanObj)
        if(countMov < -750) {
            fishMvY = 2
        } else if (countMov > 750) {
            fishMvY = -2
        }

        if(item.positionX < -10000) {
            humanObj.shift()
        }
    })
    

    if(!gameOver) {
        animateGameID = requestAnimationFrame(animate)
    } else { 
        const gameOveraudio = document.getElementById('gameOverSound')
        gameOveraudio.play()
        gameOveraudio.volume = 0.2;
        waterAudio.pause()
        bgctx.clearRect(0, 0, bgX, bgY)
        ctx.clearRect(0, 0, CANVAS_X*10, CANVAS_Y*10)
        cancelAnimationFrame(animateGameID);
        
        if (gameScore < 0) {
            gameScore = 0;
            document.querySelector('.score .final-score').innerHTML = `${gameScore} PIP`
        } else document.querySelector('.score .final-score').innerHTML = `${gameScore} PIP`

        countForPush = 0; 
        fishMvY = -10;
        countMov = 0;
        countForSpeed = 0;
        isMovingUP = false
        isMovingDown = false
        gameOver = false;
        gameScore = 0;
        positionY = 0;
        speedX = 25;
        pipY = CANVAS_Y*4;
        recursive1 = 37;
        recursive2 = 27;
        recursive3 = 67;
        recursive4 = 117;
        recursive5 = 97;
        recursive6 = 107;
        recursive7 = 127;
        recursive8 = 57;
        recursive9 = 77;

        const gameCanvas = document.getElementById('game-board');
        gameCanvas.classList.add('fade');
        setTimeout(() => {
            gameCanvas.classList.add('hide')
            gameCanvas.classList.remove('show')
            clearTimeout()
        }, 1800);
        const gameOverBg = document.querySelector('.game-over-bg');
        gameOverBg.classList.remove('fade', 'hide')
        gameOverBg.classList.add('show');

        humanObj.splice(0, humanObj.length);
        objArr.splice(0, objArr.length);
        scoreArr.splice(0,scoreArr.length);
        bulletArr.splice(0,bulletArr.length);
        
    }
    
    if(objArr.length < 4 && humanObj.length <= 2) {
        if (animateGameID % 10 === 0) {
            countForPush +=  1
            if(countForPush % recursive1 === 0) {
                drawFish(countForPush)
            } else if (countForPush % recursive2 === 0) {
                drawFish(countForPush)
            } else if (countForPush % recursive3 === 0) {
                drawFish(countForPush)
            } else if (countForPush % recursive4 === 0) {
                drawFish(countForPush)
            } else if (countForPush % recursive5 === 0) {
                drawFish(countForPush)
            } else if (countForPush % recursive6 === 0) {
                drawFish(countForPush)
            } else if (countForPush % recursive7 === 0) {
                drawFish(countForPush)
            } else if (countForPush % recursive8 === 0) {
                drawFish(countForPush)
            } else if (countForPush % recursive9 === 0) {
                drawFish(countForPush)
            }
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
    document.querySelector('#start-button').addEventListener('click', () => {
        startGame()
    })
    
    setCanvasSize()

    window.addEventListener("resize",setCanvasSize,false);

    const gameOverBg = document.querySelector('.game-over-bg');
    gameOverBg.classList.add('hide');
    const gameCanvas = document.getElementById('game-board');
    gameCanvas.classList.add('hide')

    setTimeout(() => {
        music.play();
    }, 1000)
    music.volume = 0.1;
    
    document.addEventListener('keydown', event => {
        if (event.key.toLowerCase() === "s") {
            if (!music.paused) {
                music.pause();
                music.currentTime = 0;
            } else music.play()
        }
    })

    document.addEventListener('keydown', event => {
        if (event.key.toLowerCase() === "a") {
            document.querySelectorAll('audio').forEach(audio => {   
                audio.muted = !audio.muted;              
            })
        }
    })
    
    const startGame = () => {
        
        const startBg = document.querySelector('.moving-bg');
        startBg.classList.add('fade');
        setTimeout(() => {
            startBg.classList.add('hide')
            clearTimeout()
        }, 1700)
        
        const gameCanvas = document.getElementById('game-board');
        gameCanvas.classList.remove('hide', 'fade')
        gameCanvas.classList.add('show');
        
        audio.play()
        waterAudio.play()
        waterAudio.volume = .5;
        
        animate()
        drawFish(recursive1)

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

    document.querySelector('#reStart').addEventListener('click', () => {
        const gameOverBg = document.querySelector('.game-over-bg');
        gameOverBg.classList.add('fade');
        setTimeout(() => {
            gameOverBg.classList.add('hide')
            gameOverBg.classList.remove('show')
            clearTimeout()
        }, 1700)
        audio.play()
        startGame()
    })

    document.querySelector('.home-icon').addEventListener('click', () => {
        const gameOverBg = document.querySelector('.game-over-bg');
        gameOverBg.classList.remove('show')
        gameOverBg.classList.add('hide')
        const startBg = document.querySelector('.moving-bg');
        startBg.classList.remove('hide', 'fade')
        startBg.classList.add('show');
        audio.play()
        waterAudio.pause()
        music.play();
        document.querySelectorAll('audio').forEach(audio => {   
            audio.muted = false;              
        })
    })

}